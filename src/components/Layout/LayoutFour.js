import { Fragment } from "react";
import {HeaderFour, HeaderOne} from "../Header";
import { FooterTwo } from "../Footer";

const LayoutFour = ({ children }) => {
  return (
    <Fragment>
      <HeaderOne />
      {children}
      <FooterTwo />
    </Fragment>
  );
};

export default LayoutFour;
