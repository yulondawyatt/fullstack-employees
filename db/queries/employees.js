import client from '../client.js';


/** @returns the employee created according to the provided details */
export const createEmployee = async ({ name, birthday, salary }) => {
  const sql = `
    INSERT INTO employees (name, birthday, salary)
    VALUES ()
  `
}

// === Part 2 ===

/** @returns all employees */
export const getEmployees = async () => {
  `SELECT * FROM employees;`
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
}

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
