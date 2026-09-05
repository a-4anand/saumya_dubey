import { TrackableLink } from "@/components/trackable-link";
import { createMetadata } from "@/lib/metadata";

export const metadata = {
  ...createMetadata({
  title: "Page not found | QORIVARA Life Sciences",
  description: "The requested QORIVARA page could not be found.",
  path: "/404",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">Not found</p>
        <h1>This page does not exist.</h1>
        <p className="section-description">
          The information may have moved. Services, insights and contact routes are still active.
        </p>
        <div className="hero-actions">
          <TrackableLink className="button button-primary" href="/services">
            View services
          </TrackableLink>
          <TrackableLink className="button button-secondary" href="/insights">
            Read insights
          </TrackableLink>
          <TrackableLink className="button button-secondary" href="/contact">
            Contact QORIVARA
          </TrackableLink>
        </div>
      </div>
    </section>
  );
}
