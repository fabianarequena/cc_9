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