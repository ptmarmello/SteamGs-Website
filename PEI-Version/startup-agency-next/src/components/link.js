/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import NextLink from 'next/link';
import { jsx, Link as A } from 'theme-ui';
import { Link as MenuLink } from 'react-scroll';
// import Link from 'next/link';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { useRouter } from 'next/router';

export function NavLink({ path, label, onPage, children, ...rest }) {

  const router = useRouter();

  return (
    <>
      {
        (onPage==1 && router.pathname === '/') && 
        <MenuLink
          to={path}
          spy={true}
          offset={-70}
          smooth={true}
          duration={500}
          className="nav-item"
          activeClass="active"
          {...rest}
        >
          {label}
        </MenuLink>
      }

      {
        (onPage==0 || router.pathname !== '/') &&
        <NextLink href={path}
        
        >
          {label}
        </NextLink>
      }
    
    </>
  );
}

export function NewLink({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}

export function LearnMore({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A sx={styles.learnMore} {...rest}>
        {label ?? 'Learn More'} <HiOutlineChevronRight />
      </A>
    </NextLink>
  );
}

const styles = {
  learnMore: {
    color: 'link',
    cursor: 'pointer',
    fontSize: [1, 1, 1, 2],
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
      ml: '3px',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
