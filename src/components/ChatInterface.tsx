"use client";

import { useChat } from "ai/react";
import { useRef, useEffect, useState } from "react";
import { Send, ArrowLeft, Shield, Sparkles } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

type ChatMode = "need-help" | "help-friend" | "want-to-help";

interface ModeConfig {
  label: string;
  initialMessage: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  userBubble: string;
  suggestions: string[];
}

const MODE_CONFIG: Record<ChatMode, ModeConfig> = {
  "need-help": {
    label: "I Need Help",
    initialMessage:
      "Hi — I'm glad you're here. It takes real courage to reach out, and I want you to know you're not alone.\n\nI'm here to help you figure out what kind of support makes the most sense for your situation. We can take this at whatever pace feels right.\n\nTo start — would you be willing to share a little about what's going on right now?",
    accentColor: "bg-brand-600",
    accentBg: "bg-brand-50",
    accentBorder: "border-brand-200",
    accentText: "text-brand-600",
    userBubble: "bg-brand-600 text-white",
    suggestions: [
      "I lost my home in the fires",
      "I need financial help",
      "I need food and supplies",
      "I'm struggling emotionally",
      "I just need to talk to someone",
    ],
  },
  "help-friend": {
    label: "My Friend Needs Help",
    initialMessage:
      "Hi — what you're doing right now matters. Showing up for someone else, especially when they might not be able to ask for themselves, is one of the most meaningful things you can do.\n\nI'm here to help you think through how to best support them — without burning yourself out in the process.\n\nCan you tell me a little about your friend and what they're going through?",
    accentColor: "bg-purple-600",
    accentBg: "bg-purple-50",
    accentBorder: "border-purple-200",
    accentText: "text-purple-600",
    userBubble: "bg-purple-600 text-white",
    suggestions: [
      "They lost their home in the fires",
      "They're isolated and struggling alone",
      "They have kids and no support",
      "They won't ask for help themselves",
      "I don't know where to start",
    ],
  },
  "want-to-help": {
    label: "I Want to Help",
    initialMessage:
      "That's a meaningful place to start. The fact that you're here — ready to give — is already something.\n\nI want to help you find the right match for your gifts, not just hand you a volunteer form. What you have to offer is specific to you, and there are people who need exactly that.\n\nLet's start here — what's moved you to want to help right now?",
    accentColor: "bg-emerald-600",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-200",
    accentText: "text-emerald-600",
    userBubble: "bg-emerald-600 text-white",
    suggestions: [
      "I have time to volunteer",
      "I have skills or professional expertise",
      "I want to give financially",
      "I have space in my home",
      "I want to help someone in my network",
    ],
  },
};

export default function ChatInterface({ mode }: { mode: ChatMode }) {
  const config = MODE_CONFIG[mode];
  const [suggestionsVisible, setSuggestionsVisible] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, append } =
    useChat({
      api: "/api/chat",
      body: { mode },
      initialMessages: [
        {
          id: "initial",
          role: "assistant",
          content: config.initialMessage,
        },
      ],
    });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSuggestion = (suggestion: string) => {
    setSuggestionsVisible(false);
    append({ role: "user", content: suggestion });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    setSuggestionsVisible(false);
    handleSubmit(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        setSuggestionsVisible(false);
        handleSubmit(e as unknown as React.FormEvent);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-warm-50">
      {/* Header */}
      <header className={clsx("border-b bg-white px-4 py-3 flex items-center gap-4 shadow-sm")}>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-warm-500 hover:text-warm-800 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          HLPR
        </Link>
        <div className="h-4 w-px bg-warm-200" />
        <span className={clsx("text-sm font-semibold", config.accentText)}>
          {config.label}
        </span>
        <div className="ml-auto flex items-center gap-1.5 text-warm-400 text-xs">
          <Shield className="w-3.5 h-3.5" />
          <span>Confidential</span>
        </div>
      </header>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-thin">
        {messages.map((message) => (
          <div
            key={message.id}
            className={clsx(
              "flex",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            {message.role === "assistant" && (
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5", config.accentColor)}>
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            )}
            <div
              className={clsx(
                "max-w-[75%] md:max-w-[65%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
                message.role === "user"
                  ? clsx(config.userBubble, "rounded-br-md")
                  : "bg-white text-warm-800 border border-warm-100 rounded-bl-md"
              )}
            >
              <div className="chat-content whitespace-pre-wrap">{message.content}</div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3", config.accentColor)}>
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white border border-warm-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
              <span className="flex gap-1 items-center h-5">
                <span className={clsx("w-2 h-2 rounded-full animate-bounce", config.accentColor)} style={{ animationDelay: "0ms" }} />
                <span className={clsx("w-2 h-2 rounded-full animate-bounce", config.accentColor)} style={{ animationDelay: "150ms" }} />
                <span className={clsx("w-2 h-2 rounded-full animate-bounce", config.accentColor)} style={{ animationDelay: "300ms" }} />
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick suggestions */}
      {suggestionsVisible && messages.length === 1 && (
        <div className="px-4 pb-3">
          <p className="text-xs text-warm-400 mb-2 font-medium">Quick starts</p>
          <div className="flex flex-wrap gap-2">
            {config.suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSuggestion(s)}
                className={clsx(
                  "text-xs px-3 py-1.5 rounded-full border font-medium transition-all hover:shadow-sm",
                  config.accentBg,
                  config.accentBorder,
                  config.accentText,
                  "hover:brightness-95"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input bar */}
      <div className="border-t bg-white px-4 py-3 shadow-lg">
        <form onSubmit={handleFormSubmit} className="flex gap-3 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your message… (Enter to send, Shift+Enter for new line)"
            rows={1}
            className="flex-1 resize-none rounded-xl border border-warm-200 px-4 py-3 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition-all max-h-32 overflow-y-auto scrollbar-thin"
            style={{ minHeight: "48px" }}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={clsx(
              "flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all",
              config.accentColor,
              "text-white",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              "hover:brightness-110 active:scale-95"
            )}
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
        <p className="text-[11px] text-warm-400 mt-2 text-center">
          Conversations are private and treated with care.
        </p>
      </div>
    </div>
  );
}
