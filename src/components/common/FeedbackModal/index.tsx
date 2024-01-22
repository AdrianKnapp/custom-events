"use client";
import { Modal } from "@/components/toolkit/Modal";
import { useState } from "react";

export const FeedbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <p>Modal</p>
    </Modal>
  );
};
