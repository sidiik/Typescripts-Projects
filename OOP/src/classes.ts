class Department {
  private employees: string[] = [];

  constructor(public name: string, readonly id: string) {
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

class ITDepartment extends Department {
  admins: string[];
  name: string;

  constructor(id: string, admins: string[], name: string) {
    super(id, id);
    this.admins = admins;
    this.name = name;
  }
}

const accounting = new Department('Accounting', 'd1');
const it = new ITDepartment('d1IT', ['Max'], 'IT');

console.log(it);

accounting.addEmployee('muse');
accounting.printEmployees();
