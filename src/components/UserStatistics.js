import React from 'react';
import Image from 'next/image';
import { useSession } from "next-auth/client";


const UserStatistics = () => {

  const [session, loading] = useSession();

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* User Profile Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center">
          <Image
            src="/user-profile-placeholder.png"
            alt="User Profile Picture"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="ml-4">
          <h2 className="text-xl font-bold">{session.user.name}</h2>
             <p className="text-sm text-gray-600">Member since: Month, Year</p>
          </div>
        </div>
      </section>

      {/* Game Statistics and Progress Over Time Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Game Statistics</h3>
          <div>
            <h4 className="text-lg font-semibold mb-2">301</h4>
            {/* Add detailed statistics for 301 game mode */}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">501</h4>
            {/* Add detailed statistics for 501 game mode */}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">701</h4>
            {/* Add detailed statistics for 701 game mode */}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Cricket</h4>
            {/* Add detailed statistics for Cricket game mode */}
          </div>
        </div>

        {/* Progress Over Time Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Progress Over Time</h3>
          {/* Add interactive charts and graphs */}
        </div>
      </section>
    </div>
  );
};

export default UserStatistics;
