const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

morgan.token('body', function(req, res) {
        return JSON.stringify(req.body);
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let persons = [
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-2342342', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-3256474', id: 4 },
];

app.get('/api/persons', (req, res) => {
        res.json(persons);
});

app.get('/info', (req, res) => {
        res.send(`<p>Phonebook has info for ${persons.length} people.</p>
        ${Date()}`);
});

app.get('/api/persons/:id', (req, res) => {
        const id = Number(req.params.id);
        const person = persons.find(pers => pers.id === id);

        if (person) {
                res.json(person);
        } else {
                res.status(404).end();
        }
});

app.delete('/api/persons/:id', (req, res) => {
        const id = Number(req.params.id);
        persons = persons.filter(pers => pers.id !== id);
        res.status(204).end();
});

app.post('/api/persons', (req, res) => {
        // jos nimeä tai numeroa ei ole asetettu
        if (!req.body.name || !req.body.number) {
                return res.status(400).json({ error: 'Missing information' });
        }

        // jos nimi löytyy jo tiedoista
        if (persons.map(pers => pers.name).includes(req.body.name)) {
                return res.status(400).json({ error: 'Person with this name exists already' });
        }

        const newId = Math.ceil(Math.random() * (5000 - 1));
        const person = req.body;
        person.id = newId;
        persons = persons.concat(person);
        res.json(person);
});

app.put('/api/persons/:id', (req, res) => {
        const person = req.body;
        res.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
});