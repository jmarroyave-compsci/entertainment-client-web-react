import React from 'react'
import { styled } from '@mui/material/styles';
import StoriesData from 'app/data/stories';
import Stack from 'com/ui/stack';
import Paper from '@mui/material/Paper';
import Link from 'core/ui/text-link';

const RightPanel = styled('div')({
  padding: '0.85rem'
});

const Stories = styled('div')({
  fontSize: '1.5rem',
  paddingBottom: '0.5rem'
});

const Story = styled('div')({
  fontSize: '0.9rem',
});

const RelatedStories = function( props ){
    const { filter } = props;
    const stories = StoriesData.getBy( filter );
    return (
        <Paper>
            <RightPanel>
                <Stories>Stories</Stories>
                    {stories.map( (story, idx) => 
                        <Story key={idx}><Link href={story.url}>{story.title}</Link></Story>
                    )}
            </RightPanel>
        </Paper>
    )
}

export default RelatedStories;