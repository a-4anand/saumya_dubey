import { LocalSeoPageView } from "@/components/local-seo-page";
import { getLocalSeoPage } from "@/data/local-seo";
import { createMetadata } from "@/lib/metadata";

const page = getLocalSeoPage("gmp-consultant-surat")!;

export const metadata = createMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  keywords: page.keywords,
});

export default function GmpConsultantSuratPage() {
  return <LocalSeoPageView page={page} />;
}
