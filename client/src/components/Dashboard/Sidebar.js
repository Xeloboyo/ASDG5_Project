import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';
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

import Home from '../../components/Home/Homepage';
import Analytics from '../Analytics/Analytics';
import StaffTicket from '../StaffTicket/StaffTicket';
import Settings from './Settings';
import Profile from './Profile';
import Help from './Help';

const Sidebar() {
  let { path, url } = useRouteMatch();

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
          <Router>
            {/* You can add the content of the sidebar ex: menu, profile details, ... */}
            <Menu>
              <MenuItem>
                <IoTicket />
                <Link to={`${url}/ticket`}>&nbsp; Tickets</Link>
                {/* See your takeaway Ticket */}
              </MenuItem>

              <MenuItem>
                <IoAnalytics />
                {/* Analytics */}
                <Link to={`${url}/analytics`} />
                &nbsp; Analytics
                {/* Check your Restaurant Analytics, Only Available using Business Pro */}
              </MenuItem>

              <SubMenu icon={<IoOptions />} title="Options">
                <MenuItem>
                  <IoPerson />
                  <Link to={`${url}/profile`}>&nbsp; Profile </Link>
                  {/* Change your Profile */}
                </MenuItem>

                <MenuItem>
                  <IoSettings />
                  <Link to={`${url}/settings`}>&nbsp; Settings</Link>
                  {/* Email notifications, SMS, etc */}
                </MenuItem>

                <MenuItem>
                  <IoHelpCircle />
                  <Link to={`${url}/help`}>&nbsp; Help </Link>
                  {/* How to use, etc */}
                </MenuItem>
              </SubMenu>

              <MenuItem>
                <Link to="home">&nbsp; Logout </Link>
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
