import ChatInterface from "@/components/ChatInterface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Friend Needs Help — HLPR",
  description:
    "Advocate for someone who needs support but can't ask for themselves.",
};

export default function HelpFriendPage() {
  return <ChatInterface mode="help-friend" />;
}
