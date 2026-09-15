
import { Member, Gender } from './types';
import React from 'react';

// To ensure there are always birthdays today for demonstration,
// we'll dynamically set a few members' birthdays to the current date.
const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

export const MEMBERS: Member[] = [
  { id: 1, name: 'John Smith', gender: Gender.Male, birthDate: new Date(today.getFullYear() - 45, today.getMonth(), today.getDate()), email: 'john.smith@example.com' },
  { id: 2, name: 'Sarah Johnson', gender: Gender.Female, birthDate: new Date(today.getFullYear() - 38, today.getMonth(), today.getDate()), email: 'sarah.johnson@example.com' },
  { id: 3, name: 'David Williams', gender: Gender.Male, birthDate: new Date(1980, 5, 15), email: 'david.williams@example.com' },
  { id: 4, name: 'Emily Brown', gender: Gender.Female, birthDate: new Date(1992, 8, 22), email: 'emily.brown@example.com' },
  { id: 5, name: 'Michael Jones', gender: Gender.Male, birthDate: new Date(1975, 1, 10), email: 'michael.jones@example.com' },
  { id: 6, name: 'Jessica Garcia', gender: Gender.Female, birthDate: new Date(tomorrow.getFullYear() - 30, tomorrow.getMonth(), tomorrow.getDate()), email: 'jessica.garcia@example.com' },
  { id: 7, name: 'Daniel Miller', gender: Gender.Male, birthDate: new Date(1988, 10, 5), email: 'daniel.miller@example.com' },
  { id: 8, name: 'Linda Davis', gender: Gender.Female, birthDate: new Date(1965, 3, 30), email: 'linda.davis@example.com' },
  { id: 9, name: 'James Rodriguez', gender: Gender.Male, birthDate: new Date(1995, 7, 12), email: 'james.rodriguez@example.com' },
  { id: 10, name: 'Patricia Martinez', gender: Gender.Female, birthDate: new Date(1983, 4, 18), email: 'patricia.martinez@example.com' },
  { id: 11, name: 'Robert Hernandez', gender: Gender.Male, birthDate: new Date(1979, 11, 25), email: 'robert.hernandez@example.com' },
  { id: 12, name: 'Jennifer Lopez', gender: Gender.Female, birthDate: new Date(1990, 6, 3), email: 'jennifer.lopez@example.com' },
  { id: 13, name: 'William Gonzalez', gender: Gender.Male, birthDate: new Date(yesterday.getFullYear() - 50, yesterday.getMonth(), yesterday.getDate()), email: 'william.gonzalez@example.com' },
  { id: 14, name: 'Elizabeth Wilson', gender: Gender.Female, birthDate: new Date(1987, 0, 14), email: 'elizabeth.wilson@example.com' },
  { id: 15, name: 'Joseph Anderson', gender: Gender.Male, birthDate: new Date(1998, 9, 9), email: 'joseph.anderson@example.com' },
  { id: 16, name: 'Susan Thomas', gender: Gender.Female, birthDate: new Date(1972, 2, 28), email: 'susan.thomas@example.com' },
  { id: 17, name: 'Charles Taylor', gender: Gender.Male, birthDate: new Date(1981, 8, 1), email: 'charles.taylor@example.com' },
  { id: 18, name: 'Karen Moore', gender: Gender.Female, birthDate: new Date(1993, 11, 19), email: 'karen.moore@example.com' },
  { id: 19, name: 'Thomas Jackson', gender: Gender.Male, birthDate: new Date(1968, 4, 23), email: 'thomas.jackson@example.com' },
  { id: 20, name: 'Nancy White', gender: Gender.Female, birthDate: new Date(1985, 7, 7), email: 'nancy.white@example.com' },
  { id: 21, name: 'Christopher Harris', gender: Gender.Male, birthDate: new Date(1991, 1, 2), email: 'christopher.harris@example.com' },
  { id: 22, name: 'Lisa Martin', gender: Gender.Female, birthDate: new Date(1976, 10, 11), email: 'lisa.martin@example.com' },
  { id: 23, name: 'Matthew Thompson', gender: Gender.Male, birthDate: new Date(1984, 5, 5), email: 'matthew.thompson@example.com' },
  { id: 24, name: 'Betty Clark', gender: Gender.Female, birthDate: new Date(1969, 3, 13), email: 'betty.clark@example.com' },
  { id: 25, name: 'Donald Lewis', gender: Gender.Male, birthDate: new Date(1974, 9, 27), email: 'donald.lewis@example.com' },
  { id: 26, name: 'Dorothy Robinson', gender: Gender.Female, birthDate: new Date(1996, 0, 31), email: 'dorothy.robinson@example.com' },
  { id: 27, name: 'Mark Walker', gender: Gender.Male, birthDate: new Date(1982, 6, 20), email: 'mark.walker@example.com' },
  { id: 28, name: 'Helen Perez', gender: Gender.Female, birthDate: new Date(1971, 2, 9), email: 'helen.perez@example.com' },
  { id: 29, name: 'Paul Hall', gender: Gender.Male, birthDate: new Date(1994, 10, 15), email: 'paul.hall@example.com' },
  { id: 30, name: 'Sandra Young', gender: Gender.Female, birthDate: new Date(1989, 1, 24), email: 'sandra.young@example.com' },
  { id: 31, name: 'Steven Allen', gender: Gender.Male, birthDate: new Date(1970, 8, 17), email: 'steven.allen@example.com' },
  { id: 32, name: 'Donna King', gender: Gender.Female, birthDate: new Date(1997, 5, 29), email: 'donna.king@example.com' },
  { id: 33, name: 'Andrew Wright', gender: Gender.Male, birthDate: new Date(1977, 11, 3), email: 'andrew.wright@example.com' },
  { id: 34, name: 'Carol Scott', gender: Gender.Female, birthDate: new Date(1986, 2, 21), email: 'carol.scott@example.com' },
  { id: 35, name: 'Joshua Green', gender: Gender.Male, birthDate: new Date(1999, 4, 8), email: 'joshua.green@example.com' },
  { id: 36, name: 'Ruth Adams', gender: Gender.Female, birthDate: new Date(1967, 9, 16), email: 'ruth.adams@example.com' },
  { id: 37, name: 'Kevin Baker', gender: Gender.Male, birthDate: new Date(1973, 0, 26), email: 'kevin.baker@example.com' },
  { id: 38, name: 'Sharon Nelson', gender: Gender.Female, birthDate: new Date(1980, 6, 13), email: 'sharon.nelson@example.com' },
  { id: 39, name: 'Brian Carter', gender: Gender.Male, birthDate: new Date(1992, 3, 4), email: 'brian.carter@example.com' },
  { id: 40, name: 'Michelle Mitchell', gender: Gender.Female, birthDate: new Date(1978, 8, 30), email: 'michelle.mitchell@example.com' },
  { id: 41, name: 'George Roberts', gender: Gender.Male, birthDate: new Date(1966, 11, 12), email: 'george.roberts@example.com' },
  { id: 42, name: 'Laura Turner', gender: Gender.Female, birthDate: new Date(1995, 2, 18), email: 'laura.turner@example.com' },
  { id: 43, name: 'Kenneth Phillips', gender: Gender.Male, birthDate: new Date(1983, 7, 22), email: 'kenneth.phillips@example.com' },
  { id: 44, name: 'Cynthia Campbell', gender: Gender.Female, birthDate: new Date(1975, 1, 5), email: 'cynthia.campbell@example.com' },
  { id: 45, name: 'Edward Parker', gender: Gender.Male, birthDate: new Date(1990, 9, 29), email: 'edward.parker@example.com' },
  { id: 46, name: 'Mary Evans', gender: Gender.Female, birthDate: new Date(1981, 4, 1), email: 'mary.evans@example.com' },
  { id: 47, name: 'Ronald Edwards', gender: Gender.Male, birthDate: new Date(1972, 10, 21), email: 'ronald.edwards@example.com' },
  { id: 48, name: 'Deborah Collins', gender: Gender.Female, birthDate: new Date(1993, 0, 9), email: 'deborah.collins@example.com' },
  { id: 49, name: 'Timothy Stewart', gender: Gender.Male, birthDate: new Date(1984, 3, 7), email: 'timothy.stewart@example.com' },
  { id: 50, name: 'Rebecca Morris', gender: Gender.Female, birthDate: new Date(1998, 6, 26), email: 'rebecca.morris@example.com' },
  { id: 51, name: 'VT', gender: Gender.Male, birthDate: new Date(today.getFullYear() - 40, today.getMonth(), today.getDate()), email: 'vinodthankachan@gmail.com' },
];


export const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
);

export const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

export const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
);

export const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 12l-2.293 2.293a1 1 0 01-1.414 0L4 12m16 8l-2.293-2.293a1 1 0 00-1.414 0L14 20l2.293-2.293a1 1 0 000-1.414L14 14" />
    </svg>
);