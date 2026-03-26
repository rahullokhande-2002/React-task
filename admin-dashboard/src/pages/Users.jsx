import { useState, useEffect } from "react";
import AddUser from "../components/AddUser";
import EditUser from "../components/EditUser";
import { getUsers, saveUsers } from "../utils/localStroage.js";
import Navbar from "../components/Navbar.jsx";

function Users() {
  const [users, setUsers] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  const addUser = (user) => {
    const updated = [...users, user];
    setUsers(updated);
    saveUsers(updated);
  };

  const deleteUser = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
    saveUsers(updated);
  };

  const openEdit = (index) => {
    setCurrentIndex(index);
    setShowEdit(true);
  };

  const updateUser = (updatedUser) => {
    const updated = users.map((user, i) =>
      i === currentIndex ? updatedUser : user
    );
    setUsers(updated);
    saveUsers(updated);
  };

  return (
    <div className="container-fluid py-4 bg-light min-vh-100">
      <div className="container">
<Navbar/>
        <h2 className="mb-4">User Management</h2>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <AddUser addUser={addUser} />
          </div>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <div className="table-responsive">

              <table className="table table-bordered table-hover align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th width="160">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-success me-2"
                          onClick={() => openEdit(index)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => deleteUser(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>
        </div>

        <EditUser
          show={showEdit}
          onClose={() => setShowEdit(false)}
          user={users[currentIndex]}
          updateUser={updateUser}
        />

      </div>
    </div>
  );
}

export default Users;