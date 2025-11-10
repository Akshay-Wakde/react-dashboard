import React from 'react'
import userImage from "../../assets/admin/img/user.png";
const Header = () => {
  return (
            <header className="app-header">
                <div className="container-fluid">
                    <div className="row gutters">
                        <div className="col-md-4 col-sm-3 col-4">
                            <a className="mini-nav-btn" href="#" id="onoffcanvas-nav">
                                <i className="icon-sort"></i>
                            </a>
                            <a href="#app-side" data-toggle="onoffcanvas" className="onoffcanvas-toggler" aria-expanded="true">
                                <i className="icon-chevron-thin-left"></i>
                            </a>
                        </div>
                        <div className="col-md-8 col-sm-9 col-8">
                            <ul className="header-actions">
                                <li className="dropdown">
                                    <a href="#" id="notifications" data-toggle="dropdown" aria-haspopup="true">
                                        <i className="icon-notifications_none"></i>
                                        <span className="count-label"></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right lg" aria-labelledby="notifications">
                                        <ul className="imp-notify">
                                            <li>
                                                <div className="icon">W</div>
                                                <div className="details">
                                                    <p><span>Wilson</span> The best Dashboard design I have seen ever.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">J</div>
                                                <div className="details">
                                                    <p><span>John Smith</span> Jhonny sent you a message. Read now!</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon secondary">R</div>
                                                <div className="details">
                                                    <p><span>Justin Mezzell</span> Stella, Added you as a Friend. Accept it!</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" id="todos" data-toggle="dropdown" aria-haspopup="true">
                                        <i className="icon-person_outline"></i>
                                        <span className="count-label red"></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right lg" aria-labelledby="todos">
                                        <ul className="stats-widget">
                                            <li>
                                                <h4>$37895</h4>
                                                <p>Revenue <span>+2%</span></p>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="87" aria-valuemin="0"
                                                        aria-valuemax="100" style={{ width: "87%"}}>
                                                        <span className="sr-only">87% Complete (success)</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <h4>4,897</h4>
                                                <p>Downloads <span>+39%</span></p>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0"
                                                        aria-valuemax="100" style={{ width: "65%"}}>
                                                        <span className="sr-only">65% Complete (success)</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <h4>2,219</h4>
                                                <p>Uploads <span className="text-secondary">-7%</span></p>
                                                <div className="progress">
                                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="42"
                                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "42%"}}>
                                                        <span className="sr-only">42% Complete (success)</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" id="userSettings" className="user-settings" data-toggle="dropdown" aria-haspopup="true">
                                        <img className="avatar" src={userImage} alt="Admin Dashboards" />
                                        <span className="user-name">Yuki Hayashi</span>
                                        <i className="icon-chevron-small-down"></i>
                                    </a>
                                    <div className="dropdown-menu lg dropdown-menu-right" aria-labelledby="userSettings">
                                        <ul className="user-settings-list">
                                            <li>
                                                <a href="profile.html">
                                                    <div className="icon">
                                                        <i className="icon-account_circle"></i>
                                                    </div>
                                                    <p>Profile</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="profile.html">
                                                    <div className="icon red">
                                                        <i className="icon-cog3"></i>
                                                    </div>
                                                    <p>Settings</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="filters.html">
                                                    <div className="icon yellow">
                                                        <i className="icon-schedule"></i>
                                                    </div>
                                                    <p>Activity</p>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="logout-btn">
                                            <button className="btn btn-primary">Logout</button>

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
  )
}

export default Header