const fs = require('fs');

genders = ['F', 'M'];
femaleNames = ['Jane', 'Katherine', 'Mary', 'Susan', 'Karen', 'Cassie', 'Lea', 'Samantha', 'Carrie', 'Lorren'];
maleNames = ['John', 'James', 'Brian', 'Christopher', 'Darren', 'Robert', 'Drew', 'Nate', 'Jake', 'Donald'];
lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Biden', 'Thompson', 'Moore', 'Sanchez'];

people = [];

const randChoice = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

for (let counter = 1; counter <= 20; counter ++){
  const gender = randChoice(genders);
  let firstName = '';

  if (gender === 'F') firstName = randChoice(femaleNames);
  if (gender === 'M') firstName = randChoice(maleNames);

  const lastName = randChoice(lastNames);

  const getAge = () => {
    const min = 18;
    const max = 99;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getEmail = (firstName, lastName) => {
    const email = `${firstName.toLowerCase()}` + `.` + `${lastName.toLowerCase()}` + '@gmail.com';
    return email;
  };

  people.push(
    {
      id: counter,
      gender: gender,
      firstName: firstName,
      lastName: lastName,
      age: getAge(),
      email: getEmail(firstName, lastName),
    }
  )
};

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});