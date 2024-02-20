import { useRecoilValue } from "recoil";
import { summonerAtom } from "../atoms/Atoms";
import useGetSummonerQuery from "../queries/useGetSummonerQuery";

function Search() {
  const summoner = useRecoilValue(summonerAtom);
  const { isLoading, isSuccess, data, error } = useGetSummonerQuery(summoner);

  if (isLoading) console.log("loading");

  if (error) console.log("error");

  if (isSuccess) {
    console.log(data);
    return (
      <main>
        <article>
          <figure></figure>
          <div>
            <p>ID</p>
            <p>something</p>
          </div>
        </article>
        <section></section>
      </main>
    );
  }
}

export default Search;
