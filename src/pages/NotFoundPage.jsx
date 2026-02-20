import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>404</h1>
      <p>{t("notFound.message", "Stranica nije pronađena.")}</p>
    </div>
  );
}

export default NotFoundPage;
