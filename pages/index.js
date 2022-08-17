import { getAllPageData } from "../utils";

export async function getServerSideProps(context) {
  const { navData, pageData } = await getAllPageData(context)

  return {
    props: { navData, pageData, locale: context.locale },
  };
}

export default function Home({pageData}) {
  return (
    <div>
      {pageData.title}
    </div>
  );
}
