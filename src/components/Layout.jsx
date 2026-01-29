import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="hidden lg:col-span-2 lg:block">
                        <Sidebar />
                    </div>
                    <main className="py-8 lg:col-span-10 lg:pl-8">
                        <div className="prose prose-slate max-w-none text-slate-600">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
