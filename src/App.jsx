
import './App.css'
import FaqImage from './components/Faq-image';
import FaqText from './components/Faq-text';
import BoxImage from '../images/illustration-box-desktop.svg'

const App = () => {



  return (
    <div className=' bg-gradient-to-b from-softBolet-500 to-softBlue-400 h-screen w-screen  sm:h-[60rem] sm:w-[40rem] relative z-40 '>
      <div className='bg-white sm:w-[20rem] sm:flex-col h-[28rem] sm:h-[32rem] sm:mt-28 mt-16 flex mb-28 ml-52 sm:ml-6 mr-36 rounded-[30px] z-30  absolute  overflow-hidden  sm:overflow-visible'>
               
      <FaqImage/>            
      <FaqText/>

      
    </div>
    <div>
    <img className=" sm:hidden absolute left-[5rem]  z-50 top-56 " src={BoxImage} alt="" />
    </div>
    </div>
  );
};

export default App;