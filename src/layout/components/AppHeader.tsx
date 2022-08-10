import React from 'react';
import '../layout.scss';
import { Nav, NavItem, NavLink } from 'reactstrap';

const AppHeader = () => {
  return (
    <header className="section coral">
      <div>
        <Nav>
          <NavLink href="\newcomponent">NewComponent</NavLink>
          <NavLink href="\testcomponent">TestComponent</NavLink>
        </Nav>
      </div>
    </header>
  );
};

export default React.memo(AppHeader);
