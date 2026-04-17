"use client";

import { Button } from "../../ui";
import { useContactDialog } from "./ContactDialogProvider";

export function QuickContact() {
  const { open } = useContactDialog();

  return (
    <Button className="shadow-lg" onClick={open}>
      Contact
    </Button>
  );
}
