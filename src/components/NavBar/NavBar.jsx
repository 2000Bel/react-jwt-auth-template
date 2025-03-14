import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router';

const NavBar = () => {

  const { user } = useContext(UserContext);

  return (
    <nav>
      <li><Link to='/sign-up'>Sign Up</Link></li>
    </nav>
  );
};

export default NavBar;