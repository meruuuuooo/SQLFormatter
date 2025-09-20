import React from 'react';

interface ControlsProps {
    fontColor: string;
    setFontColor: (color: string) => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
    fontFamily: string;
    setFontFamily: (font: string) => void;
    fontSize: number;
    setFontSize: (size: number) => void;
    isBold: boolean;
    setIsBold: (bold: boolean) => void;
    showLineNumbers: boolean;
    setShowLineNumbers: (show: boolean) => void;
}

const fontOptions = [
    'Courier New',
    'Fira Code',
    'Source Code Pro',
    'Roboto Mono',
];


const Controls: React.FC<ControlsProps> = ({ fontColor, setFontColor, backgroundColor, setBackgroundColor, fontFamily, setFontFamily, fontSize, setFontSize, isBold, setIsBold, showLineNumbers, setShowLineNumbers }) => {
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Settings</h3>
            <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="font-color" className="text-sm font-medium text-gray-400">Font Color</label>
                        <div className="relative">
                            <input
                                id="font-color"
                                type="color"
                                value={fontColor}
                                onChange={(e) => setFontColor(e.target.value)}
                                className="p-1 h-10 w-full block bg-gray-700 border border-gray-600 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="background-color" className="text-sm font-medium text-gray-400">Background Color</label>
                         <div className="relative">
                            <input
                                id="background-color"
                                type="color"
                                value={backgroundColor}
                                onChange={(e) => setBackgroundColor(e.target.value)}
                                className="p-1 h-10 w-full block bg-gray-700 border border-gray-600 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="font-family" className="text-sm font-medium text-gray-400">Font Family</label>
                    <select
                        id="font-family"
                        value={fontFamily}
                        onChange={(e) => setFontFamily(e.target.value)}
                        className="w-full p-2 h-10 block bg-gray-700 border border-gray-600 cursor-pointer rounded-lg text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        aria-label="Select font family"
                    >
                        {fontOptions.map(font => (
                            <option key={font} value={font} style={{ fontFamily: font }}>{font}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="font-size" className="text-sm font-medium text-gray-400 flex justify-between items-center">
                        <span>Font Size</span>
                        <span className="text-gray-500 text-xs">{fontSize}px</span>
                    </label>
                    <input
                        id="font-size"
                        type="range"
                        min="10"
                        max="24"
                        step="1"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-blue-500"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                        <label htmlFor="bold-toggle" className="text-sm font-medium text-gray-400">Bold Text</label>
                        <button
                            id="bold-toggle"
                            onClick={() => setIsBold(!isBold)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                                isBold ? 'bg-blue-600' : 'bg-gray-600'
                            }`}
                            aria-label="Toggle bold text"
                            role="switch"
                            aria-checked={isBold}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                    isBold ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                        </button>
                    </div>
                    <div className="flex items-center space-x-3">
                        <label htmlFor="line-numbers-toggle" className="text-sm font-medium text-gray-400">Line Numbers</label>
                        <button
                            id="line-numbers-toggle"
                            onClick={() => setShowLineNumbers(!showLineNumbers)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                                showLineNumbers ? 'bg-blue-600' : 'bg-gray-600'
                            }`}
                            aria-label="Toggle line numbers"
                            role="switch"
                            aria-checked={showLineNumbers}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                    showLineNumbers ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Controls;