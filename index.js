import { faker } from '@faker-js/faker'
const N_EMPLOYEES = 100;
function createRandomEmployee() {
    const res = {};
    const gender = faker.helpers.arrayElement(["female", "male"])
    res.id = faker.string.uuid();
    res.department = faker.helpers.arrayElement(["QA", "Development", "Audit", "Accounting","Management"]);
    res.fullName = faker.person.fullName({sex: gender});
    res.avatar = faker.image.avatar();
    res.salary = faker.number.int({min:5000, max: 50000, multipleOf:100});
    res.birthDate = faker.date.birthdate({min: 20, max: 72, mode: "age"}).toISOString().substring(0, 10);
    return res;
}
function createRandomEmployees() {
   return Array.from({length: N_EMPLOYEES}, () => createRandomEmployee());

}
const jsonRes = {
    "employees":createRandomEmployees()
}
console.log(JSON.stringify(jsonRes, null, 2))
