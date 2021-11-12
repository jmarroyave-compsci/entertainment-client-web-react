import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Paper from '@material-ui/core/Paper';
import Stack from 'com/ui/stack';
import Skeleton from '@mui/material/Skeleton';
import Paging from 'com/ui/paging';
import { Frame, Item as ItemFrame } from 'style/boxes'

import { Transition } from 'react-transition-group';

const duration = 1300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export default function Grid( props ){
    var { animations=true, data, loading, url, skeleton, item, onPageChange, page, xs=12, sm=6, md=6, lg=4, noPaging=false, noPadding } = props;

    data = (data && data.length > 0) ? data : [1,2,3,4,5,6];

    const itemWrapper = ( data ) => (noPadding) ? data : <ItemFrame>{data}</ItemFrame>
    const animateItem = (item) =>{ return (animations) ?
      <Transition in={true} timeout={duration}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            {item}
          </div>
        )}
      </Transition>
    : 
      item 
    }

    const Item = ( props ) => {
      const { data, idx } = props;
      return (
        <GridItem key={idx} xs={xs} sm={sm} md={md} lg={lg}>
            {itemWrapper((loading) ?
              (skeleton) ? skeleton : <Placeholder/>
              : 
              (item) ? animateItem(item(data)) : null
            )} 
        </GridItem>
      )
    }

    var output = (
        <GridContainer justify='center' fill style={{width: '100%'}}>
          {data.map( (_item, idx) => 
            (<Item key={idx} data={_item} params={props} idx={idx}/>)
          )}
        </GridContainer>
    )

    if(!noPaging){
      output = (
        <Paging data={ data } url={url} onPageChange={onPageChange} page={page} loading={loading}>
          {output}
        </Paging>
      )      
    }

    return (
      <Frame>
        {output}
      </Frame>
    )
}

function Placeholder(){
  return (
    <Paper style={{backgroundColor: 'transparent', flexGrow: 1, padding: '0.5rem'}}>
      <Stack spacing={1}>
        <Skeleton variant="text" width={"80%"}/>
        <Skeleton variant="rectangular" height={240} />
        <Skeleton variant="text"/>
      </Stack>  
    </Paper>
  )    
}