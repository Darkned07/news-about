import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const [i, setI] = useState(true);
  const { data } = useFetch("http://localhost:3000/news");
  return <div>{data && i && <NewsList data={data} set={setI} />}</div>;
}

export default Home;
