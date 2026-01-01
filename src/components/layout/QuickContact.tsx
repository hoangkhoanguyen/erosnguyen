import { Button } from "../ui";
import Link from "next/link";

export function QuickContact() {
  return (
    <Button className="shadow-lg">
      <Link href="#contact">Liên hệ nhanh</Link>
    </Button>
  );
}
