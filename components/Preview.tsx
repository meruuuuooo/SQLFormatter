import React, { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';

interface PreviewProps {
    formattedSql: string;
    fontColor: string;
    backgroundColor: string;
    fontFamily: string;
    fontSize: number;
    isBold: boolean;
    showLineNumbers: boolean;
}

const Preview: React.FC<PreviewProps> = ({ formattedSql, fontColor, backgroundColor, fontFamily, fontSize, isBold, showLineNumbers }) => {
    const previewRef = useRef<HTMLDivElement>(null);
    const [copyTextStatus, setCopyTextStatus] = useState<'idle' | 'copied'>('idle');
    const [copyPngStatus, setCopyPngStatus] = useState<'idle' | 'copied'>('idle');

    const buttonClass = "px-3 py-1.5 text-sm font-medium text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed";

    const handleCopyText = () => {
        navigator.clipboard.writeText(formattedSql).then(() => {
            setCopyTextStatus('copied');
            setTimeout(() => setCopyTextStatus('idle'), 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    const handleDownloadPng = () => {
        if (!previewRef.current) return;

        htmlToImage.toPng(previewRef.current, { cacheBust: true, pixelRatio: 2 })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'sql-formatter-snippet.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error('Failed to download image:', err);
            });
    };

    const handleCopyPng = () => {
        if (!previewRef.current) return;

        if (!navigator.clipboard.write) {
            alert('Feature not supported in your browser.');
            console.error('Clipboard API for writing images is not available.');
            return;
        }

        htmlToImage.toBlob(previewRef.current, { cacheBust: true, pixelRatio: 2 })
            .then((blob) => {
                if (!blob) {
                    throw new Error('Could not generate image blob.');
                }
                navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ]).then(() => {
                    setCopyPngStatus('copied');
                    setTimeout(() => setCopyPngStatus('idle'), 2000);
                }).catch(err => {
                    console.error('Failed to copy image to clipboard:', err);
                });
            })
            .catch((err) => {
                console.error('Failed to generate image for clipboard:', err);
            });
    };


    const lines = formattedSql.split('\n');

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                <h3 className="text-lg font-semibold text-gray-300">Formatted Preview</h3>
                <div className="flex items-center gap-2 flex-wrap">
                    <button
                        onClick={handleCopyText}
                        className={buttonClass}
                        disabled={copyTextStatus === 'copied'}
                        aria-label="Copy formatted SQL to clipboard"
                    >
                        {copyTextStatus === 'copied' ? 'Copied!' : 'Copy Text'}
                    </button>
                     <button
                        onClick={handleCopyPng}
                        className={buttonClass}
                        disabled={copyPngStatus === 'copied'}
                        aria-label="Copy formatted SQL as a PNG image"
                    >
                        {copyPngStatus === 'copied' ? 'Copied!' : 'Copy PNG'}
                    </button>
                    <button
                        onClick={handleDownloadPng}
                        className={buttonClass}
                        aria-label="Download formatted SQL as a PNG image"
                    >
                        Download PNG
                    </button>
                </div>
            </div>
            <div
                ref={previewRef}
                className="w-full flex-grow p-6 rounded-lg shadow-lg overflow-auto flex"
                style={{
                    backgroundColor: backgroundColor,
                    fontFamily: fontFamily,
                    fontSize: `${fontSize}px`,
                }}
            >
                {/* Line numbers column - conditionally rendered */}
                {showLineNumbers && (
                    <div 
                        className="text-right select-none pr-4" 
                        style={{ 
                            color: fontColor, 
                            opacity: 0.5,
                            fontFamily: fontFamily,
                            fontSize: `${fontSize}px`
                        }}
                    >
                        {lines.map((_, index) => (
                            <div key={index}>{index + 1}</div>
                        ))}
                    </div>
                )}
                {/* Code column */}
                <pre
                  className="whitespace-pre"
                  style={{ 
                    color: fontColor,
                    fontWeight: isBold ? 'bold' : 'normal',
                    fontFamily: fontFamily,
                    fontSize: `${fontSize}px`
                  }}
                >
                    <code
                        style={{
                            fontFamily: fontFamily,
                            fontSize: `${fontSize}px`
                        }}
                    >
                        {formattedSql}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default Preview;