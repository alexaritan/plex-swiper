import React, {useState} from 'react';
import Container from '@material-ui/core/Container'
import {MovieCard} from './components/MovieCard/MovieCard';
import './App.css';

function App() {
	const [viewInfo, setViewInfo] = useState(false);
	return (
		<Container maxWidth='sm' disableGutters={true}>
			<MovieCard
				fullView={viewInfo}
				movieAudienceRating={11}
				movieCast='Leonardo DiCaprio, Elliot Paige, Tom Hardy, Michael Caine'
				movieCriticsRating={12}
				movieDescription="Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.[7] The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page,[a] Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine."
				movieGenres='Action, Thriller'
				moviePosterPath='/images/placeholder.jpg'
				movieTitle='Inception'
				movieReleaseYear='2010'
				viewInfo={() => {setViewInfo(!viewInfo)}} />
		</Container>
	);
}

export default App;
