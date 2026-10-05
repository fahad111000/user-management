import { Box } from '@chakra-ui/react'
import Navbar from './components/users/navbar'
import UserCard from './components/users/userCard'
import UserModal from './components/users/modal'
import { useEffect, useState } from 'react'
export default function App() {

  // model open or closed!
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUsers(data);
    }

    getUsers();

  }, [])

  return (
    <Box bg={'gray.100'}
      minH={'100vh'} >

      <Navbar onAddUser={() => setIsModalOpen(true)} />

      <UserCard users={users} />
      <UserModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </Box>
  )
}