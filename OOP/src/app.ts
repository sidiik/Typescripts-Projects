class Department {
  name: string;

  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log('Departement: ' + this.name);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }

  printEmployees() {
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('muse');
accounting.printEmployees();

console.log(accounting);
