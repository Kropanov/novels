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

class App extends Component {
    render() {
        return (
            <Layout>
                <ErrorBoundary>
                    <Header/>
                    <Routes>
                        <Route index element={<Main novels={this.props.novels}/>} />
                        <Route path="novels" element={<Novells/>}/>
                        <Route path="/novels/:name" element={<NovelPage novels={this.props.novels}/>}/>
                        <Route path="profile" element={<Profile />}/>
                        <Route path="blog" element={<Blog />}/>
                        <Route path="users" element={<Authorization/>}/>
                        <Route path="*" element={<h1>404 not found</h1>}/>
                    </Routes>
                    <Footer/>
                </ErrorBoundary>
            </Layout>
        )
    }
}

function mapStateToProps(state){
    return {
        novels: state.novels,
    }
}

export default connect(mapStateToProps)(App);
