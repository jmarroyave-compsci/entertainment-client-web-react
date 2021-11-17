import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 
import { MOVIE_TINY_FRAGMENT } from 'com/pages/person/data';

export const fetchData = (  ) => fetch( GET_DATA, {  } , (resp) => { return { ...resp, data: resp.data.dashboardPeople } } )

const GET_DATA = gql`
  query GetData
  {
    dashboardPeople {
      total
      birthYear
      birthDecade
      professionsPerPerson
      professions
      professionsByDecade
      awards
      directors
      producers
      actors
      writers
    }
  }
`

export const fetchPeople = ( {page, op} ) => fetch( GET_PEOPLE, { page: page, field: JSON.stringify(op) } , (resp) => { return { ...resp, data: resp.data.people } } )

const GET_PEOPLE = gql`
  query GetPeople($page: Int, $field: String)
  {
    people(page: $page, field: $field){
      id
      name
    }
  }
`