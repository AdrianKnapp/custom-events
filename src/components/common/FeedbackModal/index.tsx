"use client";

import { Modal } from "@/components/toolkit/Modal";
import { useEventListener } from "@/hooks/useEventListener";
import { CustomEvents } from "@/types/customEvents/customEvents";
import { useState } from "react";

export const FeedbackModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<CustomEvents["feedback-modal"]["data"]>({
    feedback: "Default feedback",
  });

  useEventListener({
    eventName: "feedback-modal",
    handler: ({ detail: { action, data } }) => {
      setData(data);

      switch (action) {
        case "open":
          setIsOpen(true);
          break;
        case "close":
          setIsOpen(false);
          break;
        default:
          break;
      }
    },
  });

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h3>{data.feedback}</h3>
      <p>Modal</p>
    </Modal>
  );
};
