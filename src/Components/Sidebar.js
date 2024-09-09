import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Image, ListGroup } from 'react-bootstrap';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar(params) {
    return(
       
        <div className="waiter_profile_sidebar w-10" >
          <div className="waiter_profile_sidebar-item waiter_profile_sidebar-item1 active">
            <img
              width="40"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4WypskBF6B4F0NUewFgN--4mjiAyCI2_LZA&s"
              alt="User Profile Icon"
            />
          </div>

          <div className="waiter_profile_sidebar-item waiter_profile_sidebar-item2 active">
            <Link to="/">
              <img
                width="40"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkxkQwj4nKJq7wzVgcq1QNjAEv0FPxwC_4g&s"
                alt="User Profile Icon"
              />
            </Link>
          </div>
          <div className="waiter_profile_sidebar-item waiter_profile_sidebar-item3 active">
            <Link to="/AddWaiter">
            <img
              width="40"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBqPGnBVxNcciJClCawl8fnZovFiRoc-c3g&s"
              alt="User Profile Icon"
            />
            </Link>
          </div>
          <div className="waiter_profile_sidebar-item waiter_profile_sidebar-item4 active">
            <img
              width="40"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXAmtYV3HJHOI5xib00-Ukfh8G4Ji4P69KA&s"
              alt="User Profile Icon"
            />
          </div>
      </div>
       
    )
}
export default Sidebar;