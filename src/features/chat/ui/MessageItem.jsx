export default function MessageItem({ message }) {
    return (
        <div>
            <b>{message.role}:</b> {message.content}
        </div>
    );
}
