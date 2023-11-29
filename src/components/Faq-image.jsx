import bgDesktop from '../../images/bg-pattern-desktop.svg'
import bgMobile from '../../images/bg-pattern-mobile.svg'
import DesktopWomen from '../../images/illustration-woman-online-desktop.svg'
import MobileWomen from '../../images/illustration-woman-online-mobile.svg'

const FaqImage = () => {
    return (
        <div className="overflow-visible w-[35rem] pr-10 ">

           
        {/* Desktop Showoing */}
        <img className=" block sm:hidden absolute z-10 w-[45rem] h-[50rem] -left-[23rem] -top-[15rem]" src={bgDesktop} alt="desktop bg patter" />

         {/* mobile showing */}
        <img className="hidden sm:block sm:ml-[3rem] ml-[1.9rem] sm:-mt-3 sm:h-[6rem]" src={bgMobile} alt="mobile bg pattern" />
            

        {/* Desktop Showoing */}
        <img className=" block sm:hidden w-[27rem] h-[18rem] top-[4rem] -left-[4rem] absolute  z-30" src={DesktopWomen} alt="" />


        {/* mobile showing */}
        <img className="hidden sm:block w-[20rem] h-[10rem] sm:-mt-[11.5rem] sm:ml-[.1rem]  sm:z-40" src={MobileWomen} alt="" />

       
            
        </div>
    );
};

export default FaqImage;