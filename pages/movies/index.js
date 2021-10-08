import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/movies';

import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getDashboard 
{
  dashboardMovies {
    awards
    classification
    country
    genre
    rating
    streamBy
    total
    type
    yearReleased
  }
}
`;

const Page = ( props ) => {
  var { loading, error, data } = useQuery(QRY_DASHBOARD);
  data = (data) ? data.dashboardMovies : { }; 
  const params = { ...props, loading, error, data };
  params.breadcrumbs = [{name: 'movies'}]
  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;