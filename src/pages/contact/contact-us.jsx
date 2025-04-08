import { SectionLayout } from "../../components/section/section-layout";
import { Breadcrumbs } from "../../components/uikit/ui-breadcrumbs";
import { ContactSection } from "./contact-section";

const loadData = {
    "contacts": [
      {
        "id": 1,
        "name": "Іван Іванов",
        "phone": "+380501234567",
        "email": "ivan@example.com"
      },
      {
        "id": 2,
        "name": "Олена Петрівна",
        "phone": "+380631112233",
        "email": "olena@example.com"
      }
    ]
  }

export function ContactAsPage() {
  return (
    <div className="min-h-[650px] w-full h-full mt-[85px] mb-[140px]">
      <Breadcrumbs className="pl-[135px]"></Breadcrumbs>
      <SectionLayout
              className="mt-[80px]"
              mainContent={<ContactSection loadData={loadData}/>}></SectionLayout>
    </div>
  );
}
