import express from 'express';

const app = express();


// app.get('/', (req, res) => {
//     res.send('Server is ready');

// });

app.get('/api/jokes', (req, res) =>{
    const jokes = [
    {
        id: 1,
        title: 'A joke',
        content: 'This is a joke'
    },
    {
        id: 2,
        title: 'A story',
        content: 'This is a short story'
    },
    {
        id: 3,
        title: 'A question',
        content: 'This is a question'
    },
    {
        id: 4,
        title: 'A message',
        content: 'This is a simple message'
    },
    {
        id: 5,
        title: 'A note',
        content: 'This is a short note'
    }

    ];
    res.send(jokes)
})

const port = process.env.port || 3000;

app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
})
