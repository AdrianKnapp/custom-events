"use client";

import { Button } from "@/components/toolkit/Button";
import { handleOpenFeedbackModal } from "@/utils/customEvents/@handlers/feedbackModal/handleOpenFeedbackModal";

export const OpenModalButton = () => {
  const handleOnClick = () => {
    handleOpenFeedbackModal({
      feedback: "This is a feedback message",
    });
  };

  return <Button onClick={handleOnClick}>Open Modal</Button>;
};
