import { useTranslation } from "react-i18next";
import Banner from "../Banner/Banner";
import PrivacySection from "../PrivacySection/PrivacySectoin";

export default function Privacy() {
    const {t} =  useTranslation();
  return (
<>
<Banner title={t("banner.privacy")} />
<PrivacySection/>
</>
  )
}
