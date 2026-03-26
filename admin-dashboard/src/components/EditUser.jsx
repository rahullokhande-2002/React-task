import { useState, useEffect } from "react";

function EditUser({ show, onClose, user, updateUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);                  
    }
  }, [user]);

  const handleSubmit = () => {
    updateUser({ name, email, role });
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal d-block" style={{background:"rgba(0,0,0,0.5)"}}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5>Edit User</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">

            <input
              className="form-control mb-2"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Name"
            />

            <input
              className="form-control mb-2"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              className="form-control"
              value={role}
              onChange={(e)=>setRole(e.target.value)}
              placeholder="Role"
            />

          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>

            <button className="btn btn-success" onClick={handleSubmit}>
              Update
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EditUser;