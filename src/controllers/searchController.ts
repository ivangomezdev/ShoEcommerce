import { index } from "@/lib/algoliaSearch";


//traigo la data de los params y se la paso a algolia
export const searchData = (searchParams:URLSearchParams) =>{
    const query = searchParams.get("q") as string
    const limit = searchParams.get("limit")
    const limitNumber = parseInt(limit as string)

    algoliaSearch(query,limitNumber)
}

//search en algolia
export const algoliaSearch = async (query:string,limit:number) =>{

   const data =  index.search(query, {
        hitsPerPage: limit,
      }).then(({ hits }) => {
        console.log(hits);
       return hits
      });


      
      return data
      
}