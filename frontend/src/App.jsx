import { Box } from '@chakra-ui/react'
import Navbar from './components/users/navbar'
import UserCard from './components/users/userCard'
import UserModal from './components/users/modal'
export default function App() {
  return (
    <Box bg={'gray.100'}
      minH={'100vh'} >

      <Navbar />
      <UserModal />
      <UserCard />

    </Box>
  )
}