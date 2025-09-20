
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                SQL Formatter
            </h1>
            <p className="mt-2 text-lg text-gray-400">
                Beautify your SQL queries instantly. Inspired by CodeSnap.
            </p>
        </header>
    );
};

export default Header;
