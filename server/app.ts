import fastify from 'fastify';

//Create the server.
const server = fastify({logger: true});

//Create the routes.
const opts = {
	schema: {
		response: {
			200: {
				type: 'object',
				properties: {
					message: {type: 'string'}
				}
			}
		}
	}
};
server.get('/hello', opts, (_request, response) => {
	response.status(200).send({message: 'sup bro'});
});

(async function() {
	try {
		await server.listen(11111);
		console.log('server is up!');
	}
	catch(e) {
		server.log.error(e);
		process.exit(1);
	}
})();