// Connexion en direct au CMS Devanture (Supabase) pour Les Acolytes.
// Si CMS_CONFIG.siteId n'est pas renseigné, toutes les fonctions ci-dessous
// renvoient null et les pages gardent leur contenu statique (src/lib/content.ts).

const CMS_CONFIG = {
  supabaseUrl: "https://kekjsyqakhpuzxxeralm.supabase.co",
  supabaseAnonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtla2pzeXFha2hwdXp4eGVyYWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNDgwNDAsImV4cCI6MjA5OTYyNDA0MH0.vZdboaaVCYThBNH4zXGrb8gEYXwzmk5uHCoPiLFXhUI",
  siteId: "380c8c80-0cb6-4374-8684-ea40ad6825f2",
};

const isConfigured =
  CMS_CONFIG.supabaseUrl.startsWith("https://") &&
  CMS_CONFIG.supabaseAnonKey.length > 20 &&
  CMS_CONFIG.siteId.length > 10;

export type CmsSiteSettings = {
  business_name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  opening_hours: { jour: string; horaires: string }[];
  social_links: { facebook?: string; instagram?: string; site_web?: string; reservation_url?: string };
};

export type CmsProduct = {
  id: string;
  section_id: string | null;
  name: string;
  description: string;
  price: number | null;
  image_url: string | null;
  position: number;
};

export type CmsCatalogSection = {
  id: string;
  name: string;
  position: number;
  products: CmsProduct[];
};

export type CmsPageBlock = {
  id: string;
  heading: string;
  body: string;
  image_url: string | null;
  position: number;
};

async function fetchFromCms<T>(table: string, query: string): Promise<T[] | null> {
  if (!isConfigured) return null;

  const url =
    CMS_CONFIG.supabaseUrl + "/rest/v1/" + table + "?site_id=eq." + CMS_CONFIG.siteId + query;

  try {
    const res = await fetch(url, {
      headers: {
        apikey: CMS_CONFIG.supabaseAnonKey,
        Authorization: "Bearer " + CMS_CONFIG.supabaseAnonKey,
      },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T[];
  } catch {
    return null;
  }
}

export async function getCmsSiteSettings(): Promise<CmsSiteSettings | null> {
  const rows = await fetchFromCms<CmsSiteSettings>("site_settings", "&select=*");
  return rows && rows[0] ? rows[0] : null;
}

export async function getCmsCatalog(): Promise<CmsCatalogSection[] | null> {
  const [sections, products] = await Promise.all([
    fetchFromCms<{ id: string; name: string; position: number }>(
      "catalog_sections",
      "&select=*&order=position.asc"
    ),
    fetchFromCms<CmsProduct>("products", "&select=*&order=position.asc"),
  ]);

  const hasSections = Boolean(sections && sections.length);
  const hasProducts = Boolean(products && products.length);
  if (!hasSections && !hasProducts) return null;

  const result: CmsCatalogSection[] = (sections ?? []).map((section) => ({
    ...section,
    products: (products ?? []).filter((p) => p.section_id === section.id),
  }));

  // Produits pas encore rattachés à une rubrique : on les montre quand même,
  // sinon ils resteraient invisibles sur le site tant qu'aucune rubrique
  // n'existe (c'était le bug : le catalogue entier disparaissait si
  // catalog_sections était vide, même avec des produits déjà créés).
  const unassigned = (products ?? []).filter((p) => !p.section_id);
  if (unassigned.length) {
    result.push({ id: "unassigned", name: "Autres plats", position: result.length, products: unassigned });
  }

  return result;
}

export async function getCmsPageBlocks(slug: string): Promise<CmsPageBlock[] | null> {
  if (!isConfigured) return null;

  const url =
    CMS_CONFIG.supabaseUrl +
    "/rest/v1/pages?site_id=eq." +
    CMS_CONFIG.siteId +
    "&slug=eq." +
    encodeURIComponent(slug) +
    "&select=id";

  try {
    const res = await fetch(url, {
      headers: {
        apikey: CMS_CONFIG.supabaseAnonKey,
        Authorization: "Bearer " + CMS_CONFIG.supabaseAnonKey,
      },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const pages = (await res.json()) as { id: string }[];
    const page = pages[0];
    if (!page) return null;

    const blocksUrl =
      CMS_CONFIG.supabaseUrl +
      "/rest/v1/page_blocks?page_id=eq." +
      page.id +
      "&select=*&order=position.asc";
    const blocksRes = await fetch(blocksUrl, {
      headers: {
        apikey: CMS_CONFIG.supabaseAnonKey,
        Authorization: "Bearer " + CMS_CONFIG.supabaseAnonKey,
      },
      next: { revalidate: 60 },
    });
    if (!blocksRes.ok) return null;
    const blocks = (await blocksRes.json()) as CmsPageBlock[];
    return blocks.length ? blocks : null;
  } catch {
    return null;
  }
}
