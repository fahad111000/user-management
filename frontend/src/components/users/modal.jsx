import { Button, Dialog, Field, Input, Portal, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function UserModal({ open, onClose, setUsers, selectedUser, }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        if (selectedUser) {
            setName(selectedUser.name);
            setEmail(selectedUser.email);
            setAge(selectedUser.age);
        }

        else {
            setName("");
            setEmail("");
            setAge("");
        }
    }, [selectedUser])

    // POST / PATCH
    const handelSave = async () => {
        const newUser = {
            name,
            email,
            age: Number(age),
        }


        // PATCH
        if (selectedUser) {
            const response = await fetch(
                `http://localhost:5000/users/${selectedUser.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                }
            );

            const updatedUser = await response.json();

            setUsers((prev) => {
                return prev.map((user) => {
                    return user.id === updatedUser.id ? updatedUser : user
                })
            })
            onClose();
        }

        // POST
        else {

            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })

            const data = await response.json();
            setUsers((prevUsers) => [...prevUsers, data])


            onClose();
            setName("");
            setEmail("");
            setAge("");
        }
    }

    return (
        <Dialog.Root open={open} onOpenChange={(e) => {
            if (!e.open) {
                onClose();
            }
        }}>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Add The User</Dialog.Title>
                        </Dialog.Header>

                        <Dialog.Body>

                            <Stack gap={'4'}>

                                <Field.Root>
                                    <Field.Label>Name</Field.Label>
                                    <Input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Name" />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>Email</Field.Label>
                                    <Input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" placeholder="Email" />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>Age</Field.Label>
                                    <Input
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)} />
                                </Field.Root>
                            </Stack>

                        </Dialog.Body>

                        {/* Modal footer */}
                        <Dialog.Footer>
                            <Dialog.ActionTrigger>
                                <Button variant={'outline'} onClick={onClose}>Cancel</Button>
                            </Dialog.ActionTrigger>

                            <Button onClick={handelSave}>Save</Button>
                        </Dialog.Footer>

                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}