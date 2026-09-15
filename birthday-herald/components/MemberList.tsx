
import React from 'react';
import { Member } from '../types';

interface MemberListProps {
  members: Member[];
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {
  const sortedMembers = [...members].sort((a, b) => {
    if (a.birthDate.getMonth() === b.birthDate.getMonth()) {
      return a.birthDate.getDate() - b.birthDate.getDate();
    }
    return a.birthDate.getMonth() - b.birthDate.getMonth();
  });

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-slate-700 mb-4 border-b pb-2">All Church Members</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Birthday</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedMembers.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.birthDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList;