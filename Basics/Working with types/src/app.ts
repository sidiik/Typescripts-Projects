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

if (person.role === Role.ADMIN) {
  console.log(person);
}
