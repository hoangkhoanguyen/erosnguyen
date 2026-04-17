"use client";

import { Button } from "../ui";
import { useContactDialog } from "../shared/contact/ContactDialogProvider";

const GetInTouchButton = () => {
  const { open } = useContactDialog();
  return (
    <Button size={"xl"} onClick={open}>
      Get in Touch
    </Button>
  );
};

export default GetInTouchButton;
