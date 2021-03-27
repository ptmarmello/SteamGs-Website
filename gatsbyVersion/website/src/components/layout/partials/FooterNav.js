import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Empresas</Link>
        </li>
        <li>
          <Link to="#0">Universidades</Link>
        </li>
        <li>
          <Link to="#0">Sobre Nós</Link>
        </li>
        {/* <li>
          <Link to="#0"></Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default FooterNav;