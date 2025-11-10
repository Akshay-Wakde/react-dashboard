import React, { useState } from 'react';

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


const Login = ({onLoginSuccess}) => {

    
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const PORT = import.meta.env.VITE_BACKEND_PORT;
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const API_URL = `${API_BASE_URL}:${PORT}api/user/login`;
    const SECRET_KEY = import.meta.env.SECRET_KEY;


    const handleSubmit = async() => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetchWithBackoff(API_URL,{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({username,password}),
            })
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
    }


  return (
        <div className="container">
			<div className="login-screen row align-items-center">
				<div className="col-sm-12">
					<form onSubmit={handleSubmit}>
						<div className="login-container">
							<div className="row no-gutters">
								<div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
									<div className="login-box">
										<a href="#" className="login-logo">
											<img src="img/logo.svg" alt="AI Admin Dashboard" />
										</a>
										<div className="input-group mb-2">
											<input type="text" className="form-control"  value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Username" aria-label="username"
												aria-describedby="username"/>
										</div>
										<div className="input-group mb-2">
											<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-control" placeholder="Password" aria-label="Password"
												aria-describedby="Password"/>
										</div>
										<div className="actions clearfix">
											<a href="forgot-pwd.html">Lost password?</a>
											<button type="submit" className="btn btn-primary"  disabled={loading}> {loading ? 'Authenticating...' : 'Sign In'}</button>
										</div>
                                        {error && (
                                        <div className="bg-danger p-2 text-white">
                                        {error}
                                        </div>
                                        )}
										<div className="or"></div>
										<div className="mt-4">
											<a href="signup.html" className="additional-link">Don't have an Account? <span>Create Now</span></a>
										</div>
									</div>
								</div>
								<div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
									<div className="login-slider"></div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
  )
}

export default Login