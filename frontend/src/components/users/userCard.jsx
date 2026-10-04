import { Button, Card, Flex } from "@chakra-ui/react";

export default function UserCard() {
    return (

        <Flex
            minH={'250px'}
            justify={'space-between'}
            alignItems={'center'}
            bg={'white'}
            borderRadius={'md'}
            p={'16px'}
            mx={'auto'} my={'50px'}
            maxW={'1200px'}
            shadow={'sm'}
        >

            {/* Card */}
            <Card.Root width={'320px'} mx={'10px'} shadow={'sm'}>
                <Card.Body>
                    <Card.Title>
                        Fahad
                    </Card.Title>
                    <Card.Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Card.Description>
                </Card.Body>

                <Card.Footer justifyContent={'flex-end'}>
                    <Button     >Edit</Button>
                    <Button colorPalette="red" variant="outline">Delete</Button>
                </Card.Footer>
            </Card.Root>


            {/* Card */}
            <Card.Root width={'320px'} mx={'10px'} shadow={'sm'}>
                <Card.Body>
                    <Card.Title>
                        Fahad
                    </Card.Title>
                    <Card.Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Card.Description>
                </Card.Body>

                <Card.Footer justifyContent={'flex-end'}>
                    <Button     >Edit</Button>
                    <Button colorPalette="red" variant="outline">Delete</Button>
                </Card.Footer>
            </Card.Root>



            {/* Card */}
            <Card.Root width={'320px'} mx={'10px'} shadow={'sm'}>
                <Card.Body>
                    <Card.Title>
                        Fahad
                    </Card.Title>
                    <Card.Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Card.Description>
                </Card.Body>

                <Card.Footer justifyContent={'flex-end'}>
                    <Button     >Edit</Button>
                    <Button colorPalette="red" variant="outline">Delete</Button>
                </Card.Footer>
            </Card.Root>

        </Flex>



    )
}