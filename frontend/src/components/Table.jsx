import { useState, useEffect } from "react";

export default function Table() {
  const [tools, setTools] = useState();
  const [entities, setEntities] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/allTools")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTools(data);
      });

    fetch("http://localhost:3000/api/allEntities")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEntities(data);
      });
  }, []);

  const getEntitiesOfToolbar = (toolID) => {
    
  }

  return (
    <div>
      {!tools ? (
        <p>Loading...</p>
      ) : (
        tools.map((tool) => {
          return (
            <table key={tool.name} className="table-auto">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>mosh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>mosh</td>
                  <td>mosh</td>
                </tr>
                <tr>
                  <td>mosh</td>
                  <td>mosh</td>
                </tr>
                <tr>
                  <td>mosh</td>
                  <td>mosh</td>
                </tr>
              </tbody>
            </table>
          );
        })
      )}
    </div>
  );
}
