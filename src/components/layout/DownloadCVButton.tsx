"use client";
import { Button } from "../ui";
import { Download } from "lucide-react";

const DownloadCVButton = () => {
  return (
    <Button size={"xl"} variant="outline">
      Download CV
      <Download className="size-4" aria-hidden />
    </Button>
  );
};

export default DownloadCVButton;
