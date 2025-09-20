
import React from 'react';

interface SqlInputProps {
    sql: string;
    setSql: (sql: string) => void;
    handleFormat: () => void;
}

const SqlInput: React.FC<SqlInputProps> = ({ sql, setSql, handleFormat }) => {
    return (
        <div className="flex flex-col space-y-4">
            <label htmlFor="sql-input" className="text-lg font-semibold text-gray-300">
                SQL Input
            </label>
            <textarea
                id="sql-input"
                value={sql}
                onChange={(e) => setSql(e.target.value)}
                placeholder="Paste your SQL query here..."
                className="w-full h-64 p-4 font-mono text-sm bg-gray-800 border-2 border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-y"
            />
            <button
                onClick={handleFormat}
                className="w-full px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800 transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
                Format SQL
            </button>
        </div>
    );
};

export default SqlInput;
