// const otherKey = "address"

// const myObject = {
//     name: 'John',
//     age: 'something else',
//     [otherKey]: '123 Elm Street',
// }

// const newObject = {
//     ...myObject,
//     name: 'Jacob'
// }

// console.log(myObject);

// console.log(newObject);

const yup = require("yup");

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required()
    .min(2, "Name is too short")
    .max(50, "Name is too long"),
  email: yup.string().email("needs to be an email").required(),
});

const objectOne = {
    fullName: "John",
    email: "jacob@gmail.com"
}

schema.isValid(objectOne).then(res => console.log(res));

schema.validate(objectOne).catch(err => console.log(err.errors));