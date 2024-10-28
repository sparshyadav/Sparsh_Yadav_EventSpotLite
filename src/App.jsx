// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home.jsx';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SearchResults from './components/SearchResults.jsx'; // Import your new SearchResults component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
