import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from 'core/ui/paper';

const _ItemFrame = styled('div')(({theme, width}) => ({
  margin: "0",
  padding: "0 1rem 1rem 0",
  display: 'block', 
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  minWidth: width,
  maxWidth: width,
}));

const _ItemContent = styled('div')(({theme, width}) => ({
  backgroundColor: theme.palette.action.selected,
  color: theme.palette.text.primary,
  padding: '1rem',
  display: 'flex', 
  flexGrow: 1, 
  margin: "0.1rem",  
  width: "100%"
}))

export const ItemFrame = ( props ) =>{
  return (
    <_ItemFrame width={props.width}>
      <_ItemContent>
        {props.children}
      </_ItemContent>  
    </_ItemFrame>
    )
}

export const Title = styled('h2')({
  fontSize: "1.5rem",
  lineHeight: "1.8rem",
  padding: 0,
  margin: 0,
});

export const SubTitle = styled('h3')({
  fontSize: "1.2rem",
  lineHeight: "1.5rem",
  textTransform: 'lowercase',
  padding: '0',
  paddingBottom: "0.25rem",
  margin: '0 0 0.5rem 0',
  borderBottom: "2px solid #888",
});

export const Paragraph = styled('div')({
    margin: 0,
    marginBottom: '1rem',
});

export const Small = styled('span')({
  fontSize: "0.7rem",
  lineHeight: "0.75rem",    
  margin: 0,
});

export const Notes = styled('span')({
  fontSize: "0.6rem",
  lineHeight: "0.75rem",    
  fontStyle: 'italic',
  margin: 0,
});


export const Medium = styled('div')({
  fontSize: "1rem",
  lineHeight: "1.25rem",    
  margin: 0,
});