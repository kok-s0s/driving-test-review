import { useLocalStorage } from '../../utils/useLocalStorage';
import { Select, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './UploadPoint.scss';

const { Option } = Select;
const { TextArea } = Input;

const UploadPoint = () => {
    const [isGraphics, setIsGraphics] = useLocalStorage('isGraphics', false);
    const [qType, setQType] = useLocalStorage('qType', 'CognitionQ');
    const [qDes, setQDes] = useLocalStorage('qDes', '');
    const [aOption, setAOption] = useLocalStorage('aOption', '');
    const [bOption, setBOption] = useLocalStorage('bOption', '');
    const [cOption, setCOption] = useLocalStorage('cOption', '');
    const [dOption, setDOption] = useLocalStorage('dOption', '');

    const handleChange = (value) => {
        setQType(value);
        setIsGraphics(value === 'GraphicsQ' ? true : false);
        console.log(`selected ${value}`);
    };

    const onChange = (e) => {
        setQDes(e.target.value);
        console.log(e.target.value);
    };

    const onChangeA = (e) => {
        setAOption(e.target.value);
        console.log(e.target.value);
    };

    const onChangeB = (e) => {
        setBOption(e.target.value);
        console.log(e.target.value);
    };

    const onChangeC = (e) => {
        setCOption(e.target.value);
        console.log(e.target.value);
    };

    const onChangeD = (e) => {
        setDOption(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="upload__point">
            <div className="question__type">
                <span className="text__des">选择题目类型</span>
                <Select
                    value={qType}
                    style={{ width: '30%' }}
                    size="large"
                    bordered={false}
                    onChange={handleChange}>
                    <Option value="CognitionQ">常识</Option>
                    <Option value="GraphicsQ">图标</Option>
                </Select>
            </div>
            <div className="question__input">
                <div className="question__describe">
                    <TextArea
                        value={qDes}
                        placeholder="请输入题目描述"
                        showCount
                        maxLength={200}
                        autoSize={{ minRows: 3, maxRows: 15 }}
                        onChange={onChange}
                    />
                </div>
                <div className="question__options">
                    <div className="q__option">
                        <TextArea
                            value={aOption}
                            placeholder="请输入A选项信息"
                            maxLength={100}
                            autoSize={{ minRows: 1, maxRows: 5 }}
                            onChange={onChangeA}
                        />
                    </div>
                    <div className="q__option">
                        <TextArea
                            value={bOption}
                            placeholder="请输入B选项信息"
                            maxLength={100}
                            autoSize={{ minRows: 1, maxRows: 5 }}
                            onChange={onChangeB}
                        />
                    </div>
                    <div className="q__option">
                        <TextArea
                            value={cOption}
                            placeholder="请输入C选项信息"
                            maxLength={100}
                            autoSize={{ minRows: 1, maxRows: 5 }}
                            onChange={onChangeC}
                        />
                    </div>
                    <div className="q__option">
                        <TextArea
                            value={dOption}
                            placeholder="请输入D选项信息"
                            maxLength={100}
                            autoSize={{ minRows: 1, maxRows: 5 }}
                            onChange={onChangeD}
                        />
                    </div>
                </div>
            </div>
            <div className={`${isGraphics ? 'question__image' : 'hide'}`}>
                <Upload action="#" listType="picture">
                    <Button icon={<UploadOutlined />}>上传图片</Button>
                </Upload>
            </div>
        </div>
    );
};

export default UploadPoint;
