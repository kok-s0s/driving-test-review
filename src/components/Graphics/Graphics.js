import './Graphics.scss';

const Graphics = (props) => {
    return (
        <div className="graphics" style={props.style} onClick={props.onClick}>
            <div className="this__container">
                <span>Graphics</span>
            </div>
        </div>
    );
};

export default Graphics;

// 包含图片的信息使用该组件
