import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { API, context_key } from "../Keys";
import SearchResults from "../components/SearchResults";

function Search({ data }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term}-Google</title>
      </Head>
      <Header />
      <SearchResults data={data} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const DummyData = false;
  const StartIndex = context.query.start || "0";
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API}&cx=${context_key}&q=${context.query.term}&start=${StartIndex}`
  ).then((res) => res.json());
  return {
    props: {
      data,
    },
  };
}

export default Search;
