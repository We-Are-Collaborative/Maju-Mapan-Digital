"use client"

import { useChat } from "@ai-sdk/react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useUserBehavior } from "@/hooks/use-user-behavior"

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const { getBehaviorContext } = useUserBehavior()

    const [input, setInput] = useState("")
    const [sessionId] = useState(() => Math.random().toString(36).substring(2, 11) + Date.now().toString(36))
    const { messages, sendMessage, status, error } = useChat()

    const isLoading = status === "submitted" || status === "streaming"

    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        // fetch fresh behavior context right before submitting
        const context = getBehaviorContext()

        sendMessage({
            role: "user",
            text: input,
        } as any, {
            body: {
                behaviorContext: context,
                sessionId
            }
        })
        setInput("")
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-[350px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-950"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between bg-primary p-4 text-primary-foreground">
                            <div>
                                <h3 className="font-semibold">Chat with Us</h3>
                                <p className="text-xs opacity-90">Online • Typically replies instantly</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-full p-1 hover:bg-white/20"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-[400px] overflow-y-auto p-4 flex flex-col gap-3">
                            {messages.length === 0 && (
                                <div className="text-center text-sm text-gray-500 mt-10">
                                    <p>Hi there! 👋</p>
                                    <p>How can I help you today?</p>
                                </div>
                            )}

                            {messages.map((m: any) => (
                                <div
                                    key={m.id}
                                    className={`flex w-max max-w-[85%] flex-col gap-1 rounded-2xl px-4 py-2 text-sm ${m.role === "user"
                                        ? "ml-auto bg-primary text-primary-foreground"
                                        : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                                        }`}
                                >
                                    {m.parts ? (
                                        m.parts.map((part: any, i: number) => (
                                            part.type === "text" && <span key={i}>{part.text}</span>
                                        ))
                                    ) : (
                                        m.content
                                    )}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex w-max max-w-[85%] flex-col gap-1 rounded-2xl px-4 py-2 text-sm bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                                    <span className="animate-pulse">Thinking...</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={onSubmit} className="border-t p-4 dark:border-gray-800">
                            <div className="flex gap-2">
                                <input
                                    className="flex-1 rounded-full border bg-transparent px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message..."
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 disabled:opacity-50"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
                <MessageCircle size={28} />
            </motion.button>
        </div>
    )
}
