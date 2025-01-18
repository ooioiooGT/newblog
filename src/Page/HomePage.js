import { useNavigate } from "react-router-dom";

const HomePage = () => { 
    const navigate = useNavigate();
    return(
        <div className="home-page" >
            <div className='home-text'>
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>what will you do next? </h1>
                        <p>"Life's journey isn’t just a path to follow—it's the one you create. Embrace your story and make it extraordinary."</p> 
                    </div>
                    <div>
                        <button  onClick={()=>navigate('/articles')}>Explore My Blog</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;

