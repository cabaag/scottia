import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import Searcher from "../Searcher/Searcher";

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    alignItems: "flex-start",
  },
  toolbarContent: {
    minHeight: 128,
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.toolbarContent}>
          <Typography className={classes.title} variant="h5" noWrap>
            Scottiabank
          </Typography>
          <div className={classes.search}>
            <Searcher />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
