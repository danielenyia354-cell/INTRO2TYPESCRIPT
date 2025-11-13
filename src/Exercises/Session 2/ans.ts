// 
// Session 2 - Task 1
// Topic: Type Alias and Function
// Description: Create a type alias for EmployeeID and return formatted string.
// 

// Type alias for employee ID
type EmployeeID = string | number;


function formatEmployeeID(id: EmployeeID): string {
  return `Employee ID: E${id}`;
}

console.log(formatEmployeeID("1234")); // Employee ID: E1234
console.log(formatEmployeeID(5678));   // Employee ID: E5678


//  Session 2 - Task 2
//   Topic: Tuples
//   Represent location as latitude and longitude.


// Type alias for coordinates tuple
type Coordinates = [number, number];

function logLocation(coords: Coordinates): void {
  console.log(`Location coordinates: ${coords[0]}° N, ${coords[1]}° E`);
}

logLocation([6.5244, 3.3792]);



//   Session 2 - Task 3
//   Topic: Enums and Conditional Logic 
//  Description: Use enum to represent task status and print messages.

 enum TaskStatus {
  Pending,
  InProgress,
  Completed,
}

function checkStatus(status: TaskStatus): void {
  switch (status) {
    case TaskStatus.Pending:
      console.log("Task is pending. Please start soon.");
      break;
    case TaskStatus.InProgress:
      console.log("Task is currently in progress...");
      break;
    case TaskStatus.Completed:
      console.log("Task has been completed successfully!");
      break;
    default:
      console.log("Unknown task status.");
  }
}

checkStatus(TaskStatus.Pending);
checkStatus(TaskStatus.Completed);



//  Session 2 - Task 4
//  Topic: Interfaces and Inheritance
// Description: Create Person and Employee interfaces.
 

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  department: string;
  salary: number;
}

const employee: Employee = {
  name: "Jane Doe",
  age: 29,
  department: "HR",
  salary: 65000,
};

console.log(
  `Employee Info: ${employee.name}, Age: ${employee.age}, Department: ${employee.department}, Salary: ₦${employee.salary}`
);



//  Session 2 - Task 5
//  Topic: Classes and Access Modifiers
//  Description: Create Car and ElectricCar classes with access modifiers.
 

class Car {
  public brand: string;
  public model: string;
  private engineNumber: string;
  protected year: number;

  constructor(brand: string, model: string, engineNumber: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.engineNumber = engineNumber;
    this.year = year;
  }

  displayInfo(): void {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

class ElectricCar extends Car {
  batteryLife: number;

  constructor(
    brand: string,
    model: string,
    engineNumber: string,
    year: number,
    batteryLife: number
  ) {
    super(brand, model, engineNumber, year);
    this.batteryLife = batteryLife;
  }

  showDetails(): void {
    
    console.log(
      `Electric Car: ${this.brand} ${this.model}, Year: ${this.year}, Battery: ${this.batteryLife} hrs`
    );
  }
}


const tesla = new ElectricCar("Tesla", "Model S", "EN98765", 2023, 12);
tesla.displayInfo();
tesla.showDetails();



// Session 2 - Task 6
//  Topic: Mini Project - Student Management System
//  Description: Use enums, interfaces, classes, tuples, and access modifiers.
 

enum GradeLevel {
  Freshman = "Freshman",
  Sophomore = "Sophomore",
  Junior = "Junior",
  Senior = "Senior",
}

interface Student {
  name: string;
  age: number;
  gradeLevel: GradeLevel;
  subjects: [string, number]; // subjectName, score
}

class Report {
  private students: Student[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  printReport(): void {
    console.log("=== Student Report ===");
    this.students.forEach((s) => {
      console.log(
        `${s.name}, Age: ${s.age}, Level: ${s.gradeLevel}, Subject: ${s.subjects[0]}, Score: ${s.subjects[1]}`
      );
    });
  }
}


const report = new Report();

report.addStudent({
  name: "John Smith",
  age: 19,
  gradeLevel: GradeLevel.Freshman,
  subjects: ["Math", 85],
});

report.addStudent({
  name: "Mary Lee",
  age: 21,
  gradeLevel: GradeLevel.Junior,
  subjects: ["Physics", 92],
});

report.printReport();



//  Session 2 - Bonus Task
//  Topic: Transaction System with Enums and Methods
//  Description: Create a transaction record system.
 

enum TransactionType {
  Deposit = "DEPOSIT",
  Withdrawal = "WITHDRAWAL",
}

type TransactionID = string | number;

class Transaction {
  constructor(
    public id: TransactionID,
    public amount: number,
    public type: TransactionType
  ) {}

  printSummary(): void {
    const action =
      this.type === TransactionType.Deposit ? "Deposit of" : "Withdrawal of";
    console.log(
      `Transaction #TX${this.id}: ${action} ₦${this.amount} successful.`
    );
  }
}

const t1 = new Transaction("100", 5000, TransactionType.Deposit);
const t2 = new Transaction(200, 2500, TransactionType.Withdrawal);

t1.printSummary();
t2.printSummary();
