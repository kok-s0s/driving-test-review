import './styles/App.scss';
import './fonts/ZCOOLKuaiLe-Regular.ttf';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';
import Divider from './components/Divider/Divider';
import { Spin, BackTop } from 'antd';
const HomePage = React.lazy(() => import('./views/HomePage/HomePage'));
const About = React.lazy(() => import('./views/About/About'));
const DataBase = React.lazy(() => import('./views/DataBase/DataBase'));
const NoMatch = React.lazy(() => import('./views/NoMatch/NoMatch'));

const bt__style = {
    height: 30,
    width: 30,
    lineHeight: '30px',
    borderRadius: '50%',
    backgroundColor: '#69A9C9',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 10,
};

const App = () => {
    return (
        <div className="App">
            <div className="container__flex">
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
                                    <Button name="资料库" />
                                </Link>
                            </div>
                            <Divider
                                style={{ marginBottom: '1rem', width: '70%' }}
                            />
                            <Suspense fallback={<Spin size="large" />}>
                                <Routes>
                                    <Route
                                        exact
                                        path="/"
                                        element={<HomePage />}
                                    />
                                    <Route
                                        exact
                                        path="about"
                                        element={<About />}
                                    />
                                    <Route
                                        exact
                                        path="database"
                                        element={<DataBase />}
                                    />
                                    <Route
                                        path="*"
                                        element={<NoMatch status={404} />}
                                    />
                                </Routes>
                            </Suspense>
                        </Router>
                    </Content>
                    <Footer />
                    <BackTop>
                        <div style={bt__style}>UP</div>
                    </BackTop>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
};

export default App;
