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
      <div style={{ height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="black" backgroundColor="white" className='sidebar'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <img src={logo} alt="logo"
               />
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="th-large" style={{ color: 'black' }}>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/modules" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book" style={{ color: 'black' }}>Modules</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Events Center</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter >
        <Link to="/login" onClick={handleLogout}>LOG OUT</Link>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
: <div >
</div>}
    </>
  )
}

export default NavBar
