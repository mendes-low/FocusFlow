import { useState } from "react";

export default function ChatInput({ onSend }) {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        onSend(input);
        setInput("");
    };

    return (
        <>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleSend}>Send</button>
        </>
    );
}
