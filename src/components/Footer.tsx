import InstaIcon from '../assets/icons/insta.svg'
import XSocial from '../assets/icons/x-social.svg'
import YouTubeIcon from '../assets/icons/youtube.svg'
export const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="text-center">© 2024 <b>Bloom Digital Card</b>. All rights reserved.</div>
          <ul className='flex justify-center gap-4 '>
            <li><InstaIcon /></li>
            <li><XSocial /></li>
            <li><YouTubeIcon /></li>
          </ul>
        </div>
      </div>      
    </footer>
  );
};
