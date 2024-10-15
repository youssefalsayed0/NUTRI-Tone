import { useTranslation } from "react-i18next";
import Banner from "../Banner/Banner";
import TermsSection from "../TermsSection/TermsSection";

export default function Terms() {
const {t} =  useTranslation();


  return (
<>

<Banner title={t("banner.terms")} image={""}/>
<TermsSection/>
    </>
  );
}
