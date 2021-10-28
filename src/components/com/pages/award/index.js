import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import DetailLayout from "layout/multi-layout";
import { useSelector } from 'react-redux';
import { fetchData } from './automata'
import config from "./.config.js";
import Detail from './com/detail';
import Skeleton from './com/skeleton';

export default function Layout( props ){
	const dispatch = useDispatch();
  	const state = useSelector(( state ) => state[config.automata.name] )
  	
	useEffect( () => {
	    dispatch( fetchData( {
	      id: props.id,
	      year : props.year,
	    } ) )
	}, [])

  	if(!state || !state.data) return <Skeleton/>;

	return (
		<DetailLayout
			config={config}
		    type={props.render}
			data={state.data}
			loading={state.loading}
			error={state.error}
			detail={(data) => <Detail data={data}/>}
			skeleton={<Skeleton/>}
			params={{...state.params}}
			breadcrumbs={`${props.breadcrumbs}/${state.data?.festival?.name ?? "loading"}`}
		/>
	)
}