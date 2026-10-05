import { Button, Card, Flex, Span, Stack, Text } from "@chakra-ui/react";

export default function UserCard({ users, onDelete, onEdit }) {


    return (


        <Flex
            minH={'250px'}
            justify={'center'}
            gap={14}
            alignItems={'center'}
            bg={'white'}
            borderRadius={'md'}
            p={'16px'}
            mx={'auto'} my={'50px'}
            maxW={'1200px'}
            shadow={'sm'}
            wrap={'wrap'}
        >

            {/* Card */}
            {users?.map((user) =>
                <Card.Root maxW={'320px'} mx={'10px'} shadow={'sm'} key={user.id}>
                    <Card.Body>
                        <Text fontWeight={'bold'}>
                            Name :
                            <Text as={Span} fontWeight={'normal'}>
                                {" "}{user.name}
                            </Text>

                        </Text>

                        <Text fontWeight={'bold'}>
                            Email :
                            <Text as={Span} fontWeight={'normal'}>
                                {" "}{user.email}
                            </Text>

                        </Text>

                        <Text fontWeight={'bold'}>
                            Age :
                            <Text as={Span} fontWeight={'normal'}>
                                {" "}{user.age}
                            </Text>

                        </Text>
                        {/* <Text as={Span} fontWeight={'bold'}>Email : </Text> */}
                    </Card.Body>

                    <Card.Footer justifyContent={'flex-end'}>
                        <Button onClick={() => onEdit(user)} >Edit</Button>
                        <Button onClick={() => onDelete(user.id)} colorPalette="red" variant="outline">Delete</Button>
                    </Card.Footer>
                </Card.Root>
            )}
        </Flex>
    )
}