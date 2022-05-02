import Layout from "./hoc/Layout/Layout";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Main from "./containers/Main/Main"
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Layout>
            <ErrorBoundary>
                <Header/>
                <Routes>
                    <Route index element={<Main/>}/>
                    <Route path="novels" element={<h1>This is novels</h1>}/>
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

export default App;
