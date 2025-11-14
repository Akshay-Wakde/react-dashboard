// App.jsx (Conceptual Routing)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserList from './pages/users/Lists'
import UserAdd from './pages/users/Add';
import UserImport from './pages/users/Import';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* User Routes */}
        <Route path="/users/list" element={<UserList />} />
        <Route path="/users/add" element={<UserAdd />} />
        <Route path="/users/import" element={<UserImport />} />
        {/* Add a 404 page route */}
      </Routes>
    </Router>
  );
}
export default App;