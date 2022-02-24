import { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { MovieCard } from './components/MovieCard/MovieCard';
import './App.css';

function App() {
	const [viewInfo, setViewInfo] = useState(false);
	const [movie, setMovie] = useState({} as any);
	const randomMovieIndex = Math.floor(Math.random() * 10);
	const PORT = process.env.PORT as string;
	useEffect(() => {
		fetch('http://localhost:11111/api/libraries/3/contents?limit=10')
			.then(res => res.json())
			.then(res => setMovie(res[randomMovieIndex]));
	}, []);
	return (
		<Container maxWidth={'sm'} disableGutters={true}>
			<MovieCard
				fullView={viewInfo}
				movieAudienceRating={movie.audienceRating}
				movieCast={'Some cast members'}
				movieCriticsRating={movie.rating}
				movieDescription={movie.tagline || ''}
				movieGenres={'Some genres'}
				moviePosterPath={`http://localhost:11111/api/libraries/contents/${movie.ratingKey}/thumb/${movie.updatedAt}`}
				movieTitle={movie.title}
				movieReleaseYear={movie.year}
				viewInfo={() => {
					setViewInfo(!viewInfo);
				}}
			/>
		</Container>
	);
}

export default App;
