"use client";
import Button from "@/components/ui/Button";
import { openWhatsApp } from "@/feature/chat/whatsappAction";
import { BRANCH_PHONES } from "@/utils/constants/branchPhones";
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
            message: encodeURIComponent(
              "Estoy interesado(a) en adquirir productos PET, quisiera asesorarme y cotizar.",
            ),
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
        onClick={() => router.push("/catalogo")}
      >
        Ver catalogo
      </Button>
    </>
  );
}
