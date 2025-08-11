import { Button } from "@/components/ui/button"
import { Calendar, Phone, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function DepartmentCta() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("cta1.title")}</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t("cta1.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-white/90 h-12 px-6 text-base">
              <Calendar className="mr-2 h-5 w-5" /> {t("cta1.book")}
            </Button>
            <Button variant="outline" className="border-white text-green-600 hover:bg-white/90 h-12 px-6 text-base">
              <Phone className="mr-2 h-5 w-5" /> {t("cta1.emergency")}
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>
              {t("cta1.notSure")}{" "}
              <a href="#" className="text-white underline hover:text-white/90">
                {t("cta1.symptomChecker")} <ArrowRight className="inline h-4 w-4" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
