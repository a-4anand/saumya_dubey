import { LocalSeoPageView } from "@/components/local-seo-page";
import { getLocalSeoPage } from "@/data/local-seo";
import { createMetadata } from "@/lib/metadata";

const page = getLocalSeoPage("qa-consultant-gujarat")!;

export const metadata = createMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  keywords: page.keywords,
});

export default function QaConsultantGujaratPage() {
  return <LocalSeoPageView page={page} />;
}
