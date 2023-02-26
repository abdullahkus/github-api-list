import Link from 'next/link';
import React from 'react';

const Home = () => {
    return (
        <div>
            Welcome, <br />
            <Link className="text-lg" href="/users">
                You can list users here.
            </Link>
        </div>
    );
};

export default Home;
