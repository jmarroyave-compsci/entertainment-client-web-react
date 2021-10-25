import React from 'react'
import { styled } from '@mui/material/styles';
import { Frame, Item } from 'style/boxes'
import { SubTitle } from 'style/detail'

import Typography from '@material-ui/core/Typography';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Value from 'core/ui/value';
import Link from 'core/ui/link';

const FrameMini = styled('div')({
  marginTop: "0rem",
  minHeight: "3rem",
});

const ItemMini = styled('div')({
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontSize: "0.8rem",
  lineHeight: "1rem",

});

const More = styled('span')({
  fontSize: "0.75rem",
  lineHeight: "0.85rem",
  padding: 0,
  paddingTop: '0.5rem',
  float: 'right',
});


const Year = styled('div')({
  margin: '1rem 0 0 0',
  padding: '0',
  fontSize: '1rem',
  lineHeight: '1rem',
});

const Prize = styled('div')({
  textTransform: "uppercase",
  margin: '1rem 0 0 0',
  padding: '0',
  fontSize: '0.9rem',
  lineHeight: '1rem',
  fontWeight: 400,
});

const Category = styled('div')( {
  fontSize: "0.85rem",
  lineHeight: "0.95rem",
});

const Nominee = styled('div')({
  fontSize: '0.5rem',
  lineHeight: '0.6rem',
  textTransform: 'uppercase',
  paddingTop: "0.5rem",
});


const LinkToPage = ( { year, children} ) => {
  return <Link href={`/movies/stories/awards?year=${year}`}>{children}</Link>
}

export default function Awards( props ){
  var { data } = props;

  if(!data || data.length == 0 ) return <div/>;

  return (props.mini === true) ? AwardsMini(props, data) : AwardsFull(props, data); 
}


function AwardsMini( props, data ){
  var { year, all } = props;
  var MAX = (all) ? data.length : 2;

  year = parseInt(year)

  const showThis = ( item ) => {
    if (!year) return true;
    return (item.year == year)
  } 

  return (
    <FrameMini>
      {data && data.length > 0 && data.slice(0,MAX).map( (item, idx) => 
        showThis(item) && 
          <div key={idx} >
            <LinkToPage year={item.year}>
              <ItemMini>{item.year} - {item.name.toUpperCase()} - {((item.won === "false" || item.won === false) ? "[N]" : "[W]")} {item.category}</ItemMini>
            </LinkToPage>
          </div>        
      )}
      { !all && data && data.length > MAX && 
        <ItemMini>            
          <ItemMini><More>and {data.length - MAX} more</More></ItemMini>
        </ItemMini>
      }
    </FrameMini>     
  )
}



function AwardsFull( props, data ){
  var currentYear = null, currentPrize = null;
  const { year } = props;

  const RenderYear = (item) => {
    if (!currentYear || currentYear != item.year){
      currentYear = item.year;
      currentPrize = null;
      return <Year>{item.year}</Year>
    }
    return null;
  }

  const RenderPrize = (item) => {
    if (!currentPrize || currentPrize != item.name){
      currentPrize = item.name;
      return <Prize>{item.name}</Prize>
    }
    return null;
  }

  return (
    <Frame>
      <SubTitle>awards</SubTitle>
      {data && data.length > 0 && data.map( (item, idx) => 
          <div key={idx} >
            {RenderYear(item)}
            {RenderPrize(item)}
            <LinkToPage year={item.year}>
              <Item>
                <Nominee>{((item.won === "false" || item.won === false) ? "nominee" : "winner")}</Nominee>
                <Category>{item.category}</Category>
              </Item>
            </LinkToPage>
          </div>
      )}
    </Frame>     
  )
}