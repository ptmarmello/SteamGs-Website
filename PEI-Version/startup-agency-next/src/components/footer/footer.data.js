import facebook from 'assets/images/icons/facebook.png';
import twitter from 'assets/images/icons/twitter.png';
import github from 'assets/images/icons/github.png';
import dribbble from 'assets/images/icons/dribbble.png';

export const menuItems = [
  {
    id: 2,
    title: 'About Us',
    items: [
      {
        path: 'forStudents',
        label: 'For Students',
      },
      {
        path: 'forCompanies',
        label: 'For Companies',
      },
      {
        path: 'forUniversities',
        label: 'For Universities',
      },
      {
        path: 'aboutus',
        label: 'Who we are',
      }
    ],
  },
  {
    id: 3,
    title: 'Our Information',
    items: [
      {
        path: '#!',
        label: 'Privacy Policy',
      },
      {
        path: '#!',
        label: 'Terms & Conditions',
      }
    ],
  },
  {
    id: 4,
    title: 'Help',
    items: [
      {
        path: '#!',
        label: 'Press inquiries',
      },
      {
        path: '#!',
        label: 'Social media ',
      },
      {
        path: '#!',
        label: 'Support',
      }
    ],
  },
  {
    id: 5,
    title: 'Connect',
    items: [
      {
        path: '#!',
        icon: facebook,
        label: 'Facebook',
      },
      {
        path: '#!',
        icon: twitter,
        label: 'Twitter',
      },
      {
        path: '#!',
        icon: github,
        label: 'Github',
      },
      {
        path: '#!',
        icon: dribbble,
        label: 'Dribbble',
      },
    ],
  },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Home',
  },
  {
    path: '#!',
    label: 'Advertise',
  },
  {
    path: '#!',
    label: 'Supports',
  },
  {
    path: '#!',
    label: 'Marketing',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];
