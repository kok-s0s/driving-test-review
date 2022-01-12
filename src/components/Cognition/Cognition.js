import './Cognition.scss';

const Cognition = (props) => {
    return (
        <div className="cognition" style={props.style} onClick={props.onClick}>
            <div className="this__container">
                <span>Cognition</span>
            </div>
        </div>
    );
};

export default Cognition;

// 基本认知的信息使用该组件
