import React, { useState, useEffect, useCallback } from 'react';
import { format } from 'sql-formatter';
import Header from './components/Header';
import SqlInput from './components/SqlInput';
import Controls from './components/Controls';
import Preview from './components/Preview';
import Footer from './components/Footer';

const initialSql = `SELECT
    p.product_id,
    p.product_name,
    p.price,
    c.category_name,
    s.supplier_name
FROM
    products p
JOIN
    categories c ON p.category_id = c.category_id
JOIN
    suppliers s ON p.supplier_id = s.supplier_id
WHERE
    p.price > 50.00
    AND c.category_name IN ('Electronics', 'Home Goods')
ORDER BY
    p.price DESC
LIMIT 10;`;

const App: React.FC = () => {
    const [rawSql, setRawSql] = useState<string>(initialSql);
    const [formattedSql, setFormattedSql] = useState<string>('');
    const [fontColor, setFontColor] = useState<string>('#e5e7eb'); // gray-200
    const [backgroundColor, setBackgroundColor] = useState<string>('#1f2937'); // gray-800
    const [fontFamily, setFontFamily] = useState<string>('Courier New');
    const [fontSize, setFontSize] = useState<number>(14);

    const handleFormat = useCallback(() => {
        try {
            const result = format(rawSql, { language: 'sql', keywordCase: 'upper' });
            setFormattedSql(result);
        } catch (error) {
            console.error('SQL Formatting Error:', error);
            setFormattedSql('Error: Invalid SQL syntax. Could not format.');
        }
    }, [rawSql]);

    useEffect(() => {
        handleFormat();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <Header />
                <main className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col space-y-8">
                        <SqlInput
                            sql={rawSql}
                            setSql={setRawSql}
                            handleFormat={handleFormat}
                        />
                        <Controls
                            fontColor={fontColor}
                            setFontColor={setFontColor}
                            backgroundColor={backgroundColor}
                            setBackgroundColor={setBackgroundColor}
                            fontFamily={fontFamily}
                            setFontFamily={setFontFamily}
                            fontSize={fontSize}
                            setFontSize={setFontSize}
                        />
                    </div>
                    <div>
                        <Preview
                            formattedSql={formattedSql}
                            fontColor={fontColor}
                            backgroundColor={backgroundColor}
                            fontFamily={fontFamily}
                            fontSize={fontSize}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;