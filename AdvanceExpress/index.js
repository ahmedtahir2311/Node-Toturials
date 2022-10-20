const express = require("express");
const logger = require("./middlerware/logger");

const app = express();

app.use(express.json()); //Built-In middleware pasrse incomming req.body and set it as req.body

app.use(express.urlencoded({ extended: true })); //this middleware use the encoded formate for req.body and set it as re.body

app.use(express.static("public")); //this middleware let us read th static files in public folder

// making a custom middle ware
app.use(function (req, res, next) {
  console.log("This is Middle ware running ");
  next(); //we need to pass the middle to next on
});

app.use(logger.log);

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Comedy" },
];

app.get("/", function (req, res) {
  res.send("This application was made w/ love & coffee.");
});

app.get("/api/v1/genres", function (req, res) {
  res.send(genres);
});

app.post("/api/v1/genres", (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(genres);
});
app.put("/api/v1/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genres);
});
app.delete("/api/v1/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  const allgenries = genres.filter((c) => c !== genre);
  res.send(allgenries);

  res.send(genre);
});

app.get("/api/v1/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(genre);
});

function validateGenre(genre) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(genre);
}

app.listen(process.env.PORT || 5000);

console.log("listening to the port 5000");
