import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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

import Home from '../../Component/Home/Homepage';
import BusinessPro from '../business-pro/BusinessPro';
import StaffTicket from '../staff-ticket/StaffTicket';
import Settings from '../Settings';
import Profile from '../Profile';
import Help from '../Help';

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
      <ProSidebar className="text-center">
        <SidebarHeader>
          {/* You can add a header for the sidebar ex: logo */}
          Tangle Restaurant Dashboard
        </SidebarHeader>

        <SidebarContent>
          <Linkr>
            {/* You can add the content of the sidebar ex: menu, profile details, ... */}
            <Menu>
              <MenuItem>
                <IoTicket />
                <Link to="/dashboard">&nbsp; Tickets</Link>
                {/* See your takeaway Ticket */}
              </MenuItem>

              <MenuItem>
                <IoAnalytics />
                {/* Analytics */}
                <Link to="/dashboard/analytics" />
                &nbsp; Analytics
                {/* Check your Restaurant Analytics, Only Available using Business Pro */}
              </MenuItem>

              <SubMenu icon={<IoOptions />} title="Options">
                <MenuItem>
                  <IoPerson />
                  <Link to="/dashboard/profile">&nbsp; Profile </Link>
                  {/* Change your Profile */}
                </MenuItem>

                <MenuItem>
                  <IoSettings />
                  <Link to="/dashboard/settings">&nbsp; Settings</Link>
                  {/* Email notifications, SMS, etc */}
                </MenuItem>

                <MenuItem>
                  <IoHelpCircle />
                  <Link to="/dashboard/help">&nbsp; Help </Link>
                  {/* How to use, etc */}
                </MenuItem>
              </SubMenu>

              <MenuItem>
                <Link to="/dashboard/logout">&nbsp; Logout </Link>
                {/* Logout */}
              </MenuItem>
            </Menu>
          </Linkr>
        </SidebarContent>

        <SidebarFooter>2021, Tangle &copy;</SidebarFooter>
      </ProSidebar>

      <div>
        <Switch>
          <Route path="/dashboard"></Route>
          <StaffTicket />
        </Switch>
        <Switch>
          <Route path="/dashboard/analytics"></Route>
          <BusinessPro />
        </Switch>
        <Switch>
          <Route path="/dashboard/profile"></Route>
          <Profile />
        </Switch>
        <Switch>
          <Route path="/dashboard/settings"></Route>
          <Settings />
        </Switch>
        <Switch>
          <Route path="/dashboard/help"></Route>
          <Help />
        </Switch>
        <Switch>
          <Route path="/dashboard/logout"></Route>
          <Home />
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
