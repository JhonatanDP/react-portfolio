import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
    return (
      <div>
        <Navbar expand="lg" bg="dark" sticky="top">
          <NavLink className="nav-link" to="/">
            <div class="text-light">
              <h4 class="nav-title-font">Jhonatan Diaz</h4>
            </div>
          </NavLink>
         
        </Navbar>
      </div>
    );
  }
  
  export default Navigation;