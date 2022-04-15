/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { NewLink } from 'components/link';
import LogoSvg from 'components/icons/logo';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <NewLink path="/" sx={styles.logo} {...props}>
      <LogoSvg />
    </NewLink>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
