import Modal  from "@/shared/ui/Modal/Modal";

function ChatModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Create Team">
            <h2>Create Team</h2>

            <p>Start a new chat or invite users.</p>

            <div>
                <button onClick={onClose}>Cancel</button>

                <button>Create</button>
            </div>
        </Modal>
    );
}

export default ChatModal;
