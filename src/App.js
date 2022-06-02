import Layout from "./hoc/Layout/Layout";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import React, {Component} from "react";
import Main from "./containers/Main/Main"
import Footer from "./components/Footer/Footer";
import NovelPage from "./components/Novelpage/NovelPage";
import { connect } from "react-redux";
import Novells from "./containers/Novells/Novells";

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
                        <Route path="manga" element={<h1>This is manga</h1>}/>
                        <Route path="blog" element={<h1>This is blog</h1>}/>
                        <Route path="users" element={<h1>This is users</h1>}/>
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
