import { Feature } from "./Feature";
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
    <div className=" text-white py-[72px] sm:py-24">
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
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>

    
    </div>
  );
};
