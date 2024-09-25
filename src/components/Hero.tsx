
import Image from 'next/image';
import ArrowWIcon from '../assets/icons/arrow-w.svg';
import HeroMock from '../assets/images/heromock.png'

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,rgba(221, 242, 65, 0.506),#f2fedc_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className='absolute'>
        <Image src={HeroMock} alt="" />
      </div>
{      <div className="absolute mt-28 h-[375px] w-[750px] sm:w-[1526px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#f2fedc] bg-[radial-gradient(closest-side,#000_82%,#f2fedc)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
}      <div className="container relative ">
        <div className="flex items-center justify-center">
          <a href="#" className=" inline-flex gap-2 border py-1 px-2 rounded-lg border-white/30">
            <span className="bg-[linear-gradient(to_right,#ff5ce969,#FB93D0,#FFDD99,#def241,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Bağlantı Kurmanın Yeni Yolu
            </span>
            <span className="inline-flex items-center gap-2">
              <span>ile Tanışın</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          {/*<div className='inline-flex relative'>
            <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex'>
              Bağlantı Kurmanın 
              <br /> Yeni Yolu!
            </h1>
            
          </div>*/}
        </div>
        <div className='flex justify-center'>
          <p className="text-center text-black/70 text-xl mt-8 max-w-md">
            Herhangi bir mobil uygulama gerektirmeden ağınızı genişletin.
          </p>
        </div>
        
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Sanal Kartını Oluştur!</button>
        </div>
      </div>
      
    </div>
  );
};
