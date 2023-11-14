import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  let [users, setUsers] = useState([
    {
      Name: "",
      Email: "",
      Age: "",
    },
  ]);

  useEffect(() => {
    async function fetching() {
      let fetchedData = await axios.get("http://localhost:5000/getUser");
      setUsers(fetchedData.data);
    }
    fetching();
  }, [users]);
  return (
    <div>
      <Link to="/create">
        <button>+add</button>
      </Link>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((x) => {
              return (
                <tr>
                  <td>{x.Name}</td>
                  <td>{x.Email}</td>
                  <td>{x.Age}</td>
                  <td>
                    <Link to={`/update/${x._id}`}>
                      <button>Edit</button>
                    </Link>
                    <button
                      onClick={async () => {
                        let delData = await axios.delete(
                          `http://localhost:5000/deleteUser/${x._id}`
                        );
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
