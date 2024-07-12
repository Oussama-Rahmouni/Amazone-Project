import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import CollapseIcon from "@mui/icons-material/ArrowBack"; // Importing a collapse icon
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import "../styles/dashboardLayout.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
const DashboardSideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar
      collapsed={collapsed}
      toggled={!collapsed}
      onToggle={toggleSidebar}
    >
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem
          icon={<CloseFullscreenIcon onClick={toggleSidebar} />}
        ></MenuItem>
        <MenuItem
          icon={
            <Link to="/dashboard">
              <i className="material-icons">
                <SpaceDashboardIcon />
              </i>
            </Link>
          }
        >
          Dashboard
        </MenuItem>
        <SubMenu
          label="E-Commerce"
          icon={
            <i className="material-icons">
              <ShoppingCartIcon />
            </i>
          }
        >
          <MenuItem
            icon={
              <i className="material-icons">
                <DensitySmallIcon />
              </i>
            }
            component={
              <Link to="products">
                <CategoryIcon />
              </Link>
            }
          >
            Products
          </MenuItem>
          <MenuItem
            icon={
              <i className="material-icons">
                <BusinessCenterIcon />
              </i>
            }
            component={
              <Link to="sales">
                <AttachMoneyIcon />
              </Link>
            }
          >
            Sales
          </MenuItem>
          <MenuItem
            icon={
              <i className="material-icons">
                <StorefrontIcon />
              </i>
            }
            component={
              <Link to="orders">
                <TouchAppIcon />
              </Link>
            }
          >
            Orders
          </MenuItem>
          <MenuItem
            icon={
              <i className="material-icons">
                <LocalShippingIcon />
              </i>
            }
            component={<Link to="shipping" />}
          >
            Shipping
          </MenuItem>
        </SubMenu>

        <MenuItem
          icon={
            <i className="material-icons">
              <MoveToInboxIcon />
            </i>
          }
          component={<Link to="inbox" />}
        >
          Inbox
        </MenuItem>

        <MenuItem
          icon={
            <i className="material-icons">
              <PeopleOutlineIcon />
            </i>
          }
          component={<Link to="users">Users</Link>}
        >
          Users
        </MenuItem>
        <MenuItem
          icon={
            <i className="material-icons">
              <CalendarMonthIcon />
            </i>
          }
          component={<Link to="calendar">Calendar</Link>}
        >
          Calendar
        </MenuItem>
        <MenuItem
          icon={
            <i className="material-icons">
              <LogoutIcon />
            </i>
          }
          component={<Link to="/">Sign out</Link>}
        >
          Sign out
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default DashboardSideBar;
