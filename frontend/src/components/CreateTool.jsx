import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

export default function Test() {
  // Define an initial form values object
  const initialValues = {
    name: "משהו מסווג",
    link: "תתעדו אותי בקונפלאונס לדורות הבאים בבקשה",
    fields: [{ fieldName: "", fieldType: "" }],
  };

  // Define a validation function
  const validate = (values) => {
    const errors = {};

    // You can add validation logic here if needed

    return errors;
  };

  // Define a submission function
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log("Form submitted:", values);
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
              <Field type="text" id="name" name="name" value="משהו מסווג" />
            </div>

            <div>
              <label htmlFor="link">לינק לקונפלואנס:</label>
              <Field
                type="text"
                id="link"
                name="link"
                value="תתעדו אותי בקונפלאונס לדורות הבאים בבקשה"
              />
            </div>

            {/* Dynamic fields */}
            <FieldArray name="fields">
              {(arrayHelpers) => (
                <div>
                  {values.fields.map((field, index) => (
                    <div key={index}>
                      <label htmlFor={`fields.${index}.fieldName`}>
                        שם השדה:
                      </label>
                      <Field
                        type="text"
                        id={`fields.${index}.fieldName`}
                        name={`fields.${index}.fieldName`}
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
                      arrayHelpers.push({ fieldName: "", fieldType: "" })
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
