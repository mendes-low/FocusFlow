import { useState } from "react";

import Chat from "@/features/chat/ui/Chat";
import ChatModal from "@/features/chat/ui/ChatModal";

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Chat />
            <button onClick={() => setIsOpen(true)}>Open Chat Modal</button>

            <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}

export default Home;
