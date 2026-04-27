import { sucursalesData } from "@/utils/constants/sucursales";
import BranchCard from "./BranchCard";

export default function BranchList() {
  const branches = sucursalesData.filter(
    (sucursal) => sucursal.name !== "CDMX",
  );

  return (
    <section className="flex flex-col gap-4 bg-[var(--color-surface-elevated)] border border-[var(--color-border-default)] p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl font-bold text-txtligth-primary dark:text-txtdark-primary">
        Nuestras Sucursales
      </h3>

      {branches.map((branch) => (
        <BranchCard
          key={branch.name}
          path={branch.path}
          address={branch.address}
          city={branch.name}
          phone={branch.phone}
        />
      ))}
    </section>
  );
}
