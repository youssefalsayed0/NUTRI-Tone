import { useTranslation } from "react-i18next";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <Banner title={t("banner.contact-us")}  />
        <ContactForm />
      </main>
    </>
  );
}
