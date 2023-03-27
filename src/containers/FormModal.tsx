import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { EmailAuthenticationForm } from '../components/EmailAuthenticationForm';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => {};
};

const FormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
    </div>
  );
};

export default FormModal;
