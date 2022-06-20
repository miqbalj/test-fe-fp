import React from 'react'
import "./Style/UserDashboard.css"
import Navbar from './Navbar'

function UserDashboard() {
    return (
        <div className="UserDashboard">
            <div><Navbar/></div>
            <div className="UserDashboard-container">
                <div>
                    {/* <h1>User Dashboard</h1> */}
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;