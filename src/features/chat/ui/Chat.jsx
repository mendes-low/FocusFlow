import { useChat } from "../model/useChat";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function Chat() {
    const { messages, loading, sendMessage } = useChat();

    return (
        <div>
            <h2>Local AI Chat</h2>

            <MessageList messages={messages} loading={loading} />

            <ChatInput onSend={sendMessage} />
        </div>
    );
}