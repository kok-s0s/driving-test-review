import './Header.scss';
import Divider from '../Divider/Divider';

const Header = () => {
    return (
        <div className="header">
            <div id="avator">
                <img src="assets/s0s__block.jpg" alt="avator" />
            </div>
            <div className="author">kok-s0s</div>
            <Divider />
            <div className="author" id="zh">
                散文不倦
            </div>
            <div id="project__name">驾驶考试复习</div>
        </div>
    );
};

export default Header;
