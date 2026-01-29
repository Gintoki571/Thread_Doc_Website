import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

export default function CodeBlock({ code, language = 'javascript' }) {
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return (
        <div className="relative my-4 rounded-lg bg-slate-900 shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                <span className="text-xs font-mono text-slate-400 capitalize">{language}</span>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                </div>
            </div>
            <pre className="!bg-transparent !m-0 !p-4 overflow-x-auto">
                <code className={`language-${language}`}>{code.trim()}</code>
            </pre>
        </div>
    );
}
