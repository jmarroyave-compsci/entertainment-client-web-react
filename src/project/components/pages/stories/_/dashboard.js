import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';

class Dashboard extends React.Component {
  render(){
    const { data, loading } = this.props;
    const {  } = data || {};

    return (
      <GridContainer justifyContent='center' fill style={{width: '100%'}}>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer justifyContent='center' fill>

          </GridContainer>
        </GridItem>
      </GridContainer>
    )
  }

}

export default Dashboard;