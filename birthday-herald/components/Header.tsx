
import React from 'react';
import { GiftIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="text-sky-600">
          <GiftIcon />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 ml-3">
          Birthday Herald
        </h1>
      </div>
    </header>
  );
};

export default Header;