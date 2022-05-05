import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from './logo.png';
import "./Navbar.css";


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {/* {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <li><Link to="/modules">Modules</Link></li>
            <li><Link to="/create-module">Create Module</Link></li>
            <li><Link to="/create-lesson">Create Lesson</Link></li>
            <li><Link to="/create-quiz">Create Quiz</Link></li>

          </ul>
        </nav>
        :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      } */}
      {user ?
      <div style={{ height: '100vh',  }}>
      <CDBSidebar  defaultOpen textColor="black" backgroundColor="white" className='sidebar' >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <img src={logo} alt="logo"
               />
        </CDBSidebarHeader>

        <CDBSidebarContent defaultOpen >
          <CDBSidebarMenu defaultOpen >
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="th-large" style={{ color: 'black' }}>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/modules" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book" style={{ color: 'black' }}>Modules</CDBSidebarMenuItem>
            </NavLink>
            {user.isAdmin === true ? <NavLink exact to="/adminPage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sticky-note" style={{ color: 'black' }}>Modules</CDBSidebarMenuItem>
            </NavLink> : <div></div>}
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Events Center</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter>
        <CDBSidebarMenuItem icon="user" onClick={handleLogout}><Link to="/login" onClick={handleLogout}>Log Out</Link></CDBSidebarMenuItem>
        
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
: <div >
</div>}
    </>
  )
}

export default NavBar
