import express, { Request, Response } from 'express';

// Initialize Express app
const app = express();
const port = 3000;

// Define the Employee interface for TypeScript typing
interface Employee {
  id: number;
  name: string;
  position: string;
  manager_id: string; // Keep this as a string as your data contains strings for manager_id
}

// Sample employee data (in-memory dataset)
const employees: Employee[] = [
  { id: 1, name: 'Alice Johnson', position: 'Software Engineer', manager_id: 'Gopi' },
  { id: 2, name: 'Bob Smith', position: 'QA Engineer', manager_id: '5' },
  { id: 3, name: 'Charlie Brown', position: 'Product Manager', manager_id: '8' },
  { id: 4, name: 'David Green', position: 'Data Analyst', manager_id: '5' },
  { id: 5, name: 'Emma Williams', position: 'Team Lead', manager_id: '10' },
];

// GET API to fetch all employees under a specific manager
app.get('/employees/:managerId', (req: Request, res: Response) => {
  const { managerId } = req.params;

  // Find employees that have the given manager_id (compare as string)
  const employeesUnderManager = employees.filter(
    (employee) => employee.manager_id === managerId
  );

  if (employeesUnderManager.length === 0) {
    return res.status(404).json({ message: 'No employees found under this manager.' });
  }

  // Respond with the list of employees
  res.status(200).json(employeesUnderManager);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
