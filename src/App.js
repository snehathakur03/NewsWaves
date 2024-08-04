import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () => {
  const pageSize = 12;
  const apikey = process.env.REACT_APP_NEWS_API_KEY
    return (
      <>
      <Router>

        <Navbar/>

          <Routes>
            <Route path="/" element={<News key="general" apikey={apikey} pageSize={pageSize} category="general"/> } > </Route>
            <Route path="/business" element={<News key="business"  apikey={apikey} pageSize={pageSize} category="business"/> } > </Route>
            <Route path="/entertainment" element={<News key="entertainment"  apikey={apikey} pageSize={pageSize} category="entertainment"/> } > </Route>
            <Route path="/sports" element={<News key="sports"  apikey={apikey} pageSize={pageSize} category="sports"/> } > </Route>
            <Route path="/health" element={<News key="health"  apikey={apikey} pageSize={pageSize} category="health"/> } > </Route>
            <Route path="/science" element={<News key="science"  apikey={apikey} pageSize={pageSize} category="science"/> } > </Route>
            <Route path="/technology" element={<News key="technology"  apikey={apikey} pageSize={pageSize} category="technology"/> } > </Route>
          </Routes>

      </Router>
      </>
    )
}

export default App;