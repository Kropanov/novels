import Layout from "./hoc/Layout/Layout";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import React, {Component} from "react";
import Main from "./containers/Main/Main"
import Footer from "./components/Footer/Footer";
import NovelPage from "./components/Novelpage/NovelPage";
import { connect } from "react-redux";
import Novells from "./containers/Novells/Novells";
import Blog from "./containers/Blog/Blog";
import Authorization from "./containers/Authorization/Authorization";
import Profile from "./containers/Profile/Profile";
import Chapters from "./components/Chapters/Chapters";

class App extends Component {
    render() {
        return (
            <Layout blackTheme={this.props.blackTheme}>
                <ErrorBoundary>
                    <Header/>
                    <Routes>
                        <Route index element={<Main novels={this.props.novels} blackTheme={this.props.blackTheme} />} />
                        <Route path="novels" element={<Novells blackTheme={this.props.blackTheme} />}/>
                        <Route path="/novels/:name" element={<NovelPage novels={this.props.novels} blackTheme={this.props.blackTheme} />}/>
                        <Route path="/novels/:name/:id" element={<Chapters novels={this.props.novels} blackTheme={this.props.blackTheme} />}/>
                        <Route path="profile" element={<Profile blackTheme={this.props.blackTheme} />}/>
                        <Route path="blog" element={<Blog blackTheme={this.props.blackTheme} />}/>
                        <Route path="users" element={<Authorization blackTheme={this.props.blackTheme}/>}/>
                        <Route path="*" element={<h1>404 not found</h1>}/>
                    </Routes>
                    <Footer blackTheme={this.props.blackTheme} />
                </ErrorBoundary>
            </Layout>
        )
    }
}

function mapStateToProps(state){
    return {
        novels: state.novels,
        blackTheme: state.blackTheme,
    }
}

export default connect(mapStateToProps, null)(App);
