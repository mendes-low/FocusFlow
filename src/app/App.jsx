import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";

function App() {
    return (
        <>
            <h1>App</h1>
            <Button className="button_notification">Click</Button>
            <Button className="button_focus">Click</Button>

            <Input />
            <Input className="input_search" placeholder='Enter here' />
        </>
    );
}

export default App;
