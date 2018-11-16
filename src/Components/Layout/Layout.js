import React, { Component } from "react";
import Hoc from "../../hoc/Hoc";
import CssBaseline from "@material-ui/core/CssBaseline";
import classes from "./Layout.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Button from '@material-ui/core/Button';
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MemoryIcon from '@material-ui/icons/Memory';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { mainListItems, secondaryListItems } from "./menuListItems";
class Layout extends Component {
  state = {
    open: false
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  render() {
    return (
      <Hoc>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            disableGutters={!this.state.open}
            className={classes.drawerTitleContainer}
          >
            <div className={classes.flexCenter}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                SOLUTIONS INC
              </Typography>
            </div>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="temporary" open={this.state.open}
        >
          <div
            className={[classes.drawerTitleContainer, classes.flexCenter].join(
              " "
            )}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              SOLUTIONS INC
            </Typography>
            <div className={classes.closeDrawerBtn}>
              <Button variant="fab" color="secondary" mini onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </Button >
            </div>
          </div>
          <Divider />
          <List>
            <ListSubheader>DATA SOURCE</ListSubheader>
            <ListItem button onClick={this.props.onDataSourceAdd}>
              <ListItemIcon>
                <MemoryIcon />
              </ListItemIcon>
              <ListItemText primary="Add Constant" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListSubheader>MODELS</ListSubheader>
            <ListItem button onClick={this.props.onNodeAdd}>
              <ListItemIcon>
                <LibraryAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Subtract" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Multiply" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary="Divide" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <div>
              <ListSubheader >REPORTS</ListSubheader>
              <ListItem button>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Risk Report" />
              </ListItem>
              {/* <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
            </div></List>
        </Drawer>
        <main className={classes.Content}>{this.props.children}</main>

      </Hoc>
    );
  }
}
export default Layout;
