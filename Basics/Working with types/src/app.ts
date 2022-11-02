enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: 20;
  hobbies: string[];
  role: Role;
} = {
  name: 'sidiq cumar',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: Role.READ_ONLY,
};

// UNION TYPES

const combine = (inputOne: string | number, inputTwo: string | number) => {
  let result;
  if (typeof inputOne === 'number' && typeof inputTwo === 'number') {
    result = inputOne + inputTwo;
  } else {
    result = inputOne.toString() + inputTwo.toString();
  }

  return result;
};

const combinationResult = combine('sidiq', 'omar');
const age = combine(10, 8);

console.log(combinationResult, age);
