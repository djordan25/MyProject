import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import CssBaseline from "@material-ui/core/CssBaseline";
import classes from "./Layout.css";
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
      <Aux>
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
                EXPRESS
              </Typography>
            </div>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="temporary" open={this.state.open}>
          {/*  <Toolbar
            className={classes.drawerTitleContainer}
            disableGutters={!this.state.open}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              EXPRESS
            </Typography>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerClose}
            >
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar> */}
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
              EXPRESS
            </Typography>
            <Button variant="fab" mini onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </Button >
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
