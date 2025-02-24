"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";



function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Ease = ({children,amount,name,second,buttonname})=>{
    return(
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: amount }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10">
        <h2 className="md:text-3xl text-lg font-light tracking-wide">{name}</h2>
        <h1 className="md:text-7xl text-4xl mt-2 font-roboto tracking-widest ">{second}</h1>
        {children}
        <button className="group relative mt-6 pl-14 py-3 text-center flex bg-white z-50 h-10 w-48 text-black text-sm rounded-3xl items-center shadow-lg hover:pr-6  md:hover:pr-2 hover:shadow-xl  hover:gap-1 transition-transform duration-2000">
          <span className="group-hover:scale-95 text-justify">{buttonname}</span>
          <img src="/arrow.jpg" alt="" className="hidden h-5 group-hover:block transition-transform duration-2000 ease-in-out" />
          </button>
        
      </motion.div>
    )
  }

  const Pic = ({imgsrc,title,dis})=>{
    return(
      <motion.div
      className="group border-solid border-x-2 w-full mb-5 md:mb-0 overflow-hidden"
      >
        <motion.img
          src={imgsrc}
          alt={{title}}
          className=" object-contain w-auto transition-transform duration-300 group-hover:scale-110"
      
        />
        
        <h3 className="p-4 text-base md:text-xl uppercase mt-4">{title}</h3>
        <p className="p-4 text-sm md:text-base mt-4">{dis}</p>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col w-auto overflow-hidden">
      
      <header
        className={` w-full fixed z-50 transition-all duration-400  ${
          scrolled ? "bg-black bg-opacity-50 rounded-md mt-0 backdrop-blur-md" : "bg-transparent mt-5"
        } p-4`}
      >     <div className="flex pl-16 md:pl-56 items-center space-x-0 md:space-x-80">           
            <button
            className="p-1 text-white hover:scale-110 z-50 md:text-xl flex flex-row items-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
            >
            <img alt="menu" src={isOpen? "/close.png":"/menu.png"} className="h-3 w-auto md:h-5"/>
            {isOpen ? "Close" : "Menu"}
          </button>
                    
          <img src={scrolled ? "/download.png":"favicon.png" }alt="Logo" className="h-8 px-20 item-center w-auto" />

          <button className="hover:scale-110 flex flex-row text-sm items-center md:text-xl gap-1">
            <img src="/search.png" alt="search" className="w-6"/>Find a Dealer</button>  
            </div>      
            <hr className={`${scrolled ? "hidden":"block"} border-gray-400 mt-5 z-0 md:mx-32 `}/>

      </header>

     
      
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 left-0 z-40 text-right h-full w-50 md:w-1/3 bg-black text-white p-10 pt-40 shadow-lg"
      >
        <ul className="flex flex-col gap-4 text-gray-300 text-sm md:text-lg uppercase">
          <li className="hover:text-white">Inspiring Greatness</li>
          <li className="hover:text-white">Models</li>
          <li className="hover:text-white">Bespoke</li>
          <li className="hover:text-white">Ownership</li>
          <li className="hover:text-white">Provenance</li>
          <li className="hover:text-white">Boutique</li>
          <li className="hover:text-white">Muse Arts Programme</li>
        </ul>
      </motion.div>

      <div className={`${isOpen? "opacity-50":"opacity-100"} gap-y-0 font-roboto`}>
     
     
      <div className="relative w-full h-screen ">
      <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted >
        <source src="/og/first.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
      </video>
      <Ease amount={0.3}
            name={"BLACK ∞ BADGE"}
            second={"SPECTRE"}
            buttonname={"DISCOVER NOW"}
      >
      
    </Ease>
    </div>

    <div className="h-screen relative">
        <img alt="" src="/spectre.jpg" className="h-screen w-full  object-cover" />
      <Ease amount={0.5}
      buttonname={"DISCOVER NOW"}
      >
        <h1 className="md:text-7xl text-4xl mt-2 font-roboto tracking-widest my-2">SPECTRE</h1>
        <h4 className="md:text-3xl text-lg font-light tracking-wide">BEYOND DESIRE</h4>
      </Ease>
    </div>

    <div className="relative w-full h-screen">
  <video
    className="absolute top-0 left-0 w-full h-full min-h-screen object-cover"
    autoPlay
    loop
    muted
  >
    <source src="/og/art.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <Ease
    amount={0.3}
    name={"ROLLS-ROYCE PRESENTS"}
    second={"VOICE OF THE MAKER"}
    buttonname={"WATCH NOW"}
  >
  <h2 className="text-xs md:text-xl">AN INSPIRING GREATNESS SERIES</h2>
  </Ease>
</div>


    <div className="text-center text-xl my-6">
        <h3>EXPLORE FURTHER</h3>
        <p>CONTINUE YOUR JOURNEY</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3  h-full gap-x-4 mx-4 mb-5 ">
        <Pic 
        imgsrc="/og/one.jpg"
        title="Discover Ghost Extended Series II"
        dis="Your spacious realm to savour every thrilling moment."
        />

        <Pic
        imgsrc="/og/two.jpg"
        title="Black Badge Ghost Series II"
        dis="Bold. Unapologetic. Powerful. A daring expression of luxury and power."
        />

        <Pic 
        imgsrc="/og/three.jpg"
        title="DISCOVER CULLINAN SERIES II"
        dis="Formidable in presence. Extraordinary in craftsmanship. Experience the freedom to go anywhere, effortlessly, with this enhanced icon."
        />

     </div>
    <div className="relative text-center w-full my-10">
        <h1 className="font-serif mb-0">ROLLS ROYCE</h1>
        <h6 className="font-mono text-xs top-0">MOTOR CARS</h6>
    </div>
    </div>
    <hr className="my-5 border-gray-400"/>
    <footer className="w-full flex flex-col bottom-0 md:m-10 relative grid-cols-1 items-center md:grid-cols-2 md:flex-row">
        <div className="grid md:w-3/4 grid-cols-2 md:grid-cols-5 gap-x-10 md:gap-x-0 font-mono">
            <div>
              <h5>PRE-OWNED</h5>
              <h5>FIND A DEALER</h5>
              <h5> CAREERS</h5>
            </div>
            <div>
              <h5>COOKIES</h5>
              <h5>EU TYRE LABELS</h5>
              <h5>SITE MAP</h5>
            </div>
            <div>
              <h5>PRESSCLUB</h5>
              <h5>BATTERY REGULATION</h5>
              <h5>WHISPERS</h5>
            </div>
            <div>
              <h5>LEGAL</h5>
              <h5>CONTACT</h5>
              <h5>LANGUAGE</h5>
            </div>
            <div>
              <h5>COMPLAINTS</h5>
              <h5>PRIVACY</h5>
            </div>        
        </div>
        <div className="flex flex-row items-center gap-3 ">
          <img src="/youtube.jpg" className="w-6 h-6"/>
          <img src="/facebook.jpg" className="w-8 h-8"/>
          <img src="/insta.jpg" className="w-7 h-7"/>
          <img src="/linked.jpeg" className="w-5 h-5"/>
          <img src="/x.png" className="w-7 h-7"/>
        </div>
     </footer>
     <hr className="my-5 border-gray-400"/>
    </div>
  )
}

export default Home;