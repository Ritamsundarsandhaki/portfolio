
import './App.css';
import Header from './components/Header';
import Section1 from './pages/Section1';
import Section2 from './components/Section2';
import banner1 from './images/devices.svg'
import banner2 from './images/integrations.svg'
import banner3 from './images/ArshadMQ_files/frontend.svg'
import banner4 from './images/ArshadMQ_files/backend.svg'
import banner5 from './images/ArshadMQ_files/fullstack.svg'
import Section3 from './components/Section3';
import Section4 from './components/Section4';
function App() {
  return (
    <>
    <Header/>
    <Section1/>
    <div className='ban1-div'>
      <img src={banner1} alt="" className='ban1'/>
    </div>
    <Section2/>
    <Section3/>
    <Section4/>
    <div className="section5-h">
          <h1>Integrations</h1>
        </div>
        <div className='ban2-div'>
      <img src={banner2} alt="" className='ban2'/>
    </div>
    <div class="section6" id='soulion'>
            <div class="section6-header">
                <h1>Solutions</h1>
            </div>
           
            <div class="section5">
                <div class="section5-main">
                  <h3>Frontend</h3>
                  <br/>
                  <br/>
                  
                <img src={banner3} alt="" className=''/>
                </div>
                <div class="section5-main">
                <h3>Backend</h3>
                <br/>
                  <br/>
                  
                <img src={banner4} alt="" className=''/>
                </div>
                <div class="section5-main">
                <h3>Full Stack</h3>
                <img src={banner5} alt="" className=''/>
                </div>
              
            </div>
        </div>
    </>
  );
}

export default App;
