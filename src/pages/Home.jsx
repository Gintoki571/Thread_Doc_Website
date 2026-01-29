import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center lg:py-32">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Memory for the <span className="text-blue-600">Modern AI Stack</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
                CoDified is a local-first, high-performance memory engine that solves AI Amnesia
                and Context Overload. It acts as an external hippocampus for your agents.
            </p>
            <div className="mt-10 flex gap-4">
                <Link
                    to="/overview"
                    className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    Get Started
                </Link>
                <Link
                    to="/architecture"
                    className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                >
                    View Architecture
                </Link>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <Feature
                    icon="🧠"
                    title="Hybrid Hyper-Index"
                    desc="Combines semantic vector search with recursive graph traversal for perfect recall."
                />
                <Feature
                    icon="🛡️"
                    title="Crash Resilient"
                    desc="Active state machine and recovery workers ensure no data is ever lost."
                />
                <Feature
                    icon="🤝"
                    title="Universal MCP"
                    desc="Works seamlessly with Claude, Cursor, and any MCP-compliant tool."
                />
            </div>
        </div>
    );
}

function Feature({ icon, title, desc }) {
    return (
        <div className="flex flex-col items-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-500">{desc}</p>
        </div>
    );
}
