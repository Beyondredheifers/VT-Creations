import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import BirthdayCard from './components/BirthdayCard';
import MemberList from './components/MemberList';
import { MEMBERS, MailIcon } from './constants';
import { ChevronDownIcon, ChevronUpIcon } from './constants';
import { Member } from './types';
import { generateBirthdayWish } from './services/geminiService';

const App: React.FC = () => {
  const [showAllMembers, setShowAllMembers] = useState<boolean>(false);
  const [wishes, setWishes] = useState<Map<number, string>>(new Map());
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const todaysBirthdays: Member[] = useMemo(() => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    return MEMBERS.filter(member => {
      const birthMonth = member.birthDate.getMonth();
      const birthDay = member.birthDate.getDate();
      return birthMonth === currentMonth && birthDay === currentDay;
    });
  }, []);

  useEffect(() => {
    if (todaysBirthdays.length > 0) {
      const generateAllWishes = async () => {
        setIsGenerating(true);
        const newWishes = new Map<number, string>();
        
        await Promise.all(
          todaysBirthdays.map(async (member) => {
            try {
              const wish = await generateBirthdayWish(member.name, member.gender);
              newWishes.set(member.id, wish);
            } catch (error) {
              console.error(`Failed to generate wish for ${member.name}`, error);
              // You could set a default error message here if you want
              newWishes.set(member.id, "Our warmest wishes on your special day!");
            }
          })
        );
        
        setWishes(newWishes);
        setIsGenerating(false);
      };

      generateAllWishes();
    }
  }, [todaysBirthdays]);
  
  const handleSendAllEmails = async () => {
    if (todaysBirthdays.length === 0 || wishes.size === 0) return;

    const subject = "Happy Birthday from Your Church Family!";
    const bcc = todaysBirthdays.map(m => m.email).join(',');
    
    const body = todaysBirthdays.map(member => {
      const wish = wishes.get(member.id) || 'We are sending you our warmest birthday blessings!';
      return `A special birthday message for ${member.name}:\n\n${wish}\n\n${'-'.repeat(30)}\n\n`;
    }).join('');

    try {
      await navigator.clipboard.writeText(body);
      
      // Create a mailto link WITHOUT the body. The body is now on the clipboard.
      // This avoids URL length limits.
      const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&bcc=${bcc}`;
      window.location.href = mailtoLink;
      
      // Instruct the user on the next step.
      alert("All birthday messages have been copied to your clipboard. Please paste them into the body of the new email draft that just opened.");
    } catch (err) {
      console.error("Failed to copy messages to clipboard:", err);
      alert("Could not automatically copy the messages. Please try again.");
    }
  };


  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-700 mb-6 text-center">Today's Birthdays</h2>
          
          {todaysBirthdays.length > 0 ? (
            <>
              <div className="text-center mb-8">
                <button
                  onClick={handleSendAllEmails}
                  disabled={isGenerating || wishes.size === 0}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  <MailIcon />
                  {isGenerating ? 'Generating Wishes...' : 'Send All Birthday Wishes'}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {todaysBirthdays.map(member => (
                  <BirthdayCard 
                    key={member.id} 
                    member={member} 
                    isLoading={isGenerating || !wishes.has(member.id)}
                    wish={wishes.get(member.id)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center bg-white rounded-lg p-8 shadow-md">
              <p className="text-lg text-slate-600">No birthdays today, but we're praying for all our members!</p>
            </div>
          )}
        </section>

        <section>
          <div className="text-center mb-6">
            <button
              onClick={() => setShowAllMembers(!showAllMembers)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {showAllMembers ? 'Hide Full Member List' : 'Show Full Member List'}
              {showAllMembers ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
          </div>

          {showAllMembers && <MemberList members={MEMBERS} />}
        </section>
      </main>
      <footer className="text-center p-4 text-slate-500 text-sm">
        <p>Built with love for our church family.</p>
      </footer>
    </div>
  );
};

export default App;