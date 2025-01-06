import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required()
    .min(2, "Name is too short")
    .max(50, "Name is too long"),
  email: yup.string().email("needs to be an email").required(),
});

const initialState = {
  fullName: "",
  email: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialState);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      console.log(valid);
      setDisabled(!valid);
    });
  }, [formValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            onChange={handleChange}
            value={formValues.fullName}
            type="text"
            name="fullName"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            onChange={handleChange}
            value={formValues.email}
            type="text"
            name="email"
          />
        </label>
        <div>
          <input disabled={disabled} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
