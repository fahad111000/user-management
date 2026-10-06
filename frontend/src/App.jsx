import { Box } from '@chakra-ui/react'
import Navbar from './components/users/navbar'
import UserCard from './components/users/userCard'
import UserModal from './components/users/modal'
import { useEffect, useState } from 'react'
export default function App() {

  // model open or closed!
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Users Data (array)
  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);



  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUsers(data);
    }

    getUsers();

  }, [])

  // Delete 
  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });

    setUsers((prev) => {
      return prev.filter((user) => user.id !== id)
    });
  }


  // Edit
  const onEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true)

  }


  // Search
  const onSearch = async (value) => {
    const response = await fetch(`http://localhost:5000/users?search=${value}`);
    const data = await response.json();

    setUsers(data)
  }

  return (
    <Box bg={'gray.100'}
      minH={'100vh'} >

      <Navbar onSearch={onSearch} onAddUser={() => setIsModalOpen(true)} />

      <UserCard users={users} onDelete={onDelete} onEdit={onEdit} />
      <UserModal open={isModalOpen} setUsers={setUsers} selectedUser={selectedUser} onClose={() => {
        setIsModalOpen(false);
        setSelectedUser(null);
      }} />

    </Box>
  )
}