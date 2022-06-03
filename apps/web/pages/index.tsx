import { useTranslations } from "next-intl";
import { Button } from "ui";

function Web() {
  const t = useTranslations('hero')
  return (
    <div>
      <h1>Web</h1>
      <p>{t('title')}</p>
      {/* <Button /> */}
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
export default Web  
