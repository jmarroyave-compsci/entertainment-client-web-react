import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( id ) => fetch( GET_DATA, { id: id } , (resp) => { return { ...resp, data: resp.data.videoGame } } )

const GET_DATA = gql`
  query GetData($id: String!)
  {
    videoGame(id: $id) {

    id
    title
    country
    type
    genre
    duration
    rating {
      averageRating
      name
      votes
    }
    releasedDate
    classification
    director{
      id
    }
    cast {
      id
    }
    references {
      imdb
    }
    image {
      poster
    }
    boxOffice
    production
    language

    }
  }
`