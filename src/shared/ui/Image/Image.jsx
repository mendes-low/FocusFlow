import "./Image.scss";

function Image({ src, alt, className = "", ...props }) {
    return (
        <div className={`image ${className}`}>
            <img src={src} alt={alt} {...props} loading="lazy" />
        </div>
    );
}

export default Image;
