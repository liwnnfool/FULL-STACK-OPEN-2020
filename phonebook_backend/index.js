const { request, response } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

let phonebook = [
  {
    persons: [
      {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1,
      },
      {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2,
      },
      {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3,
      },
      {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4,
      },
    ],
  },
];

app.get("/home/phonebook", (request, response) => {
  response.json(phonebook);
});

app.get("/home/phonebook/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = phonebook[0].persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.get("/home/info", (request, response) => {
  const personsCount = phonebook[0].persons.length;
  const queryTime = new Date().toUTCString();

  response.send(
    `<p>phonebook has info ${personsCount} people</p><p>${queryTime}</p>`
  );
});

app.delete("/home/phonebook/:id", (request, response) => {
  const id = Number(request.params.id);
  phonebook = [
    {
      persons: phonebook[0].persons.filter((person) => person.id !== id),
    },
  ];
  // console.log(phonebook);

  response.status(204).end();
});

app.post("/home/phonebook", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  if (phonebook[0].persons.some(person => person.name === body.name)) {
    return response.status(400).json({
      error: "name mast be unique"
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.random() * Math.random(),
  };

  phonebook = [{ persons: phonebook[0].persons.concat(person) }];

  response.json(person);
});

const PORT = 3001;

app.listen(PORT);
