import React from 'react';
import { NAV_DATA_LIST} from '../utils/helper';
import { useEffect, useState } from 'react';
import CustomButton from '../common/CustomButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {

    const toggleMenu = () => {
      if (window.innerWidth < 1024) {
        document.body.style.overflow = !isMenuOpen ? "" : "hidden";
      }
      else {
        document.body.style.overflow = "";
      }
    }

    toggleMenu();
    window.removeEventListener("resize", toggleMenu);
    return () => {
      window.removeEventListener("resize", toggleMenu);
      document.body.style.overflow = "";
    }
  }, [isMenuOpen])

  return (
    <div className="flex items-end relative">
      <div className='absolute top-0 left-0 -z-10'>
        <img src="/assets/images/svg/header-ellipse.svg" alt="header-ellipse" />
      </div>
      <div className="container">
        <div className="flex justify-between items-center lg:h-[71px] h-16">
          <a href="/">
            <img className='lg:max-w-[156px] max-w-[120px] pointer-events-none' src="/assets/images/webp/header-logo.webp" alt="nav-logo" />
          </a>
          <div className='lg:block hidden'>
            <div className="flex gap-8 items-center">
              {NAV_DATA_LIST.map((obj, index) => (
                <a onClick={toggleMenu}
                  key={index}
                  className="font-medium font-sunflower hover:font-bold transition-all duration-700 text-base leading-5 text-white cursor-pointer"
                  href={obj.href}
                >
                  {obj.data}
                </a>
              ))}
            </div>
          </div>
          <div
            onClick={toggleMenu}
            className='menuIcon relative max-sm:w-[30px] max-sm:h-[24px] max-lg:w-[38px] max-lg:h-[28px] z-[15] max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden'
          >
            {isMenuOpen ? (
              <>
                <span className="h-[3px] absolute top-3 w-full bg-white transform rotate-45 transition duration-300"></span>
                <span className="h-[3px] absolute top-3 w-full bg-white transform -rotate-45 transition duration-300"></span>
              </>
            ) : (
              <>
                <span className="h-[3px] w-full bg-white"></span>
                <span className="h-[3px] w-full bg-white"></span>
                <span className="h-[3px] w-full bg-white"></span>
              </>
            )}
          </div>
          <div className={`menuList ${isMenuOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'} z-10 gap-8 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 max-lg:bg-black max-lg:flex-col max-lg:transition-all duration-300 flex items-center max-lg:min-h-screen`}>
            <div className='lg:hidden block'>
              <div className='flex-col flex gap-6 items-center'>
                {NAV_DATA_LIST.map((obj, index) => (
                  <a onClick={toggleMenu}
                    key={index}
                    className="font-normal font-sunflower hover:font-bold transition-all duration-700 text-base leading-5 text-white cursor-pointer"
                    href={obj.link}>
                    {obj.data}
                  </a>
                ))}
              </div>
            </div>
       <CustomButton customOnClick={()=>setIsMenuOpen(false)} classStyle={'bg-white md:!py-[11.3px] hover:text-white hover:bg-transparent'} text={'Connect Wallet'} classDesign={'hidden'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;