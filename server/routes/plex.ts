import { FastifyInstance, FastifyLoggerInstance } from 'fastify';
import { PlexClient } from 'plex-ts';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { shuffle } from '../controllers/movies';

export const getPlexRoutes =
	(plexClient: PlexClient) =>
	(
		server: FastifyInstance<
			Server,
			IncomingMessage,
			ServerResponse,
			FastifyLoggerInstance
		>,
		opts: any,
		done: () => void
	) => {
		server.get('/libraries', async (req, res) => {
			const libraries = await plexClient.getLibraries();
			res.status(200).send(libraries);
		});

		server.get('/libraries/:key/contents', async (req, res) => {
			const { key } = req.params as { key: string };
			const { limit } = req.query as { limit: string };
			const contents = await plexClient.getVideoLibraryContents(key);
			if (limit !== undefined && Number.isInteger(+limit) && +limit > 0) {
				res.status(200).send(contents.slice(0, +limit));
			} else {
				res.status(200).send(contents);
			}
		});

		server.get(
			'/libraries/contents/:contentKey/thumb/:thumbKey',
			async (req, res) => {
				//Note - for some reason, plex stores a movie's thumbnail ID as the same number as its 'updatedAt' timestamp.
				const { contentKey, thumbKey } = req.params as {
					contentKey: string;
					thumbKey: string;
				};
				const thumbnail = await plexClient.get(
					`/library/metadata/${contentKey}/thumb/1603138012`
				);
				res
					.header('Content-Type', 'image/jpeg')
					.status(200)
					.send(thumbnail.body);
			}
		);

		server.get('/movies', async (_request, response) => {
			// const libraries = await plexClient.getLibraries();
			// const movieLibrary = libraries.find(lib => lib.title === `Alex's Movies`);
			// if(movieLibrary) {
			// 	const movies = await plexClient.getMovies(movieLibrary.key);
			// 	const shuffledMovies = shuffle(movies);
			// 	const tftf = shuffledMovies[0];
			// 	const thumbBlob = await plexClient.get(tftf.thumb);
			// 	response.header('Content-Type', 'image/jpeg').status(200).send(thumbBlob.body);
			// }
		});

		done();
	};
