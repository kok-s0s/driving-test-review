import './Button.scss';

const Button = (props) => {
    return (
        <button
            className="button-link"
            style={props.style}
            onClick={props.onClick}>
            {props.name}
        </button>
    );
};

export default Button;
