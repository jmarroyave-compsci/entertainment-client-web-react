import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/person/link'
import Typography from '@material-ui/core/Typography';

export default function MovieItem( props ){
  const { id, name, text } = props;

  return (
    
    <Link id={id} entity={name}>
      <Card
        title={name}
        text={text}
      />
    </Link>    
    
  )
  
}