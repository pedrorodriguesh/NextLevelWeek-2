import express from 'express';

const app = express()
const PORT = 3030;

app.get('/', (req, res) => {
    const users = [
        { name: 'Pedro', age: 27},
        { name: 'Jorge', age: 21},
        { name: 'Joao', age: 19}
    ]

    res.json(users)
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});