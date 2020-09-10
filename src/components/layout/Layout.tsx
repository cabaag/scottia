import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";

export interface LayoutProps {
  children: any;
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const Root = styled(Container)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.root}>
        <Root fixed>{children}</Root>
      </main>
    </>
  );
};

export default Layout;
