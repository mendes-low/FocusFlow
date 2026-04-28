import "./Input.scss";

function Input({
    placeholder = "Enter something...",
    className = "",
    type = "text",
    id,
    name,
    ...props
}) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            className={`input ${className}`}
            placeholder={placeholder}
            {...props}
        />
    );
}

export default Input;
