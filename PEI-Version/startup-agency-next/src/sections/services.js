/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';

import Data from '../data/data.json';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Gamified Career Path',
    description: `Find the right trail for you, get experience, take the challenge, and get hired.`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Work on your skills',
    description: `Get the right skills for the job, make some projects and get proven experience directly to your own Portfolio and Curriculum!`,
  },
  {
    id: 4,
    icon: icon3,
    title: "Show'em what you've got!",
    description: `Take tests and challenges to show off your skills and GET HIRED!`,
  },
];

const Services = () => {
  // console.log(Data.homepage.Services)
  const { title, description } = Data.homepage.Services;
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title={title}
          description={description}
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
