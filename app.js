import express from "express";
const app = express();
export default app;

import client from './db/client.js';


import { getEmployees } from './db/queries/employees.js';

app.get('/', (req, res, next) => {
  res.send('Welcome to the Fullstack Employees API');
});


app.get('/employees', async (req, res, next) => {
  const allEmployees = await getEmployees();
  res.send(allEmployees);
});