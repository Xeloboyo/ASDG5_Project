import React from 'react';
import { Link } from 'react-router-dom';
// import { ListGroup } from 'react-bootstrap';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {
  IoTicket,
  IoAnalytics,
  IoPerson,
  IoSettings,
  IoHelpCircle
} from 'react-icons/io';

const Sidebar = () => {
  return (
    <ProSidebar>
      <SidebarHeader>
        {/* You can add a header for the sidebar ex: logo */}
        Your Business Dashboard
      </SidebarHeader>

      <SidebarContent>
        {/* You can add the content of the sidebar ex: menu, profile details, ... */}
        <Menu>
          <MenuItem>
            <IoTicket />
            Tickets
            <Link to="/" />
            {/* See your takeaway Ticket */}
          </MenuItem>

          <MenuItem>
            <IoAnalytics />
            Analytics
            <Link to="/" />
            {/* Check your Restaurant Analytics */}
          </MenuItem>

          <MenuItem>
            <IoPerson />
            Profile
            <Link to="/" />
            {/* Change your Profile */}
          </MenuItem>

          <MenuItem>
            <IoSettings />
            Settings
            <Link to="/" />
            {/* Change your Settings */}
          </MenuItem>

          <MenuItem>
            <IoHelpCircle />
            Help
            <Link to="/" />
            {/* How to use, etc */}
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter>2021, Tangle &copy;</SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
