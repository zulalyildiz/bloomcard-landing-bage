import EcoSystemIcon from '../assets/icons/ecosystem.svg'
import NfcShare from '../assets/icons/nfc.svg'
const features = [
  { 
    title: "HIZLI VE KOLAY PAYLAŞIM",
    description:
      "NFC özelliği olan akıllı telefonlara okutarak, hiçbir uygulamaya ihtiyaç duymadan bilgilerinizi hızlıca iletin.",
  },
  {
    title: "HER ZAMAN GÜNCEL BİLGİLER",
    description:
      "Bilgilerinizi kolayca güncelleyin, kartvizitlerinizi yeniden basmanıza gerek kalmasın.",
  },
  {
    title: "KOLAY REHBERE KAYDETME",
    description:
      "Rehbere Kaydet butonu ile kartınızı tarayan kişi istediğiniz bilgileri tek bir tıklama ile kendi rehberine kaydedebilir.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          İhtiyacınız Olan Her Şey
        </h2>
        <div className='max-w-xl mx-auto'>
        <p className='text-center mt-5 text-xl text-white/70'>
          Hemen şimdi dijital kartvizitinizi oluşturun ve iş dünyasında bir adım öne geçin. Kartvizitlerinizi dijital platforma taşımak hem çevre dostu hem de profesyonel. Üstelik her zaman yanınızda! Kolayca oluşturun, paylaşın ve güncelleyin.
        </p>
        </div>
        <div className='mt-16 flex flex-col sm:flex-row gap-4'>
          {features.map(({title, description}) => (
            <div key={title} className='border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1'>
              <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <NfcShare />
                
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className='mt-2 text-white/70'>{description}</p>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
};
