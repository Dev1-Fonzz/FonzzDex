import { useState, useRef, useEffect } from 'react';

export default function Terminal({ output, onClear }) {
  const terminalRef = useRef(null);

  // Scroll ke bawah apabila output berubah
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="px-4 py-3 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">Terminal Output</h2>
        <button
          onClick={onClear}
          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm"
        >
          Clear
        </button>
      </div>
      <div 
        ref={terminalRef}
        className="p-4 h-96 overflow-y-auto font-mono text-sm text-green-400 whitespace-pre-wrap"
      >
        {output || 'Terminal output will appear here...\n'}
      </div>
    </div>
  );
}