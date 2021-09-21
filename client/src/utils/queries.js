import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedDogs {
        dogId
        breed
        image
        description
        age
        spaynuet
      }
    }
  }
`;

export const QUERY_DOGS =gql`
{
  dogs {
  id
  name
  description
  breed
  image
  age
  spaynuet
  }
}
`;