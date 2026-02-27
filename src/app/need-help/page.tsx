import ChatInterface from "@/components/ChatInterface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Need Help — HLPR",
  description:
    "Get connected with people and resources who can support you right now.",
};

export default function NeedHelpPage() {
  return <ChatInterface mode="need-help" />;
}
