import express from 'express';

const app = express();
const PORT = 3333;

app.get('/users', (req, res) => {
  console.log('Listagem de usuários');
});

app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
});