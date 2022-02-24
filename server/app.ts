import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import 'dotenv/config';
import { createClient } from 'plex-ts';
import { getPlexRoutes } from './routes/plex';

//Create the plex client.
const plex = createClient({
	serverUrl: process.env.PLEX_BASE_URL as string,
	token: process.env.PLEX_TOKEN as string,
});

//Create the server.
const server = fastify({ logger: true });
server.register(fastifyStatic, {
	root: process.env.CLIENT_BUILD_PATH as string,
});

//Serve the ui.
server.get('/', (req, res) => {
	res.sendFile('index.html');
});

//Attach the routes for the api.
server.register(getPlexRoutes(plex), { prefix: '/api' });

//Create the routes.
// const opts = {
// 	schema: {
// 		response: {
// 			200: {
// 				type: 'object',
// 				properties: {
// 					message: {type: 'string'}
// 				}
// 			}
// 		}
// 	}
// };

(async function () {
	try {
		const PORT = +(process.env.PORT as string);
		await server.listen(PORT);
		console.log(`server is up on port ${PORT}!`);
	} catch (e) {
		server.log.error(e);
		process.exit(1);
	}
})();
