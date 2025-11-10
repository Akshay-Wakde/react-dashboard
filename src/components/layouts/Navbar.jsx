import React from 'react'
import logo from  "../../assets/admin/img/logo.svg";
import { NavLink, useLocation  } from "react-router-dom";

const Navbar = () => {

const location = useLocation();
// Check if the current path starts with "/users"
const isDashboard = location.pathname.startsWith("/dashboard");
const isUsersActive = location.pathname.startsWith("/users");

  return (
		<aside className="app-side" id="app-side">
			<div className="side-content">
				<a href="index.html" className="logo">
					<img src={logo} alt="AI Admin Dashboard" />
				</a>
				{/* <div className="user-profile">
					<ul className="profile-actions">
						<li>
							<a href="#">
								<i className="icon-social-skype"></i>
								<span className="count-label red"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="icon-drafts"></i>
							</a>
						</li>
						<li>
							<a href="login.html">
								<i className="icon-open_in_new"></i>
							</a>
						</li>
					</ul>
				</div> */}
				<nav className="side-nav">
					<ul className="unifyMenu" id="unifyMenu">
						<li className={isDashboard ? "active selected" : ""}>
							<NavLink to="/dashboard" >
									<span className="has-icon">
										<i className="icon-laptop_windows"></i>
									</span>
									<span className="nav-title">Dashboard</span>
							</NavLink>
						</li>
						<li  className={isUsersActive ? "active selected" : ""} >
							<a href="#" className="has-arrow" aria-expanded="false">
								<span className="has-icon">
									<i className="icon-users"></i>
								</span>
								<span className="nav-title">Users</span>
							</a>
							<ul aria-expanded={isUsersActive ? "true" : "false"}>
								<li className={({ isUsersActive }) => isUsersActive ? "active selected" : ""}>
									<NavLink to="/users/lists" >
									List
									</NavLink>
								</li>
								<li className={({ isUsersActive }) => isUsersActive ? "active selected" : ""}>
									<NavLink to="/users/add" >
									Add
									</NavLink>
								</li>
								<li className={({ isUsersActive }) => isUsersActive ? "active selected" : ""}>
									<NavLink to="/users/import" >
									Import
									</NavLink>
								</li>
								
							</ul>
						</li>
						
					</ul>
				</nav>
			</div>
		</aside>    
  )
}

export default Navbar