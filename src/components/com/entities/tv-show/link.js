import React from 'react';
import Link from 'core/ui/link';

function LinkComponent( params ) {
	const { id, entity, children, box } = params;
	return (
		<Link box border={false} to={`/tv-shows/${id}`}>{children}</Link>
	);
}

export default LinkComponent;
