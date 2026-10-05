import { Input } from "@chakra-ui/react";
import { useState } from "react";

export default function SearchBox({ onSearch }) {

    const [search, setSearch] = useState("");
    const handeChange = (e) => {
        const value = e.target.value
        setSearch(value);
        onSearch(value)
    }
    return (
        <Input
            m={'5px'}
            maxW={'400px'}
            placeholder="Search users..."
            bg={"white"}
            color={'GrayText'}
            value={search}
            onChange={handeChange}
        />
    )
}