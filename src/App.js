import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';
import Divider from './components/Divider/Divider';
import HomePage from './view/HomePage';
import About from './view/About';
import DataBase from './view/DataBase';

import './App.scss';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="left"></div>
                <div className="main">
                    <Header />
                    <Content>
                        <Router>
                            <div className="list">
                                <Link className="list__link" to="/">
                                    <Button name="主页" />
                                </Link>

                                <Link className="list__link" to="about">
                                    <Button name="关于" />
                                </Link>

                                <Link className="list__link" to="database">
                                    <Button name="数据库" />
                                </Link>
                            </div>
                            <Divider
                                style={{ marginBottom: '1rem', width: '70%' }}
                            />
                            <Routes>
                                <Route exact path="/" element={<HomePage />} />
                                <Route exact path="about" element={<About />} />
                                <Route
                                    exact
                                    path="database"
                                    element={<DataBase />}
                                />
                            </Routes>
                        </Router>
                    </Content>
                    <Footer />
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
};

export default App;
