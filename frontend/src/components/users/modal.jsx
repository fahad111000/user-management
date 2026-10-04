import { Button, Dialog, Field, Input, Portal, Stack } from "@chakra-ui/react";

export default function UserModal({ open, onClose }) {
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
                                    <Input placeholder="First Name" />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>Email</Field.Label>
                                    <Input type="email" placeholder="Email" />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>Age</Field.Label>
                                    <Input />
                                </Field.Root>
                            </Stack>

                        </Dialog.Body>

                        {/* Modal footer */}
                        <Dialog.Footer>
                            <Dialog.ActionTrigger>
                                <Button variant={'outline'} onClick={onClose}>Cancel</Button>
                            </Dialog.ActionTrigger>

                            <Button>Save</Button>
                        </Dialog.Footer>

                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}