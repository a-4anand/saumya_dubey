import Script from "next/script";

import { contactConfig } from "@/lib/site";

import { PageViewTracker } from "./page-view-tracker";

export function Analytics() {
  if (!contactConfig.analyticsId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${contactConfig.analyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${contactConfig.analyticsId}', {
            send_page_view: false
          });
        `}
      </Script>
      <PageViewTracker />
    </>
  );
}
