// ### Base do backend => PORT config, routes, cors, and json parser.
import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express()
const PORT = 3030;

app.use(cors());
app.use(express.json()); // Para o express entender o formato json.
app.use(routes) // Para o express entender as rotas.

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});