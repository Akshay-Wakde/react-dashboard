// Dashboard.jsx
import Layout from '../components/common/Layout';

function Dashboard() {
  return (
    <Layout pageTitle="Dashboard">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to the Dashboard</h1>
      {/* Add your charts, stats, and widgets here using Tailwind classes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Example: Stat Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm font-medium text-gray-500">Total Users</p>
          <p className="text-2xl font-bold text-gray-900">1,234</p>
        </div>
        {/* More cards... */}
      </div>
    </Layout>
  );
}
export default Dashboard;