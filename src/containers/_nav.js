import CIcon from '@coreui/icons-react';
import { cilSpeedometer, cilPuzzle } from '@coreui/icons';
import { CNavItem } from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'New Component',
    to: '/newComponent',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Test Component',
    to: '/testComponent',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Form Component',
    to: '/form',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
];

export default _nav;
