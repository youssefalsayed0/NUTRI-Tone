import { useTranslation } from "react-i18next";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";

export default function Packages() {
  const { t } = useTranslation();
  return (
    <>
   <main>
       <Banner title={t("banner.packages")} />
       <Outlet />
   </main>
    </>
  );
}
