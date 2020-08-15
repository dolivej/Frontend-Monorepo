import React, {ReactNode} from "react";
import NavBar from "./Navar";
import {
    Footer,
    ContextProvider
} from "@locnest/component-library";
import PropTypes from "prop-types"
import { globalHistory } from "@reach/router";

const Layout = ({ children } : any) => {
    const loggerProps = {
        instrumentationKey: "f68cff58-f70f-40e5-a602-0479c39b4115",
        history: globalHistory,
      };
  
      
    return (
      <>
        <ContextProvider loggerProps={loggerProps}>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </ContextProvider>
      </>
    )
}
  
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}


export default Layout;