// src/components/Dashboard/Dashboard.jsx

import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService.js';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [userList, setUserList] = useState([]);

  // first arg: function, call function
  // second arg:
    useEffect(() => {
        // function
        const fetchUsers = async() => {
            try {
                const fetchedUsers = await userService.index();
                console.log(fetchedUsers);
                setUserList(fetchedUsers);
                
            } catch (err) {
                console.log(err);
            }
        }
        // calling the function
        if (user) fetchUsers();
        // dependency..?
    }, [user]);

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
        <ul>
            {userList.map((user) => (
                <li key={user._id}>
                    {user.username}
                </li>
            ))}
        </ul>
    </main>
  );
};

export default Dashboard;

