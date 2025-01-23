import algoliasearch from "algoliasearch";

const appID = "1D3OVPR4KC";
const apiKey = "2144d625ab2526a3e5c2d32685a91c80";

 const client = algoliasearch(appID, apiKey);
 export const index = client.initIndex("products");