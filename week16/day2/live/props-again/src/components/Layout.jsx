import React from "react";
import { Footer } from "./Footer";
import { Heading } from "./Heading";

export const Layout = (props) => {
  return (
    <>
      <Heading hello={props.headerText} />
      {props.children}
      <Footer />
    </>
  );
};
