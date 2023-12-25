import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateResumeModal from "./UpdateResumeModal";

function GetResume() {
  const [resume, SetResume] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [user, SetUser] = useState("");

  const fetchResumes = async () => {
    try {
      let response = await axios.get(
        "https://react-http-6faae-default-rtdb.firebaseio.com/resume.json"
      );
      let resumeData = response.data;
      let dataArray = [];
      for (let key in resumeData) {
        dataArray.push({ ...resumeData[key], id: key });
      }
      console.log(dataArray);
      SetResume(dataArray);
    } catch (e) {
      console.log("Error", e);
    }
  };

  function handleClick() {
    fetchResumes();
  }

  useEffect(() => {
    fetchResumes();
  }, [user]);

  function handleEdit(event, user) {
    setEditMode(true);
    SetUser(user);
  }

  function handleDelete(event, user) {
    console.log(event);
    SetUser(user);
    axios.delete(
      `https://react-http-6faae-default-rtdb.firebaseio.com/resume/${user.id}.json`
    );
    fetchResumes();
  }

  function closeEditModalHandler(value) {
    setEditMode(value);
  }

  return (
    <div>
      <h1 className="getResumeTitle">Recorded Users</h1>
      <button onClick={handleClick}>Get Users</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact #</th>
            <th>State</th>
            <th>DOB</th>
            <th>Exp</th>
            <th>Resume</th>
            <th>📝</th>
            <th>❌</th>
          </tr>
        </thead>
        <tbody>
          {resume.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.conNumber}</td>
                <td>{user.state}</td>
                <td>{user.dob}</td>
                <td>{user.experience}</td>
                <td>{user.resFile}</td>
                <td>
                  <button
                    onClick={(event) => {
                      return handleEdit(event, user);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={(event) => {
                      return handleDelete(event, user);
                    }}
                  >
                    Del
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {editMode ? (
        <UpdateResumeModal
          user={user}
          closeEditModalHandler={closeEditModalHandler}
        />
      ) : null}
    </div>
  );
}

export default GetResume;
