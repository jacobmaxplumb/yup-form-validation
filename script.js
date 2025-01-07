const yup = require("yup");

const schema = yup.object().shape({
  fullName: yup
    .string("the value needs to be a string")
    .required("Name is required")
    .min(2, "Name is too short")
    .max(20, "Name is too long"),
  email: yup
    .string("the value needs to be a string")
    .email("needs to be an email")
    .required(),
});

yup
  .reach(schema, "fullName")
  .validate("a")
  .then(() => console.log("field is valid"))
  .catch((err) => console.log(err.errors));
