import React, { useState, useEffect, useCallback } from 'react';
import { LogIn, LogOut, Loader, BarChart2 } from 'lucide-react';

// --- Configuration ---
const API_BASE_URL = 'http://localhost:5000';
const USER_KEY = 'user_token'; // Key for localStorage to persist the token

// Helper to simulate API call latency and handle retries/backoff (as per instructions)
const fetchWithBackoff = async (url, options, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
      console.warn(`Request failed. Retrying in ${Math.round(delay / 1000)}s...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

// --- Protected Dashboard Component ---
const Dashboard = ({ token, onLogout }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboardData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchWithBackoff(`${API_BASE_URL}/dashboard`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error('Failed to fetch dashboard:', err);
      setError('Failed to load dashboard data. Your session may have expired.');
      // Optionally force logout if the token is invalid
      // onLogout();
    } finally {
      setIsLoading(false);
    }
  }, [token, onLogout]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return (
    <div className="p-8 bg-white shadow-2xl rounded-xl w-full max-w-4xl space-y-6">
      <h1 className="text-4xl font-extrabold text-indigo-700 flex items-center">
        <BarChart2 className="w-8 h-8 mr-3" />
        Admin Dashboard
      </h1>
      <p className="text-gray-600 border-b pb-4">
        This is a protected route. Access is granted via the stored JWT.
      </p>

      {isLoading && (
        <div className="flex items-center text-indigo-500">
          <Loader className="w-5 h-5 animate-spin mr-2" />
          Loading secure data...
        </div>
      )}

      {error && <p className="text-red-500 font-medium">{error}</p>}

      {data && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">API Response:</h2>
          <pre className="text-sm overflow-x-auto text-green-700 bg-gray-100 p-3 rounded-md">
            {JSON.stringify(data, null, 2)}
          </pre>
          <p className="mt-4 text-sm text-gray-500">
            Authenticated User ID: <span className="font-mono text-gray-700">{data.userId}</span>
          </p>
        </div>
      )}

      <button
        onClick={onLogout}
        className="mt-6 w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
      >
        <LogOut className="w-5 h-5 mr-2" />
        Logout
      </button>
    </div>
  );
};

// --- Login Form Component ---
const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('user'); // Default for easy testing
  const [password, setPassword] = useState('password'); // Default for easy testing
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetchWithBackoff(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (result.token) {
        onLoginSuccess(result.token);
      } else {
        // Handle non-200 responses that might still return JSON (e.g., 401 Unauthorized)
        setError(result.message || 'Login failed: Invalid credentials.');
      }
    } catch (err) {
      console.error('Login request failed:', err);
      setError('Network error or server unavailable. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-white shadow-2xl rounded-xl w-full max-w-sm space-y-6">
      <h1 className="text-3xl font-extrabold text-indigo-600 flex items-center justify-center">
        <LogIn className="w-6 h-6 mr-2" />
        Secure Login
      </h1>
      <p className="text-center text-gray-500 text-sm">Use: user / password</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {error && (
          <div className="text-sm p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          {loading ? (
            <Loader className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <LogIn className="w-5 h-5 mr-2" />
          )}
          {loading ? 'Authenticating...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

// --- Main Application Component ---
const App = () => {
  const [token, setToken] = useState(() => localStorage.getItem(USER_KEY) || null);

  const handleLoginSuccess = (newToken) => {
    setToken(newToken);
    localStorage.setItem(USER_KEY, newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem(USER_KEY);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-inter">
      {token ? (
        <Dashboard token={token} onLogout={handleLogout} />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;