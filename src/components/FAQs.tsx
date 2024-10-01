"use client";
import React from "react";
import PlusIcon from "../assets/icons/plus.svg"
import MinusIcon from "../assets/icons/minus.svg"
import { motion, AnimatePresence } from "framer-motion";
const items = [
  {
    question: "NFC dijital kartvizit nedir ve nasıl çalışır?",
    answer:
      "NFC (Near Field Communication) dijital kartvizit, fiziksel bir kartvizit gibi kişisel veya iş bilgilerinizi taşıyan, ancak bu bilgileri dijital olarak paylaşmanıza olanak tanıyan bir teknolojidir. Kartvizit üzerindeki NFC çipi, telefonunuza dokundurulduğunda iletişim bilgilerinizi, sosyal medya hesaplarınızı veya web sitenizi kullanıcıyla paylaşır. Kullanıcıların bu bilgileri telefonlarına kaydetmesi sadece bir dokunuşla mümkündür, bu da kartvizit paylaşımını oldukça hızlı ve pratik hale getirir.",
  },
  {
    question: "NFC dijital kartviziti kullanmak için hangi telefonlar uygundur?",
    answer:
      "NFC dijital kartvizitler, NFC teknolojisini destekleyen hemen hemen tüm modern akıllı telefonlarla kullanılabilir. Bu teknolojiyi Android ve iOS cihazların çoğu destekler. iPhone modelleri, özellikle iPhone 7 ve üzeri modellerde NFC okuma özelliğine sahiptir. Android cihazların büyük bir kısmında ise NFC özelliği varsayılan olarak bulunmaktadır ve ayarlardan aktif edilebilir.",
  },
  {
    question: "NFC dijital kartvizit ile hangi bilgileri paylaşabilirim?",
    answer:
      "NFC dijital kartvizitler, birçok türde bilgiyi paylaşmanıza olanak tanır. Bunlar arasında adınız ve soyadınız, telefon numaranız, e-posta adresiniz, şirket bilginiz, pozisyonunuz, web siteniz ve sosyal medya hesaplarınız (LinkedIn, Twitter, Instagram vb.) bulunur. Ayrıca, kullanıcıların cihazlarına kolayca ekleyebilmesi için vCard formatında iletişim bilgileri sunabilirsiniz. Kartvizitinizi kişiselleştirerek ihtiyacınıza göre farklı bilgileri de ekleyebilirsiniz.",
  },
  {
    question: "NFC dijital kartvizit güvenli mi? Bilgilerimi paylaşırken risk var mı?",
    answer:
      "NFC dijital kartvizitler, bilgi paylaşımı açısından oldukça güvenli bir yöntemdir. NFC teknolojisi, kısa mesafelerde çalışan bir iletişim teknolojisi olduğundan dolayı bilgiler yalnızca birkaç santimetre uzaklıktaki cihazlarla paylaşılabilir. Bu durum, izinsiz erişim ve güvenlik ihlallerini önlemeye yardımcı olur. Ayrıca, sadece istediğiniz bilgileri paylaşmak için kartvizitinizi özelleştirebilir ve güvenlik açısından önemli bilgileri gizli tutabilirsiniz. Yine de, kişisel bilgilerinizi paylaşmadan önce kimlerle paylaştığınıza dikkat etmek önemlidir.",
  },
];
const AccordionItem = ({
  question, 
  answer,
} : {
  question: string; 
  answer:string;
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
  return(
    <div 
      className="py-7border-b border-white/30" 
      onClick={() => setIsOpen(!isOpen)}
      >
              <div className='flex items-center py-7'>
                <span className="flex-1 text-lg font-bold">{question}</span>
                {isOpen ? <MinusIcon /> : <PlusIcon />}
                
              </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div 
              initial = {{
                opacity: 0,
                height:0,
                marginTop: 0
              }}
              animate = {{
                opacity: 1,
                height: 'auto',
                marginTop: '16px'
              }}
              exit={{
                opacity:0,
                height:0,
                marginTop: 0
              }}
              >
                {answer}
            </motion.div>
            )}
          </AnimatePresence> 
          </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] bg-gradient-to-b from-[#def241] to-black sm:py-24 ">
      <div className="container">
        <h2  className="text-center font-bold text-5xl sm:text-6xl sm:max-w-[648px] mx-auto tracking-tighter">Sıkça Sorulan Sorular</h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({question, answer}) => (
            <AccordionItem question={question} answer={answer} key={question}/>
          ))}
        </div>

      </div>

    </div>
  );
};
