import './App.scss';
import img from "./door-story.jpg";

function App() {
  return (
    <div class="nav">
        <div class="nav-left">
            <div class="div-images">
                <img src={img} alt="door-story" />
                <img src={img} alt="door-story" />
                <img src={img} alt="door-story" />
                <img src={img} alt="door-story" />
            </div>
        </div>
        <div class="nav-top">
            <div class="nav-top-left">
                <a href=""><i class="bi bi-arrow-left"></i></a>
                <img src={img} alt="door-story" />
                <span>Axton</span>
            </div>
            <div class="nav-top-middle">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Search a message" />
            </div>  
            <div class="nav-top-right">
                <a href=""><i class="bi bi-info-circle"></i></a>
            </div>  
        </div> 
        <div class="div-main">
          
        </div>
        <div class="nav-right">
            <div class="div-axton-members">
              <img src={img} alt="door-story" />
                <span class="span-axton">AXTON</span>
                <span class="span-members">8 of 20 members</span>
                <div class="div-icons">
                    <i class="bi bi-box-arrow-right"></i>
                    <i class="bi bi-search"></i>
                    <i class="bi bi-three-dots"></i>
                </div>

            </div>
            <div class="div-members">
                <span>MEMBERS</span>
                <div class="div-story">
                    <span class="span-story"><img src={img} alt="door-story" /></span>
                    <span class="span-name">susan</span>
                </div>
                <div class="div-story">
                    <span class="span-story"><img src={img} alt="door-story" /></span>
                    <span class="span-name">zlikovichoner</span>
                </div>
                <div class="div-story">
                    <span class="span-story"><img src={img} alt="door-story" /></span>
                    <span class="span-name">olamide</span>
                </div>
                <div class="div-story">
                    <span class="span-story"><img src={img} alt="door-story" /></span>
                    <span class="span-name">Ibrahimovic</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
