"use client";

import { useState } from "react";

import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import Form from "./Form";

const TalkToSales = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Button variant="secondaryFill" onClick={handleOpenModal}>
        Talk to Sales
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Form onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default TalkToSales;
