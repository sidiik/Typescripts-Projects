// GENERICS
let names: Array<number> = [];

const identity = <Type>(arg: Type[]): Type[] => {
  return arg;
};

identity([1, 2, 4]);

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: 'sidiq' }, { age: 30 });

interface lengthy {
  length: number;
}

const countFigures = <T extends lengthy>(element: T) => {
  let desc = 'Got no values';
  if (element.length === 1) {
    desc = 'Got one value';
  } else if (element.length > 1) {
    desc = `Got ${element.length} values`;
  }

  return [element, desc];
};

const extract = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return obj[key];
};

const extracted = extract({ name: 'sidiq' }, 'name');
