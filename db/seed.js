import db from "#db/client";



const seedEmployees = async () => {
  console.log('CONNECTING TO DB');
  await db.connect();
  console.log('CONNECTED TO DB');

  console.log('ADDING EMPLOYEES');
  createEmployee('Roberta Flack', );

  await seedEmployees();
  await db.end();
  console.log("🌱 Database seeded.");
}
