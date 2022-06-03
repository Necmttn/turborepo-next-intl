import { Button } from "ui";
import { useTranslations } from "next-intl";

function Docs() {
  const t = useTranslations('process')
  return (
    <div>
      <h1>Docs</h1>
      <p>{t('title')}</p>
      <Button />
    </div>
  );

}

export async function getStaticProps({ locale }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}
export default Docs
