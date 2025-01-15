import './App.css';
import HomePage from './Page/HomePage.js';
import AboutPage from './Page/AboutPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './Page/ContactPage.js';
import ArticlesListPage from './Page/ArticlesListPage.js';
import ArticlePage from './Page/Articlepage.js';
import NavBar from './NavBar.js';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar/>
        <h1> Gilberny Blog</h1>
        <div className='page-body'>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/articles' element={<ArticlesListPage/>}/>
            <Route path='/articles/:articleId' element={<ArticlePage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
