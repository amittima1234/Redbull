import React, { useState, useEffect, useRef } from "react";

const EditableTable = () => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Doe", age: 32 },
    { id: 3, name: "Jim Smith", age: 40 }
  ]);

  const nameRefs = useRef([]);
  const ageRefs = useRef([]);

  const updateData = (index, field, value) => {
    const updatedData = [...data];
    updatedData[index][field] = value;
    setData(updatedData);
  };

  const handleBlur = (index, field) => {
    if (field === "name") {
      updateData(index, "name", nameRefs.current[index].value);
    } else {
      updateData(index, "age", ageRefs.current[index].value);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          nameRefs.current[index] = React.createRef();
          ageRefs.current[index] = React.createRef();
          return (
            <tr key={item.id}>
              <td>
                <input
                  type="text"
                  ref={nameRefs.current[index]}
                  defaultValue={item.name}
                  onBlur={() => handleBlur(index, "name")}
                />
              </td>
              <td>
                <input
                  type="number"
                  ref={ageRefs.current[index]}
                  defaultValue={item.age}
                  onBlur={() => handleBlur(index, "age")}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EditableTable;
