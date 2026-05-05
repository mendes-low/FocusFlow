import { useState } from "react";
import { generateMessage } from "../api/chatApi";
import { createMessage } from "@/entities/message/model/messageModel";

export function useChat() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async (text) => {
        const userMessage = createMessage("user", text);

        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);

        try {
            const response = await generateMessage(text);

            const botMessage = {
                role: "assistant",
                content: response,
            };

            setMessages((prev) => [...prev, botMessage]);
        } finally {
            setLoading(false);
        }
    };

    return { messages, loading, sendMessage };
}