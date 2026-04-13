import { Mail, MessageSquareText } from "lucide-react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Field,
  FieldGroup,
  Label,
  Input,
  Textarea,
} from "../../ui";

interface Contact {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const contacts: Contact[] = [
  {
    href: "#",
    label: "Email",
    icon: <Mail />,
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg
        className="h-5 w-5 text-slate-600 dark:text-slate-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
      </svg>
    ),
  },
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg
        className="h-5 w-5 text-slate-600 dark:text-slate-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
      </svg>
    ),
  },
  {
    href: "#",
    label: "Zalo",
    icon: <MessageSquareText />,
  },
];

export function QuickContact() {
  const renderContactItem = (contact: Contact) => (
    <a
      className="border hover:border-primary group flex flex-col items-center gap-2 rounded-xl bg-surface p-3 text-center ring-1 ring-inset ring-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:ring-slate-700/50"
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex h-10 w-10 items-center justify-center duration-200 rounded-full bg-background group-hover:bg-primary">
        {contact.icon}
      </div>
      <p className="text-sm font-medium text-slate-800 dark:text-white">
        {contact.label}
      </p>
    </a>
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="shadow-lg">Contact</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Quick Contact</DialogTitle>
          <DialogDescription className="text-center">
            Choose one of the methods below or send me a message directly.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {contacts.map((contact) => renderContactItem(contact))}
        </div>
        <div className="flex items-center gap-4">
          <hr className="flex-1 border-slate-200 dark:border-slate-700" />
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            or
          </p>
          <hr className="flex-1 border-slate-200 dark:border-slate-700" />
        </div>

        <div className="flex flex-col gap-4 mb-2">
          <FieldGroup>
            <Field>
              <Label>Your name</Label>
              <Input placeholder="Enter your name" />
            </Field>
            <Field>
              <Label>Your email</Label>
              <Input type="email" placeholder="Enter your email" />
            </Field>
            <Field>
              <Label>Your message</Label>
              <Textarea placeholder="Your message" />
            </Field>
          </FieldGroup>
        </div>
        <DialogFooter>
          <Button className="w-full">Send message</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
