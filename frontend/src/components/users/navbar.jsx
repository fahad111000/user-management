import { Button, Flex, Heading } from "@chakra-ui/react"

export default function Navbar() {
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

            <Button colorPalette={'blue'}>
                Add Users
            </Button>
        </Flex >
    )
}