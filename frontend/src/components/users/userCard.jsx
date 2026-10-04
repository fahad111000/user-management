import { Button, Card, Flex, Span, Stack, Text } from "@chakra-ui/react";

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
                        <Text>
                            <Text as={Span} fontWeight={'bold'}>Email : </Text>
                            fahad123@gmail.com
                        </Text>
                        <Text>
                            <Text as={Span} fontWeight={'bold'}>Age : </Text>
                            30
                        </Text>
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