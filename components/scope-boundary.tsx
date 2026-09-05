export function ScopeBoundary({ items }: { items: string[] }) {
  return (
    <article className="card scope-boundary">
      <p className="eyebrow">Scope Boundary</p>
      <h2>What this service does not replace.</h2>
      <ul className="detail-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        Client-authorized personnel retain regulated approvals, release decisions, licences and
        statutory responsibilities.
      </p>
    </article>
  );
}
