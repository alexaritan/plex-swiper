import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {MovieCardInfoProps} from '../MovieCard/types';
import {SwipableCardActions} from '../SwipableCardActions/SwipableCardActions';

const MovieCard = (props: MovieCardInfoProps) => {
	//Create description based on max description length.
	const MAX_DESCRIPTION_LENGTH = props.fullView ? Number.MAX_SAFE_INTEGER : 115;
	const movieDescription = 
		props.movieDescription.length > MAX_DESCRIPTION_LENGTH
		? `${props.movieDescription.substr(0, MAX_DESCRIPTION_LENGTH).trim()}...`
		: props.movieDescription;

	return (
		<Card>
			<CardMedia
				image={props.moviePosterPath}
				style={{height: 400}}
				title={props.movieTitle} />
			<CardHeader
				title={props.movieTitle}
				subheader={`${props.movieReleaseYear} - ${props.movieCast}`} />
			<CardContent>
				{movieDescription}
			</CardContent>
			<SwipableCardActions viewInfo={props.viewInfo} />
		</Card>
	)
};

export {MovieCard};