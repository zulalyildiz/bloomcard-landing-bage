import Image from "next/image";
import appScreen from "../assets/images/appScreen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#def241] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Gelişmiş Yönetim Paneli
        </h2>
        <div className='max-w-xl mx-auto'>
          <p className="text-center mt-5 text-xl text-white/70">
            Tüm bilgilerinizi kolayca güncelleyebilmeniz için tasarlandı
          </p>
        </div>
        <Image src={appScreen} alt="Dashboard" className="mt-14" />
      </div>
      

    </div>
  );
};
