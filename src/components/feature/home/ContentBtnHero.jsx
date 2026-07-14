"use client";
import Button from "@/components/ui/Button";
import { openWhatsApp } from "@/feature/chat/whatsappAction";
import { BRANCH_PHONES } from "@/utils/constants/branchPhones";
import { getRoute } from "@/utils/paths";
import { useRouter } from "next/navigation";

export function ContentBtnHero() {
  const router = useRouter();

  return (
    <>
      <Button
        type="primary"
        variant="solid"
        size="lg"
        className="w-full sm:w-auto"
        onClick={() => {
          openWhatsApp({
            phone: BRANCH_PHONES.CDMX.whatsapp,
            message:
              "Hola, estoy interesado en sus productos PET. Me gustaría recibir asesoría y una cotización.",
          });
        }}
      >
        Solicitar cotización
      </Button>

      <Button
        className="w-full sm:w-auto text-white border-white hover:border-brand-primary hover:bg-brand-primary"
        type="secondary"
        variant="outline"
        size="lg"
        onClick={() => router.push(getRoute("/catalogo"))}
      >
        Ver catalogo
      </Button>
    </>
  );
}
