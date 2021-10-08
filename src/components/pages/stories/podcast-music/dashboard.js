import React from 'react'
import Stack from '@mui/material/Stack';
import Grid from './grid';
import withData from './data/with-data-stories-podcast-music'
import Banner from './banner'

function Dashboard( props ){
  return (
    <Stack>
      <Banner hero/>
      <Grid {...props}/>
    </Stack>
  )
}

export default withData(Dashboard);