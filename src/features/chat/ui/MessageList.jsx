import MessageItem from "./MessageItem";

export default function MessageList({ messages, loading }) {
    return (
        <div>
            {messages.map((msg, i) => (
                <MessageItem key={i} message={msg} />
            ))}
            {loading && <p>Thinking...</p>}
        </div>
    );
}
