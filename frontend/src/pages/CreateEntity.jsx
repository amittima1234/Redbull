import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

export default function CreateEntity() {
  const [tools, setTools] = useState();
  const [fields, setFields] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/allTools")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTools(data);
      });
  }, []);

  const initialValues = {
    toolName: "",
    fields: [],
  };

  const validate = (values) => {
    const errors = {};
    return errors;
  };

  const handleClick = (event) => {
    setFields(tools?.find(({ name }) => name === event.target.value).fields);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div dir="rtl">
      <h1>אז מתעדים שרת חדש, יפה🤙</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>בחר את התכולה:</h2>
          {tools?.map((tool) => (
            <div key={tool.name}>
              <label htmlFor={tool.name}>
                <Field
                  id={tool.name}
                  type="radio"
                  name="selectedOption"
                  value={tool.name}
                  onClick={handleClick}
                />
                {tool.name}
              </label>
            </div>
          ))}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
