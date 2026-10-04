import { Input, InputGroup } from "@chakra-ui/react";

export default function SearchBox() {
    return (
        <Input
            m={'5px'}
            maxW={'400px'}
            placeholder="Search users..."
            bg={"white"}
            color={'GrayText'}
        />
    )
}