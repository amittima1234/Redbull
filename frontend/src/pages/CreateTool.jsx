import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import axios from "axios";

const generateUniqueKey = () => {
  return Date.now().toString();
};

export default function CreateTool() {
  const initialValues = {
    name: "",
    link: "",
    fields: [{ fieldName: "", fieldType: "", key: generateUniqueKey() }],
  };

  // Define a validation function
  const validate = (values) => {
    const errors = {};

    // You can add validation logic here if needed

    return errors;
  };

  // Define a submission function
  const handleSubmit = (values) => {
    axios
      .post(
        "http://localhost:3000/api/createTool",
        {
          toolName: values.name,
          docsLink: values.link,
          fields: values.fields,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      )
      .then(function (response) {
        console.log("Form submitted:", values, "\nWith response: ", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div dir="rtl">
      <h1>יאללה הגיע הזמן לקלוט תכולה חדשה🔥</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            {/* Permanent fields */}
            <div>
              <label htmlFor="name">שם התכולה:</label>
              <Field
                type="text"
                id="name"
                name="name"
                autoComplete="on"
                placeholder="משהו מסווג"
              />
            </div>

            <div>
              <label htmlFor="link">לינק לקונפלואנס:</label>
              <Field
                type="text"
                id="link"
                name="link"
                autoComplete="url"
                placeholder="תתעדו אותי בקונפלאונס לדורות הבאים בבקשה"
              />
            </div>

            {/* Dynamic fields */}
            <FieldArray name="fields">
              {(arrayHelpers) => (
                <div>
                  {values.fields.map((field, index) => (
                    <div key={`${field.key}`}>
                      <label htmlFor={`fields.${index}.fieldName`}>
                        שם השדה:
                      </label>
                      <Field
                        type="text"
                        id={`fields.${index}.fieldName`}
                        name={`fields.${index}.fieldName`}
                        autoComplete="on"
                      />

                      <label htmlFor={`fields.${index}.fieldType`}>
                        סוג השדה:
                      </label>
                      <Field
                        as="select"
                        id={`fields.${index}.fieldType`}
                        name={`fields.${index}.fieldType`}
                      >
                        <option value="">בחר סוג שדה</option>
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="boolean">Boolean</option>
                      </Field>

                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        מחק שדה
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
                        fieldName: "",
                        fieldType: "",
                        key: generateUniqueKey(),
                      })
                    }
                  >
                    הוספת שדה
                  </button>
                </div>
              )}
            </FieldArray>

            {/* Submit button */}
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
