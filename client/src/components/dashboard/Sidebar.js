import React from 'react';
// import Link from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
// import { ListGroup } from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import '../../scss/style.scss';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu
} from 'react-pro-sidebar';
import {
  IoTicket,
  IoAnalytics,
  IoPerson,
  IoSettings,
  IoHelpCircle,
  IoOptions
} from 'react-icons/io5';

const Sidebar = () => {
  return (
    <div
      style={{
        position: 'fixed',
        height: '100%',
        overflow: 'hidden',
        whiteSpace: 'normal',
        zIndex: '2',
        overflowX: 'hidden',
        top: 0,
        left: 0
        // marginRight: '300px'
      }}
    >
      <ProSidebar>
        <SidebarHeader>
          {/* You can add a header for the sidebar ex: logo */}
          Your Restaurant Dashboard
        </SidebarHeader>

        <SidebarContent>
          <Router>
            {/* You can add the content of the sidebar ex: menu, profile details, ... */}
            <Menu>
              <MenuItem>
                <IoTicket />
                &nbsp; Tickets
                <Route to="/" />
                {/* See your takeaway Ticket */}
              </MenuItem>

              <MenuItem>
                <IoAnalytics />
                &nbsp; Unlock Pro Now
                {/* Analytics */}
                <Route to="/" />
                {/* Check your Restaurant Analytics, Only Available using Business Pro */}
              </MenuItem>

              <SubMenu icon={<IoOptions />} title="Options">
                <MenuItem>
                  <IoPerson />
                  &nbsp; Profile
                  <Route to="/" />
                  {/* Change your Profile */}
                </MenuItem>

                <MenuItem>
                  <IoSettings />
                  &nbsp; Settings
                  <Route to="/" />
                  {/* Change your Settings */}
                </MenuItem>

                <MenuItem>
                  <IoHelpCircle />
                  &nbsp; Help
                  <Route to="/" />
                  {/* How to use, etc */}
                </MenuItem>
              </SubMenu>

              <MenuItem>
                &nbsp; Logout
                <Route to="/" />
                {/* Logout */}
              </MenuItem>
            </Menu>
          </Router>
        </SidebarContent>

        <SidebarFooter>2021, Tangle &copy;</SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
