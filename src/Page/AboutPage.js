import gilber from "../asset/gilber.png"
import { useNavigate } from "react-router-dom";


const AboutPage = () => {
    const navigate = useNavigate();
    return (
        <div className="about-page">
            <div className="about-image">
                <img 
                    src={gilber}
                    alt="Gilber Chen" 
                    style={{
                        width: '100%',
                        maxWidth: '300px', 
                        borderRadius: '50%', 
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                />
            </div>
            <div className="about-text">
                <h1>Hi, I'm Gilber</h1>
                <p>
                I was born and raised in Taiwan, a place I deeply love. I enjoy <strong>traveling</strong>, <strong>cooking</strong>, and <strong>discovering delicious foods</strong>. 
                Later, I moved to the United States to pursue higher education in Software Engineering.
                I have a passion for exploring new technologies and programming innovative solutions. 
                I created this blog to share the challenges I face and the funny moments in my life.
                If you enjoy my content, please feel free to like my articles. 
                I’d love to hear from you! Don’t hesitate to reach out if you’d like to get in touch.
                </p>
                <p>
                    Thank you for stopping by! I hope you find value in what I share here and join me in the journey 
                    of learning and growth.
                </p>
                <button  onClick={()=>navigate('/contact')}>Contact me</button>
            </div>
        </div>
    )
}
export default AboutPage;