import React from 'react';

const stack = [
    {
        category: "Core Engine",
        items: [
            { name: "Node.js (v18+)", desc: "Runtime environment." },
            { name: "TypeScript", desc: "Type safety and developer experience." },
            { name: "Zod", desc: "Runtime schema validation for inputs/outputs." }
        ]
    },
    {
        category: "Storage",
        items: [
            { name: "Better-SQLite3", desc: "Synchronous, high-performance SQLite driver." },
            { name: "Drizzle ORM", desc: "Type-safe SQL query builder and schema management." },
            { name: "LanceDB", desc: "Embedded vector database for semantic search." }
        ]
    },
    {
        category: "Resilience & Async",
        items: [
            { name: "Async-Mutex", desc: "Keyed mutexes for concurrent transaction safety." },
            { name: "LRU-Cache", desc: "Bounded memory caching for embeddings." }
        ]
    },
    {
        category: "Interface",
        items: [
            { name: "@modelcontextprotocol/sdk", desc: "Official SDK for MCP server implementation." }
        ]
    }
];

export default function TechStack() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Technology Stack</h1>
            <p className="mt-4 text-lg text-slate-600">
                The libraries and tools that power CoDified, chosen for performance and reliability.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {stack.map((group) => (
                    <div key={group.category} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">{group.category}</h2>
                        <ul className="space-y-4">
                            {group.items.map((item) => (
                                <li key={item.name}>
                                    <div className="font-semibold text-blue-600">{item.name}</div>
                                    <div className="text-sm text-slate-600">{item.desc}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
