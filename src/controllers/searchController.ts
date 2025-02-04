import { index } from "@/lib/algoliaSearch";

//traigo la data de los params y se la paso a algolia
export const searchData = (searchParams: URLSearchParams) => {
  const query = searchParams.get("q") as string;
  const limit = searchParams.get("limit");
  const limitNumber = parseInt(limit as string);
  

  return algoliaSearch(query, limitNumber);
};

//search en algolia
export const algoliaSearch = async (query: string, limit: number) => {
  const data = await index
    .search(query, {
      hitsPerPage: limit,
    })
    .then(({ hits }) => {

      return hits;
    });



  return data;
};
