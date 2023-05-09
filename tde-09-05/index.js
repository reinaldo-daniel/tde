const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});

app.get('/health', (request, response, next) => {
	try {
		response.status(200)
			.json({ suaResposta: 'server is running' });
	} catch(error) {
		next(error);
	}
});