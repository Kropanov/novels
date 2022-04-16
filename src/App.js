import Layout from "./hoc/Layout/Layout";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Header from "./containers/Header/Header";

function App() {
  return (
      <Layout>
          <ErrorBoundary>
            <Header/>
          </ErrorBoundary>
      </Layout>
  );
}

export default App;
