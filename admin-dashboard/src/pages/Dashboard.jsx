import Sidebar from "../components/Sidebar.jsx";

function Dashboard() {
  return (
    <div className="d-flex bg-light min-vh-100">
      <Sidebar />

      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">Dashboard</h2>

        {/* Welcome Card */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <p className="mb-0">Welcome to Admin Dashboard</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row g-3">

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>Total Users</h5>
                <h3 className="text-primary">25</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>Revenue</h5>
                <h3 className="text-success">₹45,000</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>Sales</h5>
                <h3 className="text-warning">120</h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;