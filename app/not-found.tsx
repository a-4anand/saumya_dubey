import { TrackableLink } from "@/components/trackable-link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">Not found</p>
        <h1>This page does not exist.</h1>
        <p className="section-description">
          The information may have moved, but the contact route is still active.
        </p>
        <TrackableLink className="button button-primary" href="/contact">
          Go to contact
        </TrackableLink>
      </div>
    </section>
  );
}
