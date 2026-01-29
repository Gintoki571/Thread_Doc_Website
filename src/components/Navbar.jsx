import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-sm">
                            T
                        </div>
                        <span className="text-lg font-semibold text-slate-900">Thread</span>
                    </Link>
                    <span className="ml-2 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                        v1.0.0
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/Gintoki571/CoDified"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                    >
                        GitHub
                    </a>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <span className="text-sm text-slate-500">
                        CoDified Documentation
                    </span>
                </div>
            </div>
        </nav>
    );
}
