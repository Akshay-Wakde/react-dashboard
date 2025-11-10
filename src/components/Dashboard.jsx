import React from 'react'

const Dashboard = () => {
  return (
        <>
            <div className="main-heading">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-12">
                            <div className="page-icon">
                                <i className="icon-laptop_windows"></i>
                            </div>
                            <div className="page-title">
                                <h5>Dashboard</h5>
                                <h6 className="sub-heading">Welcome to Lapiz Admin Template</h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="right-actions">
                                <div className="input-group form-group search-block">
                                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..."/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">Search</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="row gutters">
                    <div className="col-md-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stats-widget">
                                    <div className="stats-widget-header">
                                        <i className="icon-facebook"></i>
                                    </div>
                                    <div className="stats-widget-body">
                                        <ul className="row no-gutters">
                                            <li className="col-sm-6 col">
                                                <h6 className="title">Facebook</h6>
                                            </li>
                                            <li className="col-sm-6 col">
                                                <h4 className="total">5,600</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stats-widget">
                                    <div className="stats-widget-header">
                                        <i className="icon-twitter"></i>
                                    </div>
                                    <div className="stats-widget-body">
                                        <ul className="row no-gutters">
                                            <li className="col-sm-6 col">
                                                <h6 className="title">Twitter</h6>
                                            </li>
                                            <li className="col-sm-6 col">
                                                <h4 className="total">3,500</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stats-widget">
                                    <a href="#" className="stats-label" data-toggle="tooltip" data-placement="top"
                                        title="New Followers">47</a>
                                    <div className="stats-widget-header">
                                        <i className="icon-googleplus"></i>
                                    </div>
                                    <div className="stats-widget-body">
                                        <ul className="row no-gutters">
                                            <li className="col-sm-6 col">
                                                <h6 className="title">Google</h6>
                                            </li>
                                            <li className="col-sm-6 col">
                                                <h4 className="total">2,800</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stats-widget">
                                    <a href="#" className="stats-label" data-toggle="tooltip" data-placement="top"
                                        title="New Posts">12</a>
                                    <div className="stats-widget-header">
                                        <i className="icon-rss"></i>
                                    </div>
                                    <div className="stats-widget-body">
                                        <ul className="row no-gutters">
                                            <li className="col-sm-6 col">
                                                <h6 className="title">Blog</h6>
                                            </li>
                                            <li className="col-sm-6 col">
                                                <h4 className="total">7,000</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gutters">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">Overview<a href="widgets.html" className="link">More examples</a></div>
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-md-5 col-sm-12">
                                        <h6 className="card-title mt-0">Visitors</h6>
                                        <div className="chartist custom-one">
                                            <div className="line-chart"></div>
                                        </div>
                                        <div className="download-details">
                                            <p>21<sup>%</sup> more visitors than last month</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-12">
                                        <div className="monthly-avg">
                                            <h6>Monthly Average</h6>
                                            <div className="avg-block">
                                                <h4 className="avg-total text-secondary">9500</h4>
                                                <h6 className="avg-label">
                                                    Visitors
                                                </h6>
                                            </div>
                                            <div className="avg-block">
                                                <h4 className="avg-total text-primary">$510<sup>k</sup></h4>
                                                <h6 className="avg-label">
                                                    Sales
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-sm-12">
                                        <h6 className="card-title mt-0">Sales</h6>
                                        <div className="chartist custom-two">
                                            <div className="line-chart2"></div>
                                        </div>
                                        <div className="download-details">
                                            <p>15<sup>%</sup> more sales than last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row gutters">
                    <div className="col-lg-8 col-md-7 col-sm-12">
                        <div className="card">
                            <div className="card-header">Team Activity</div>
                            <div className="card-body">
                                <ul className="team-activity">
                                    <li className="product-list clearfix">
                                        <div className="product-time">
                                            <p className="date center-text">02:30 pm</p>
                                            <span className="badge badge-primary">New</span>
                                        </div>
                                        <div className="product-info">
                                            <div className="row gutter">
                                                <div className="col-lg-8 col-md-7 col-sm-7">
                                                    <h5>Unify - Admin Dashboard</h5>
                                                    <p>by Luke Etheridge</p>
                                                </div>
                                                <div className="col-lg-4 col-md-5 col-sm-5">
                                                    <div className="progress sm no-margin">
                                                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="49"
                                                            aria-valuemin="0" aria-valuemax="100" style={{width: "49%"}}>
                                                            <span className="sr-only">49% Complete (success)</span>
                                                        </div>
                                                    </div>
                                                    <p>(225 of 700gb)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product-list clearfix">
                                        <div className="product-time">
                                            <p className="date center-text">11:30 am</p>
                                            <span className="badge badge-primary">Task</span>
                                        </div>
                                        <div className="product-info">
                                            <div className="row gutter">
                                                <div className="col-lg-8 col-md-7 col-sm-7">
                                                    <h5>User_Profile.php</h5>
                                                    <p>by Rovane Durso</p>
                                                </div>
                                                <div className="col-lg-4 col-md-5 col-sm-5">
                                                    <div className="progress sm no-margin">
                                                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="78"
                                                            aria-valuemin="0" aria-valuemax="100" style={{width: "78%"}}>
                                                            <span className="sr-only">78% Complete (success)</span>
                                                        </div>
                                                    </div>
                                                    <p>90% completed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product-list clearfix">
                                        <div className="product-time">
                                            <p className="date center-text">12:50 pm</p>
                                            <span className="badge badge-primary">Closed</span>
                                        </div>
                                        <div className="product-info">
                                            <div className="row gutter">
                                                <div className="col-lg-8 col-md-7 col-sm-7 col">
                                                    <h5>Material Design Kit</h5>
                                                    <p>by Cosmin Capitanu</p>
                                                </div>
                                                <div className="col-lg-4 col-md-5 col-sm-5 col">
                                                    <div className="chartist custom-one">
                                                        <div className="team-act"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12">
                        <div className="card">
                            <div className="card-header">Tasks</div>
                            <div className="card-body">
                                <div className="chartist custom-one">
                                    <div className="donut-chart"></div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-sm-4 col">
                                        <div className="info-stats">
                                            <span className="info-label"></span>
                                            <h6 className="info-title">Pending</h6>
                                            <h4 className="info-total">12</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col">
                                        <div className="info-stats">
                                            <span className="info-label red"></span>
                                            <h6 className="info-title">Completed</h6>
                                            <h4 className="info-total">7</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col">
                                        <div className="info-stats">
                                            <span className="info-label green"></span>
                                            <h6 className="info-title">New</h6>
                                            <h4 className="info-total">4</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gutters">
                    <div className="col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card-header">Events</div>
                            <div className="card-body p-0">
                                <div className="events">
                                    <div className="all-events clearfix">
                                        <div id="today-date"></div>
                                        <a href="#" className="btn btn-sm">9 Events</a>
                                    </div>
                                    <ul className="event-list">
                                        <li>
                                            <a href="#">
                                                <div className="event-status-icon">
                                                    <img src="img/checked.svg" alt="Admin Themes" className="completed" />
                                                </div>
                                                <div className="event-info">
                                                    <span className="event-time">8:45</span>
                                                    <p className="event-desc text-truncate">Coffee with Hayashi</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="event-status-icon">
                                                    <img src="img/not-checked.svg" alt="Admin Themes" className="completed" />
                                                </div>
                                                <div className="event-info">
                                                    <span className="event-time">10:30</span>
                                                    <p className="event-desc text-truncate">Product meeting with dev team</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card-header">Income</div>
                            <div className="card-body p-0">
                                <div className="row gutters">
                                    <div className="col-lg-4 col-sm-6 col">
                                        <div className="income-stats">
                                            <h4 className="total">1465k</h4>
                                            <p className="income-title"><span className="income-label"></span>Overall Income</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col">
                                        <div className="income-stats">
                                            <h4 className="total">1049k</h4>
                                            <p className="income-title"><span className="income-label secondary"> </span>Overall Expenses</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chartist custom-two">
                                    <div className="income-area-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gutters">
                    <div className="col-lg-4 col-sm-6">
                        <div className="card">
                            <div className="card-header">Chat</div>
                            <div className="customScroll">
                                <div className="card-body">
                                    <ul className="chats">
                                        <li className="chats-left">
                                            <div className="chats-avatar">
                                                <img src="img/avatar2.svg" alt="Best Admin Dashboards"/>
                                                <div className="chats-name">Wincy</div>
                                            </div>
                                            <div className="chats-text info">Hello, I'm Wincy.</div>
                                            <div className="chats-hour">08:55 <span className="icon-done_all"></span></div>
                                        </li>
                                        <li className="chats-right">
                                            <div className="chats-avatar">
                                                <img src="img/avatar1.svg" alt="Best Admin Dashboards"/>
                                                <div className="chats-name">You</div>
                                            </div>
                                            <div className="chats-text danger">How can I help you today?</div>
                                            <div className="chats-hour">08:56 <span className="icon-done_all"></span></div>
                                        </li>
                                        <li className="chats-left">
                                            <div className="chats-avatar">
                                                <img src="img/avatar2.svg" alt="Best Admin Dashboards"/>
                                                <div className="chats-name">James</div>
                                            </div>
                                            <div className="chats-text info">I need more information about Developer Plan.</div>
                                            <div className="chats-hour">08:57 <span className="icon-done_all"></span></div>
                                        </li>
                                        <li className="chats-right">
                                            <div className="chats-avatar">
                                                <img src="img/avatar2.svg" alt="Best Admin Dashboards"/>
                                                <div className="chats-name">You</div>
                                            </div>
                                            <div className="chats-text danger">Are we meeting today?</div>
                                            <div className="chats-hour">08:59 <span className="icon-done_all"></span></div>
                                        </li>
                                        <li className="chats-left">
                                            <div className="chats-avatar">
                                                <img src="img/avatar2.svg" alt="Best Admin Dashboards"/>
                                                <div className="chats-name">Wincy</div>
                                            </div>
                                            <div className="chats-text info">Maybe in an hour or so?</div>
                                            <div className="chats-hour">09:00 <span className="icon-done_all"></span></div>
                                        </li>
                                        <li className="chats-right">
                                            <div className="chats-avatar">
                                                <img src="img/avatar1.svg" alt="Best Admin Dashboards"/>
                                                <div className="chats-name">You</div>
                                            </div>
                                            <div className="chats-text danger">I need more information about Developer Plan.</div>
                                            <div className="chats-hour">09:00 <span className="icon-done_all"></span></div>
                                        </li>
                                        <li className="chats-left">
                                            <div className="chats-avatar">
                                                <img src="img/avatar2.svg" alt="Best Admin Dashboards"/>
                                                <div className="chats-name">Wincy</div>
                                            </div>
                                            <div className="chats-text info">Well I am not sure.</div>
                                            <div className="chats-hour">09:01 <span className="icon-done_all"></span></div>
                                        </li>
                                        <li className="chats-right">
                                            <div className="chats-avatar">
                                                <img src="img/avatar2.svg" alt="Best Admin Dashboards"/>
                                                <div className="chats-name">You</div>
                                            </div>
                                            <div className="chats-text danger">The rest of the team is not here yet.</div>
                                            <div className="chats-hour">09:01 <span className="icon-done_all"></span></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="card">
                            <div className="card-header">Activity</div>
                            <div className="customScroll">
                                <div className="card-body pt-0 pb-0">
                                    <ul className="project-activity">
                                        <li className="activity-list">
                                            <div className="detail-info">
                                                <span className="lbl">N</span>
                                                <p className="desc-info"><span>Novane Durso</span> server not found, connection problem.</p>
                                                <a href="#" className="activity-status"><i className="icon-done_all"></i>Read</a>
                                            </div>
                                        </li>
                                        <li className="activity-list">
                                            <div className="detail-info">
                                                <span className="lbl">L</span>
                                                <p className="desc-info"><span>Luke Etheridge</span> send email notifications of subscriptions
                                                </p>
                                                <a href="#" className="activity-status">Mark as read</a>
                                            </div>
                                        </li>
                                        <li className="activity-list">
                                            <div className="detail-info">
                                                <span className="lbl secondary">C</span>
                                                <p className="desc-info"><span>Cosmin Capitanu</span> required change logs activity reports</p>
                                                <a href="#" className="activity-status"><i className="icon-done_all"></i>Read</a>
                                            </div>
                                        </li>
                                        <li className="activity-list">
                                            <div className="detail-info">
                                                <span className="lbl">M</span>
                                                <p className="desc-info"><span>Moneyas Olina</span> strategic partnership plan</p>
                                                <a href="#" className="activity-status">Mark as read</a>
                                            </div>
                                        </li>
                                        <li className="activity-list">
                                            <div className="detail-info">
                                                <span className="lbl secondary">A</span>
                                                <p className="desc-info"><span>Auurso Novane</span> server not found, connection problem.</p>
                                                <a href="#" className="activity-status"><i className="icon-done_all"></i>Read</a>
                                            </div>
                                        </li>
                                        <li className="activity-list">
                                            <div className="detail-info">
                                                <span className="lbl">J</span>
                                                <p className="desc-info"><span>Jovin Xamire</span> send email notifications of subscriptions</p>
                                                <a href="#" className="activity-status">Mark as read</a>
                                            </div>
                                        </li>
                                        <li className="activity-list">
                                            <div className="detail-info">
                                                <span className="lbl secondary">C</span>
                                                <p className="desc-info"><span>Cosmin Capitanu</span> required change logs activity reports</p>
                                                <a href="#" className="activity-status"><i className="icon-done_all"></i>Read</a>
                                            </div>
                                        </li>
                                        <li className="activity-list">
                                            <div className="detail-info">
                                                <span className="lbl">M</span>
                                                <p className="desc-info"><span>Moneyas Olina</span> strategic partnership plan</p>
                                                <a href="#" className="activity-status">Mark as read</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="card">
                            <div className="card-header">Orders</div>
                            <div className="customScroll">
                                <div className="card-body">
                                    <ul className="order-list">
                                        <li>
                                            <p className="order-num placed">#45763 <span className="order-date">45 mins</span></p>
                                            <p className="order-desc">Jessse <span>placed</span> new order</p>
                                        </li>
                                        <li>
                                            <p className="order-num cancelled">#48239 <span className="order-date">38 mins</span></p>
                                            <p className="order-desc">Alex <span>cancelled</span> an order</p>
                                        </li>
                                        <li>
                                            <p className="order-num">#41470 <span className="order-date">24 mins</span></p>
                                            <p className="order-desc">Sunny <span>processed</span> an order</p>
                                        </li>
                                        <li>
                                            <p className="order-num placed">#46360 <span className="order-date">10 mins</span></p>
                                            <p className="order-desc">Thompson <span>placed</span> an order</p>
                                        </li>
                                        <li>
                                            <p className="order-num placed">#55242 <span className="order-date">45 mins</span></p>
                                            <p className="order-desc">Jessse <span>placed</span> new order</p>
                                        </li>
                                        <li>
                                            <p className="order-num cancelled">#33561 <span className="order-date">38 mins</span></p>
                                            <p className="order-desc">Alex <span>cancelled</span> an order</p>
                                        </li>
                                        <li>
                                            <p className="order-num">#12876 <span className="order-date">24 mins</span></p>
                                            <p className="order-desc">Sunny <span>processed</span> an order</p>
                                        </li>
                                        <li>
                                            <p className="order-num placed">#22536 <span className="order-date">10 mins</span></p>
                                            <p className="order-desc">Thompson <span>placed</span> an order</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
  )
}

export default Dashboard