import Link from "next/link";

export default function BranchCard({ city, address, phone, path }) {
  return (
    <Link href={`/sucursales/${path}`}>
      <article className="p-5 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-soft)] transition">
        {/* Ciudad */}
        <p className="font-bold text-txtligth-primary dark:text-txtdark-primary">
          {city}
        </p>

        {/* Dirección */}
        <p className="text-sm text-txtligth-secondary dark:text-txtdark-secondary">
          {address}
        </p>

        {/* Teléfono */}
        <p className="text-sm text-txtligth-secondary dark:text-txtdark-secondary">
          Tel: {phone.join(", ")}
        </p>
      </article>
    </Link>
  );
}
