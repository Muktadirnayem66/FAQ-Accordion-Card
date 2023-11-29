/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        softBlue:{
         400:"#6565e7",
        }, 
        softBolet:{
        500:"#af67e9",
        } 
           
        
      },      
      screens:{
        "sm":{"max":"375px"}
      }
      
     
      
    },
  },
  plugins: [],
}