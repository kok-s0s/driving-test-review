import './NoMatch.scss';

const NoMatch = () => {
    return (
        <div className="no__match">
            <span>抱歉没有你想要找到的内容～</span>
            <img src="assets/pity.png" alt="pity" />
        </div>
    );
};

export default NoMatch;
