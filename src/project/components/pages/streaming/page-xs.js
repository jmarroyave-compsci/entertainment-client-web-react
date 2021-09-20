import React from 'react';

import Section from 'core/ui/layout/section';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Streaming from 'components/entities/streaming';

function PageComponent( props ){
	const { data, loading } = props
	return (
		<GridContainer className="page-module" fill>
			<GridItem fill>
				<Section className="section-0">
					<Streaming data={(data) ? data.dashboard : null} loading={loading} />
				</Section>
			</GridItem>
		</GridContainer>
	)
}

export default PageComponent;