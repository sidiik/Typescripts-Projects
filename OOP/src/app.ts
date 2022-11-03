class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log('Departement: ' + this.name);
  }
}

const accounting = new Department('Accounting');

const accountingCopy = {
  name: accounting.name,
  describe: accounting.describe,
};

console.log(accountingCopy.describe());
