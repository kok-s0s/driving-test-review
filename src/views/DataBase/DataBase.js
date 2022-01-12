import './DataBase.scss';
import React, { useState } from 'react';
// import Aanalysis from '../../components/Aanalysis/Aanalysis';
import Cognition from '../../components/Cognition/Cognition';
import Graphics from '../../components/Graphics/Graphics';
import Button from '../../components/Button/Button';

const DataBase = () => {
    const [currentStatus, setCurrentStatus] = useState(1);

    return (
        <div className="database">
            <div className="database__nav">
                <Button
                    name="常识"
                    style={{ margin: '0.2rem', width: '25%' }}
                    onClick={() => setCurrentStatus(1)}
                />
                <Button
                    name="图标"
                    style={{ margin: '0.2rem', width: '25%' }}
                    onClick={() => setCurrentStatus(2)}
                />
            </div>

            <div
                className={`${
                    currentStatus === 1 ? '' : 'hide'
                } show__cognition`}>
                <Cognition />
            </div>
            <div
                className={`${
                    currentStatus === 2 ? '' : 'hide'
                } show__graphics`}>
                <Graphics />
            </div>
            {/* <Aanalysis /> */}
        </div>
    );
};

export default DataBase;
