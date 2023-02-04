/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Image } from 'theme-ui';
// import { NewLink } from 'components/link';
import { rgba } from 'polished';
import Link from 'next/link';

const Widget = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as="h4">{title}</Heading>
      <ul>
        {items.map(({ path, label, icon }, i) => (
          <li key={i} >
            {icon && <Image src={icon} alt={label} />}
            {/* <NewLink path={path} key={i} label={label} variant="footer" /> */}
            <Link key={i} href={path} >{label}</Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Widget;

const styles = {
  footerWidget: {
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
    ul: {
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,
      li: {
        display: 'flex',
        alignItems: 'center',
        img: {
          mr: '15px',
        },
      },
      a: {
        color: rgba('#02073E', 0.8),
        textDecoration: 'none',
        transition: '0.3s ease',
        '&:hover': {
          color: 'primary',
          transform: 'scale(1.03)',
        }
      },
    },
  },
};