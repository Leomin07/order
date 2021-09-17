import React, { useEffect, useState } from 'react';
import { AiOutlineToTop } from 'react-icons/ai';

export const BackToTop = () => {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const checkScrollHeight = () => {
      if (window.pageYOffset > 500) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener('scroll', checkScrollHeight);
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, [isShow]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="">
      {isShow ? (
        <AiOutlineToTop
          size="2em"
          onClick={() => scrollToTop()}
          className="mx-auto text-white fixed right-5 bottom-28 z-999 bg-blue-200 rounded-full w-10 h-10 cursor-pointer"
        />
      ) : (
        ''
      )}
    </div>
  );
};
