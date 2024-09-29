
import Image from 'next/image';
import ArrowWIcon from '../assets/icons/arrow-w.svg';
import HeroMock from '../assets/images/alt.png';
import HeroUp from '../assets/images/ust.png'
import HeroMobile from '../assets/images/3.png'
import Mockup1 from '../assets/images/mockups/4.png'
import Mockup2 from '../assets/images/mockups/5.png'


export const Hero = () => {
  return (
    <div className=" text-white bg-[linear-gradient(to_bottom,#000,rgba(221, 242, 65, 0.506),#f2fedc_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className='absolute '> 
        <Image 
          src={HeroMock} 
          alt=""
          className='object-contain transform -mt-80 hidden sm:flex md:flex'
        />
        </div>
      <div className="absolute inset-0 justify-center items-center z-0 block sm:hidden">
        <div className="relative">
          <Image
            src={Mockup2}
            alt="Mockup Image 2"
            width={250}
            height={250}
            className="absolute object-contain transform -rotate-12"
            style={{ top: "50px", right: "-50px" }} 
          />
          <Image
            src={Mockup1}
            alt="Mockup Image 2"
            width={250}
            height={250}
            className="absolute object-contain transform -rotate-45 "
            style={{ top: "440px", left: "100px" }} 
          />
        </div>
      </div>
      
    {/*<div className="absolute mt-28 h-[375px] w-[750px] sm:w-[1526px] sm:h-[768px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#f2fedc] bg-[radial-gradient(closest-side,#000_82%,#f2fedc)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>*/}      <div className="container relative ">
        <div className="flex items-center justify-center">
          <a href="#" className=" inline-flex gap-2 border py-1 px-2 rounded-lg border-white/30">
            <span className="bg-[linear-gradient(to_right,rgba(222,242,65,0.7),rgba(165,220,210,0.7),rgba(100,155,146,0.7))] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Bağlantı Kurmanın Yeni Yolu
            </span>
            <span className="inline-flex items-center gap-2">
              <span>ile Tanışın</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
         <div className='inline-flex relative'>
            <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex'>
              Bağlantı Kurmanın 
              <br /> Yeni Yolu!
            </h1>
            
          </div>
        </div>
        <div className='flex justify-center'>
          <p className="text-center text-white/70 text-xl mt-8 max-w-md">
            Herhangi bir mobil uygulama gerektirmeden ağınızı genişletin.
          </p>
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Sanal Kartını Oluştur!
          </button>
        </div>
      </div>
      
    </div>
  );
};
