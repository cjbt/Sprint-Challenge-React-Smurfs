import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/smurf-add'>ADD SMURF</NavLink>
    </nav>
  );
};

export default Nav;
