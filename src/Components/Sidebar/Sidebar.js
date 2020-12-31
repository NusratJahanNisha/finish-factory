import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (

        <div class="container" style={{ padding: "20px", margin: "10px" }}>

            {/*-------------------------------------Admin Section---------------------------- */}

            <div className="admin-box">
                <div className="d-flex bd-highlight mb-3">
                    <div class="p-2 bd-highlight"><img src="https://i.ibb.co/Jrwws2Q/Ellipse-2.png" alt="" /></div>
                    <div class="p-2 bd-highlight">
                        <ul className="list-unstyled">
                            <li><span className="admin-text">Admin</span> </li>
                            <li><span className="finish-factory-text">Finish Factory</span></li>
                        </ul>
                        
                        
                    </div>
                </div>
            </div>


            {/*-------------------------------------Dashboard Section-------------------------------------- */}

            <div className="dashboard-box" >
                <ul className="list-unstyled">
                    <li className="p-2"><img src="https://i.ibb.co/JFkrYcz/Group.png" alt="" /> <span className="dashboard-text">Dashboard</span></li>
                    <li className="p-2"><img src="https://i.ibb.co/JFkrYcz/Group.png" alt="" /> <span className="dashboard-text">Orders</span></li>
                    <li className="p-2"><img src="https://i.ibb.co/JFkrYcz/Group.png" alt="" /> <span className="dashboard-text">Customers</span></li>
                </ul>
            </div>

            {/*-------------------------------------Management Section------------------------------- */}

            <div className="management-box">
                <ul className="list-unstyled" >
                    <li className="p-2"><img src="https://i.ibb.co/JFkrYcz/Group.png" alt="" /> <span className="dashboard-text">Management</span></li>
                    <li className="sub-bar" > Services</li>
                    <li className="sub-bar" >Products</li>
                    <li className="sub-bar">Blogs</li>
                </ul>
            </div>

            {/* -------------------------------------Tracking Section-------------------------------*/}

            <div className="tracking-box">
                <ul className="list-unstyled" >
                    <li className="p-2"><img src="https://i.ibb.co/JFkrYcz/Group.png" alt="" /> <span className="dashboard-text">Tracking</span></li>
                    <li className="sub-bar">Analytics</li>
                    <li className="sub-bar">Issues</li>
                    <li className="sub-bar">Reviews</li>
                </ul>
            </div>

            {/*---------------------------------------Logout Section---------------------------- */}

            <div className="logout-box">
                <ul className="list-unstyled" >
                    <li className="p-2"><img src="https://i.ibb.co/JFkrYcz/Group.png" alt="" /> <span className="dashboard-text">Logout</span></li>
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;