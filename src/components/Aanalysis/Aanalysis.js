import './Aanalysis.scss';

const Aanalysis = (props) => {
    return (
        <div className="aanalysis" style={props.style} onClick={props.onClick}>
            <div className="this__container">
                <span>Aanalysis</span>
            </div>
        </div>
    );
};

export default Aanalysis;

// 展示答案解析的信息使用该组件
