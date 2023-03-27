import React, { HTMLAttributes, useState } from 'react';
import { BiAt, BiServer } from "react-icons/bi";
import { FormControl, FormLabel, Input } from '@chakra-ui/react';


interface AddClusterProps extends HTMLAttributes<HTMLElement> {
  closeModal: () => void;
}

export const AddClusterForm = (props: AddClusterProps) => {
  const { closeModal } = props;
  const [brokers, setBrokers] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const brokersArray = brokers.split(",").map((broker) => broker.trim());
    // onSubmit(brokersArray);
  };
  const onFinish = (values: object) => {
    closeModal();
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <FormControl id="brokers">
              <FormLabel>Brokers List</FormLabel>
              <Input
                type="text"
                value={brokers}
                onChange={(event) => setBrokers(event.target.value)}
              />
    </FormControl>
  );
};
