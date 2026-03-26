import { useState } from "react";

function AddUser({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !role) return;

    addUser({ name, email, role });

    setName("");
    setEmail("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-2">

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="col-md-1">
          <button className="btn btn-primary w-100">
            Add
          </button>
        </div>

      </div>
    </form>
  );
}

export default AddUser;