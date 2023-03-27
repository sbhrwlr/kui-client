/* eslint-disable */
import React, { useEffect, useState } from 'react';
import {  Divider, Input, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getAllClusters } from '../api/ClusterService';
import '../assets/styles/ClusterContentContainer.scss';
import { useAuth } from '../contexts/Auth';
import { Cluster, ClusterResponse } from '../interfaces/Cluster';
import { AddClusterForm } from '../components/AddClusterForm';
import { Box, Button, FormControl, FormLabel, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { ClusterOutlined } from '@ant-design/icons';


const printText = (text: string) => {
  console.log(text);
};

export const columns: ColumnsType<Cluster> = [
  {
    title: 'Name',
    dataIndex: 'clusterAlias',
    key: 'clusterAlias',
    render: (text) => <div onClick={() => printText(text)}>{text}</div>,
  },
  {
    title: 'Brokers Count',
    dataIndex: 'brokers',
    key: 'brokers',
    render: (brokers) => <div onClick={() => printText(brokers)}>{brokers.length}</div>,
  },
  {
    title: 'Topics Count',
    dataIndex: 'topics',
    key: 'topics',
    render: (topics) => <div onClick={() => printText(topics)}>{topics.length}</div>,
  },
  {
    title: 'Health',
    dataIndex: 'topics',
    key: 'topics',
    render: (healthy) => 
      healthy ? <Tag color={'green'}>OK</Tag>:<Tag color={'red'}>DOWN</Tag>,
  }
];



const ClusterContentContainer = () => {
  const { user } = useAuth();
  const [clusters, setClusters] = useState<Cluster[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [brokers, setBrokers] = useState("");


  useEffect(() => {
    getAllClusters(user.id).then((res ) => {
      for(let i=0; i<res.length; i++){
        res[i].key = i.toString();
      }
      setClusters(res)
    });
  }, []);

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const brokersArray = brokers.split(",").map((broker) => broker.trim());
    // onSubmit(brokersArray);
  };


  return (
    <div className="clusters_content">
      <div className='clusters_content_heading'>
        <h1 ><ClusterOutlined/>Clusters</h1>
        <Button colorScheme="teal"  onClick={onOpen}>Add Cluster</Button>
      </div>
      <Divider className='divider'/>
      <Table columns={columns} dataSource={clusters}/>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg="gray.800"
          color="white"
          borderRadius="md"
          boxShadow="lg"
          width={{ base: "90%", md: "auto" }}
        >
          <ModalHeader textAlign="center" fontSize="2xl">
            Enter Brokers List
          </ModalHeader>
          <ModalBody>
            <Box mb="4">
              <FormControl id="brokers">
                <FormLabel>Brokers List</FormLabel>
                <Input
                  type="text"
                  // bg="gray.700"
                  // borderColor="gray.600"
                  value={brokers}
                  onChange={(event) => setBrokers(event.target.value)}
                />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              colorScheme="teal"
              mr={3}
              onClick={onClose}
              variant="ghost"
            >
              Close
            </Button>
            <Button colorScheme="teal" type="submit">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ClusterContentContainer;
