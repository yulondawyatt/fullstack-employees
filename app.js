import express from "express";
const app = express();
export default app;

import client from './db/client.js';


import { getEmployees } from './db/queries/employees.js';
import { getEmployee } from './db/queries/employees.js';


app.get('/', (req, res, next) => {
  res.send('Welcome to the Fullstack Employees API');
});


app.get('/employees', async (req, res, next) => {
  const allEmployees = await getEmployees();
  res.send(allEmployees);
});



app.get('/employees/:id', async (req, res, next) =>{
  const id = Number(req.params.id);

  try {
    const employeeById = await getEmployee(id);

    if(!employeeById) {
      return res.status(404).send({ error: `Employee by that ID does not exist.` });
    }
      res.send(employeeById);

  } catch (error) {
    next(error);
  }
  
});