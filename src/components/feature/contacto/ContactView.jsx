import ContactForm from "./ContactForm";
import ContactMethods from "./ContactMethods";
import BranchList from "./BranchList";
import { sucursalesData } from "@/utils/constants/sucursales";

export default function ContactView() {
  const sucursal = sucursalesData.find(
    (s) => s.name === "CDMX", // 👈 ojo, tenías un bug (=)
  );

  return (
    <div className="w-full h-full bg-bgligth-secondary dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <header className="py-8">
          <h1 className="text-4xl font-black">
            Póngase en contacto con nosotros
          </h1>
          <p className="mt-3">
            Complete el siguiente formulario o utilice otros métodos.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <ContactForm />

          <div className="lg:col-span-2 flex flex-col gap-10">
            <ContactMethods />

            <div className="h-64 rounded-xl overflow-hidden">
              <iframe
                src={sucursal?.mapUrl}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <BranchList />
          </div>
        </div>
      </div>
    </div>
  );
}
