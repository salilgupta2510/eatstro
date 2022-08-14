import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://mockend.com/lakhanmandloi/fake-api/graphql`;

const graphQLClient = new GraphQLClient(API_URL);

export function useGetItems() {
  return useQuery(["items"], async () => {
    return await graphQLClient.request(gql`
      {
        items {
          id
          desc
          name
          favoriteCount
          photo
          price
		  dietaryChoice
        }
      }
    `);
  });
}
