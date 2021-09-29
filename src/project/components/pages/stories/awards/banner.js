import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Placeholder from 'core/ui/placeholder';
import Indicator from 'components/entities/dashboard/indicator';
import Dataset from "components/entities/dashboard/dataset";
import TextLink from "core/ui/text-link"
import BannerCarousel from './banner-carousel'
import withData from './data/with-data-stories-movie-awards'

const Banner = function( props ){
    const { data, loading } = props;

    return (
      <div style={{width: '100%'}}>
        <GridContainer justifyContent='center' fill style={{width: '100%'}}>
          <GridItem xs={12} sm={12} md={12}>
              <h1>Movies Awards</h1>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
              <BannerCarousel data={data}/>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
              <TextLink border href="/movies/stories/awards"> See all</TextLink>
          </GridItem>
        </GridContainer>
      </div>
    )
}

export default withData(Banner);