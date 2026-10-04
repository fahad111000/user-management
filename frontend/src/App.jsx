import { Box } from '@chakra-ui/react'
import Navbar from './components/users/navbar'
import UserCard from './components/users/userCard'
import UserModal from './components/users/modal'
import { useState } from 'react'
export default function App() {

  // model open or closed!
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <Box bg={'gray.100'}
      minH={'100vh'} >

      <Navbar onAddUser={() => setIsModalOpen(true)} />

      <UserCard />
      <UserModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </Box>
  )
}