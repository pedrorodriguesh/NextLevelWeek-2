import express from 'express';

const app = express()
const PORT = 3030;

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});