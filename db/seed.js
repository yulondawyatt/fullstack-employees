import db from "#db/client";
import { createEmployee } from './queries/employees.js';
import { faker } from '@faker-js/faker';


const seedEmployees = async () => {
  console.log('CONNECTING TO DB');
  await db.connect();
  console.log('CONNECTED TO DB');

  console.log('ADDING EMPLOYEES');
  await createEmployee('Joy Wyatt', '04/05/1976', 23);
  await createEmployee('Ashley Wyatt', '05/26/1990', 15);
  await createEmployee('Justin Frederick Wyatt', '09/27/1989', 10);
  await createEmployee('TKeya Joy Stevens', '12/01/1992', 35);
  await createEmployee('Daquan Lamon Dennison', '05/15/1998', 30);
  await createEmployee('Mogie Dryden', '07/21/1980', 9);
  await createEmployee('Jay Stevens', '06/24/1973', 40);
  await createEmployee('Phyllis Herring', '08/28/1944', 55);
  await createEmployee('Jamaine Wyatt', '08/30/1973', 35);
  await createEmployee('Rowen Mayfair', '12/24/1979', 8);
  

  await db.end();
  console.log("🌱 Database seeded.");
}

  seedEmployees();