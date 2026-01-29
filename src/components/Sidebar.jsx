import React from 'react';
import { NavLink } from 'react-router-dom';

const sections = [
    {
        title: 'Getting Started',
        links: [
            { name: 'Introduction', path: '/' },
            { name: 'Overview', path: '/overview' },
        ]
    },
    {
        title: 'Core Concepts',
        links: [
            { name: 'Architecture', path: '/architecture' },
            { name: 'Features', path: '/features' },
            { name: 'Internals', path: '/internals' },
        ]
    },
    {
        title: 'Reference',
        links: [
            { name: 'Tech Stack', path: '/stack' },
        ]
    }
];

export default function Sidebar() {
    return (
        <aside className="fixed top-16 bottom-0 left-0 hidden w-64 border-r border-slate-200 bg-white overflow-y-auto lg:block">
            <div className="px-6 py-8">
                {sections.map((section) => (
                    <div key={section.title} className="mb-8">
                        <h5 className="mb-3 text-sm font-semibold text-slate-900 uppercase tracking-wider">
                            {section.title}
                        </h5>
                        <ul className="space-y-2">
                            {section.links.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `block text-sm transition-colors ${isActive
                                                ? 'text-blue-600 font-medium'
                                                : 'text-slate-600 hover:text-slate-900'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </aside>
    );
}
