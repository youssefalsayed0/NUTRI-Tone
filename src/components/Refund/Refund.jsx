import { useTranslation } from "react-i18next";
import Banner from "../Banner/Banner";
import RefundSection from "../RefundSection/RefundSection";

export default function Refund() {
    const {t} =  useTranslation();
  return (
<>
<Banner title={t("banner.refund")} image={""}/>
<RefundSection/>
</>
  )
}
