const express = require("express");

const Joi = require("joi");

const app = express();

app.use(express.json());

const cources = [{ id: 1 }, { id: 2 }, { id: 3 }];

//handling root request
app.get("/", (req, res) => {
  res.send("Hello world!!!! ");
});

//handling get ALL request
app.get("/api/cources", (req, res) => {
  res.send(cources);
});

//handling post request
// app.post("/api/cources", (req, res) => {
//   const newCource = {
//     id: cources.length + 1,
//     name: req.body.name,
//   };
//   cources.push(newCource);
//   res.send(cources);
// });

//handling Validation using joi in post request
app.post("/api/cources", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const newCource = {
    id: cources.length + 1,
    name: req.body.name,
  };
  cources.push(newCource);
  res.send(cources);
});

//handling PUT Request

app.put("/api/cources/:id", (req, res) => {
  // 1 finding id in Db
  const course = cources.find((item) => item.id === req.id);

  if (!course) {
    res.status(404).send("Course does not exist");
    return;
  }

  // 2 If find course then validate the body
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }

  //3 update the course
  course.name = req.body.name;
  //4 retun the updated course
  res.send(cources);
});

// handling Params and query
// app.get("/api/cources/:id", (req, res) => {
//   res.send(req.params || req.query);
// });

//handling Http request
app.get("/api/cources/:id", (req, res) => {
  const course = cources.find((item) => item.id === parseInt(req.params.id));
  if (!course) res.status(404).send("No Couse FOund");
  else res.send(course);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`..................listening to port ${port}`);
});
