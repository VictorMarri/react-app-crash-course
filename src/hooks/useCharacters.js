import {useQuery, gql} from "@apollo/client";

const GET_CHARACTERS = gql`
  query{
    characters{
      results{
        id
        name
        image
      }
    }
  }
`;

//Dentro dessa função vamos executar as queries que queremos
export const useCharacters = () => {
  //Definimos qual query queremos executar, e colocamos os possiveis estados que a request pode apresentar pra gente.
  const {error, data, loading} = useQuery(
    GET_CHARACTERS
  );

  return {
    error, 
    data, 
    loading
  };
}