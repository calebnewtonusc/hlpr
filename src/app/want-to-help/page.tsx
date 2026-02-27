import ChatInterface from "@/components/ChatInterface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Want to Help — HLPR",
  description:
    "Offer your time, skills, and resources. We'll help you find the right fit for your gifts.",
};

export default function WantToHelpPage() {
  return <ChatInterface mode="want-to-help" />;
}
