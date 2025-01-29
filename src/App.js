import './App.css';
import HomePage from './Page/HomePage.js';
import AboutPage from './Page/AboutPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './Page/ContactPage.js';
import ArticlesListPage from './Page/ArticlesListPage.js';
import ArticlePage from './Page/Articlepage.js';
import NavBar from './NavBar.js';
import LoginPage from './Page/LoginPage.js';
import SignUpPage from './Page/SignUpPage.js';
import AddArticlePage from './Page/AddArticlePage.js';

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
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/add-article' element={<AddArticlePage/>}/>
          </Routes>
        </div>
        <footer>&copy;Gilber Chen 2025</footer>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
