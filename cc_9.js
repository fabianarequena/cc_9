// Task 1 - Employee Class
// Setting up a basic Employee class with name, ID, department, and salary
// Includes methods to show details and calculate yearly pay

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    // Returns employee details as a formatted string
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    // Calculates yearly salary by multiplying by 12
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Test Task 1
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Display employee details
console.log(`Annual Salary: $${emp1.calculateAnnualSalary()}`); // Show yearly salary
console.log("Task 1 Completed\n");


// Task 2 - Manager Class (Inheritance)
// Creating a Manager class that builds on Employee.
// Adds team size and customizes the details display.
// Also includes a bonus calculation.

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }

    // Overrides details method to also show team size
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    // Calculates a 10% bonus based on yearly salary
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}

// Test Task 2
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Display manager details
console.log(`Bonus: $${mgr1.calculateBonus()}`); // Show bonus amount
console.log("Task 2 Completed\n");


// Task 3 - Company Class
// A Company class that keeps track of employees.
// Can add new employees and list them.

class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    // Adds an employee and logs their details
    addEmployee(employee) {
        this.employees.push(employee);
        console.log(`Added employee: ${employee.getDetails()}`);
    }

    // Lists all employees in the company
    listEmployees() {
        console.log("Listing all employees:");
        this.employees.forEach(emp => console.log(emp.getDetails()));
    }
}

// Test Task 3
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees(); // Show all employees
console.log("Task 3 Completed\n");


// Task 4 - Payroll System
// Calculates the total payroll for all employees.

Company.prototype.calculateTotalPayroll = function () {
    const totalPayroll = this.employees.reduce((total, emp) => total + emp.calculateAnnualSalary(), 0);
    console.log(`Total Payroll: $${totalPayroll}`);
    return totalPayroll;
};

// Test Task 4
company.calculateTotalPayroll();
console.log("Task 4 Completed\n");


// Task 5 - Promotion System
// Promotes an employee to a manager while keeping their details.

Company.prototype.promoteToManager = function (employee, teamSize) {
    const manager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
    this.employees = this.employees.map(emp => emp.id === employee.id ? manager : emp);
    console.log(`Promoted employee to Manager: ${manager.getDetails()}`);
};

// Test Task 5
company.promoteToManager(emp1, 3);
company.listEmployees(); // Confirm the promotion worked
console.log("Task 5 Completed\n");

