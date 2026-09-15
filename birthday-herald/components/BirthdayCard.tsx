import React from 'react';
import { Member, Gender } from '../types';

interface BirthdayCardProps {
  member: Member;
  wish?: string;
  isLoading: boolean;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ member, wish, isLoading }) => {
  const formattedWish = wish?.split('\n').map((line, index) => {
    if (line.trim() === '') return <br key={index} />;
    if (line.includes(' - ') || line.match(/(\d\s)?\w+\s\d+:\d+/)) {
        return <blockquote key={index} className="mt-4 p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">{line}</blockquote>
    }
    return <p key={index}>{line}</p>;
  });


  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 w-full">
      <div className={`p-6 ${member.gender === Gender.Male ? 'bg-sky-100' : 'bg-pink-100'}`}>
        <h3 className="text-2xl font-bold text-slate-800">{member.name}</h3>
        <p className={`text-sm font-medium ${member.gender === Gender.Male ? 'text-sky-700' : 'text-pink-700'}`}>
          Happy Birthday!
        </p>
      </div>
      <div className="p-6 min-h-[150px] flex flex-col justify-center">
        {isLoading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
            <p className="ml-4 text-slate-600">Generating message...</p>
          </div>
        )}
        {!isLoading && !wish && <p className="text-red-500 text-center">Could not generate a wish.</p>}
        {wish && (
          <div className="text-slate-700 space-y-2">
            {formattedWish}
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayCard;