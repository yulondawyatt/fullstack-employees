import client from '../client.js';


/** @returns the employee created according to the provided details */
export const createEmployee = async (name, birthday, salary) => {
  const sql = `
    INSERT INTO employees (name, birthday, salary)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const {rows: [ createEmployee ] } = await client.query(sql, [name, birthday, salary]);
  return createEmployee;
};

// === Part 2 ===

/** @returns all employees */
export const getEmployees = async () => {
  const sql = `
    SELECT * FROM employees;
    
  `;

  const { rows: listOfEmployees } = await client.query(sql);
  return listOfEmployees;
};

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const getEmployee = async (id) => {
  const sql = `
    SELECT * FROM employees
    WHERE id = $1;
  `;

  const { rows: employeeById } = await client.query(sql, [id]);
  return employeeById[0] || undefined;
};


/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
}
