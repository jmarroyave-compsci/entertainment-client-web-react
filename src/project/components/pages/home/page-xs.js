import React from 'react';

import Section from 'core/ui/layout/section';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Title from 'components/pages/home/title';
import Dashboard from 'components/pages/home/dashboard';

function PageComponent( props ){
	const { data, loading } = props
	return (
		<GridContainer className="page-module" fill>
			<GridItem fill>
				<Section className="section-hero-dark">
					<Title/>
				</Section>
			</GridItem>
			<GridItem fill>
				<Section className="section-0">
					<Dashboard data={(data) ? data.dashboard : null} loading={loading} />
				</Section>
			</GridItem>
		</GridContainer>
	)
}

export default PageComponent;