import { Button, Flex, Heading } from "@chakra-ui/react"
import SearchBox
    from "./searchBox"
export default function Navbar({ onAddUser, onSearch }) {
    return (
        <Flex
            justifyContent={'space-between'}
            px={8}
            py={4}
            bg="white"
            align="center"
            borderBottom="1px solid"
            borderColor="gray.200"
            shadow={"sm"}
        >
            <Heading size="lg" color="blue.600">User Management</Heading>

            <SearchBox onSearch={onSearch} />

            <Button colorPalette={'blue'} onClick={onAddUser}
            >

                Add Users
            </Button>
        </Flex >
    )
}