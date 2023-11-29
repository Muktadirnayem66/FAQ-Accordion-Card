import React from 'react';

const FaqItem = ({onToggle, item, isOpen,}) => {
    
    return (
        <div className='p-2'>
            <div className="flex align-middle text-center justify-between p-3">
             <p onClick={onToggle}  className={` ${isOpen ? "font-bold":"" } cursor-pointer hover:text-rose-600 sm:text-left sm:w-[40rem] sm:ml-[4.5rem] sm:text-[.8rem]`}>{item.question}</p>

             {isOpen ? <img onClick={onToggle} className='w-3 h-2 sm:ml-4 cursor-pointer mt-2 rotate-180 ' src="../../images/icon-arrow-down.svg" alt="" /> : <img onClick={onToggle} className='w-3 h-2 cursor-pointer mt-2 sm:ml-4 ' src="../../images/icon-arrow-down.svg" alt="" />}
             </div>
              <div className='pl-3'>
              {isOpen && <p className='pb-4 sm:text-[.8rem]  text-gray-500 sm:ml-[4.5rem] sm:text-gray-500'>{item.answer}</p>}
              </div>
              <hr className='ml-3 sm:ml-[4.8rem]'/>
              
            
        </div>
    );
};

export default FaqItem;