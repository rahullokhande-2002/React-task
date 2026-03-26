import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChart = () => {

  // Save static data to localStorage
  useEffect(() => {
    if (!localStorage.getItem("analytics")) {
      const staticData = {
        totalUsers: 25,
        revenue: 45000,
        sales: 120
      };

      localStorage.setItem("analytics", JSON.stringify(staticData));
    }
  }, []);

  // Fetch from localStorage
  const analytics = JSON.parse(localStorage.getItem("analytics")) || {
    totalUsers: 20,
    revenue: 20,
    sales: 10
  };

  const data = {
    labels: ["Total Users", "Revenue", "Sales"],
    datasets: [
      {
        label: "Admin Analytics",
        data: [
          analytics.totalUsers,
          analytics.revenue,
          analytics.sales
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)"
        ],
        borderRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Dashboard Overview"
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default DashboardChart;