import React, { useState, useEffect } from 'react';

export default () => {

  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <footer className="relative overflow-hidden w-full bg-guinda">
      <div className="container max-w-screen-2xl mx-auto ss:px-16 px-6 md:py-12 xxs:py-5 flex justify-center">
        <div className="w-[150px]">
          <img src="/images/logoFooter.png"></img>
        </div>

      </div>
      <div className="flex justify-center pb-2 text-white">
        <a href="https://www.facebook.com/profile.php?id=100007722019176" target="_blank" className="md:text-base xxs:text-xs">
          © {currentYear} - Pagina web re-diseñada por Rahamsis CG
        </a>

      </div>
    </footer >
  )
};
