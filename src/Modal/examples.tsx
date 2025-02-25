/* eslint-disable max-lines */
import { storiesOf } from '@storybook/react';
import React, { useRef, useState } from 'react';
import Lorem from 'react-lorem-component';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '.';
import { Box } from '../Box';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { FormControl } from '../FormControl';
import { FormLabel } from '../FormLabel';
import { useDisclosure } from '../hooks/useDisclosure';
import { Input } from '../Input';

const stories = storiesOf('Modal', module);
stories.addDecorator((story) => (
    <Box maxWidth="lg" mx="auto" mt={6} p={6}>
        {story()}
    </Box>
));

stories.add('Default', () => {
    const SampleModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        const close = () => setIsOpen(false);
        const firstField = useRef();
        return (
            <>
                <Modal initialFocusRef={firstField} isOpen={isOpen} onClose={close}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create your account</ModalHeader>

                        <ModalCloseButton onClick={close} position="absolute" top="8px" right="12px" />

                        <ModalBody pb={6}>
                            <FormControl mb="spacing">
                                <FormLabel>First name</FormLabel>
                                <Input ref={firstField} placeholder="Type here..." />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <ButtonGroup>
                                <Button variant="tertiary" onClick={close}>
                                    Cancel
                                </Button>
                                <Button onClick={close}>Save</Button>
                            </ButtonGroup>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            </>
        );
    };

    return <SampleModal />;
});

stories.add('with preserve scrollbar', () => {
    const SampleModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        const btnRef = useRef();
        return (
            <>
                <Button ref={btnRef} onClick={() => setIsOpen(true)}>
                    Trigger modal
                </Button>
                <Lorem count={5} />
                <Modal isOpen onClose={() => setIsOpen(false)} finalFocusRef={btnRef} preserveScrollBarGap>
                    <ModalOverlay />
                    <ModalContent pb={5}>
                        <ModalHeader>Login now</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Lorem count={2} />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        );
    };

    return <SampleModal />;
});

stories.add('with scale transition', () => {
    const SampleModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        const btnRef = useRef();
        return (
            <>
                <Button ref={btnRef} onClick={() => setIsOpen(true)}>
                    Trigger modal
                </Button>
                <Modal isOpen onClose={() => setIsOpen(false)} finalFocusRef={btnRef} motionPreset="scale">
                    <ModalOverlay />
                    <ModalContent pb={5}>
                        <ModalHeader>Login now</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Lorem count={2} />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        );
    };

    return <SampleModal />;
});

stories.add('Basic usage', () => {
    const SampleModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Trigger modal</Button>

                <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent pb={5}>
                        <ModalHeader>Login now</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Lorem count={2} />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        );
    };

    return <SampleModal />;
});

stories.add('Scroll inside', () => {
    const SampleModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        const btnRef = useRef();
        return (
            <>
                <Button ref={btnRef} onClick={() => setIsOpen(true)}>
                    Trigger modal
                </Button>

                <Modal
                    onClose={() => setIsOpen(false)}
                    finalFocusRef={btnRef}
                    isOpen={isOpen}
                    blockScrollOnMount
                    isCentered
                    scrollBehavior="inside"
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Lorem size={5} />
                        </ModalBody>
                        <ModalFooter>
                            <Button>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    };

    return <SampleModal />;
});
stories.add('Scroll outside', () => {
    const SampleModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        const btnRef = useRef();
        return (
            <>
                <Button ref={btnRef} onClick={() => setIsOpen(true)}>
                    Trigger modal
                </Button>

                <Modal
                    onClose={() => setIsOpen(false)}
                    finalFocusRef={btnRef}
                    isOpen={isOpen}
                    blockScrollOnMount
                    scrollBehavior="outside"
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Lorem size={5} />
                        </ModalBody>
                        <ModalFooter>
                            <Button>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    };

    return <SampleModal />;
});

stories.add('no close on overlay click', () => {
    function ManualClose() {
        const [isOpen, setIsOpen] = React.useState(false);
        const close = () => setIsOpen(false);
        const open = () => setIsOpen(true);

        return (
            <>
                <Button onClick={open}>Open Modal</Button>

                <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={close}>
                    <ModalOverlay zIndex={7} />
                    <ModalContent zIndex={8}>
                        <ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Lorem count={2} />
                        </ModalBody>

                        <ModalFooter>
                            <ButtonGroup>
                                <Button>Save</Button>
                                <Button onClick={close}>Cancel</Button>
                            </ButtonGroup>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    }

    return <ManualClose />;
});

stories.add('initial and final focus ref', () => {
    function InitialFocus() {
        const [isOpen, setIsOpen] = React.useState(false);
        const close = () => setIsOpen(false);
        const open = () => setIsOpen(true);
        const initialRef = React.useRef();
        const finalRef = React.useRef();

        return (
            <>
                <Button onClick={open}>Open Modal</Button>
                <Button ml="spacing" ref={finalRef}>
                    I'll receive focus on close
                </Button>

                <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={close}>
                    <ModalOverlay zIndex={7} />
                    <ModalContent zIndex={8}>
                        <ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>First name</FormLabel>
                                <Input ref={initialRef} placeholder="First name" />
                            </FormControl>

                            <FormControl mt="spacing">
                                <FormLabel>Last name</FormLabel>
                                <Input placeholder="Last name" />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <ButtonGroup>
                                <Button>Save</Button>
                                <Button onClick={close}>Cancel</Button>
                            </ButtonGroup>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    }

    return <InitialFocus />;
});

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Test</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel htmlFor="firstName">First Name</FormLabel>
                            <Input
                                name="firstName"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <Input
                                name="lastName"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

stories.add('bug', () => <App />);
