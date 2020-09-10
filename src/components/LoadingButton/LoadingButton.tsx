import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

export type LoadingButtonProps = {
  loading: boolean;
  disabled?: boolean;
  children: any;
} & ButtonProps;

const Loader = styled(CircularProgress)`
  width: 20px !important;
  height: 20px !important;
  position: absolute;
`;

const LoadingButton: React.SFC<LoadingButtonProps> = ({
  loading,
  disabled,
  children,
  ...props
}: LoadingButtonProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button disabled={loading || disabled} {...props}>
    {loading ? <Loader color="secondary" /> : null}
    {children}
  </Button>
);

export default LoadingButton;
