import { LocalSeoPageView } from "@/components/local-seo-page";
import { getLocalSeoPage } from "@/data/local-seo";
import { createMetadata } from "@/lib/metadata";

const page = getLocalSeoPage("pharma-qa-documentation-consultant-gujarat")!;

export const metadata = createMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  keywords: page.keywords,
});

export default function PharmaQaDocumentationConsultantGujaratPage() {
  return <LocalSeoPageView page={page} />;
}
