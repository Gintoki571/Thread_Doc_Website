import React from 'react';
import CodeBlock from '../components/CodeBlock';

const features = [
    {
        title: "Hybrid Hyper-Index",
        desc: "Combines semantic vector search (LanceDB) with recursive graph traversal (SQLite CTEs).",
        why: "Vector search finds similar concepts ('login' ≈ 'auth'), while graph search navigates structure ('AuthService' depends on 'UserTable'). Together, they provide complete context.",
        file: "src/infrastructure/database/index.ts"
    },
    {
        title: "Active State Machine",
        desc: "Tracks memory lifecycle through defined states: PENDING → READY or FAILED.",
        why: "Prevents data loss during crashes. If the server dies while processing, the memory remains in PENDING state.",
        file: "src/core/memory/MemoryManager.ts"
    },
    {
        title: "Recovery Worker",
        desc: "Background process that scans for 'zombie' PENDING nodes older than 5 minutes.",
        why: "Ensures the system self-heals. Stalled memories are marked FAILED so they can be retried or investigated.",
        file: "src/core/memory/RecoveryWorker.ts"
    },
    {
        title: "Keyed Concurrency",
        desc: "Uses `async-mutex` to lock transactions per User ID.",
        why: "Allows multiple users to write simultaneously without blocking each other, but prevents race conditions for a single user.",
        file: "src/core/transactions/TransactionManager.ts"
    },
    {
        title: "Protocol Firewalls",
        desc: "Custom launcher ensures strict separation of JSON-RPC (stdout) and Logs (stderr).",
        why: "Critical for MCP. Any random console.log would break the connection with Claude.",
        file: "mcp-server.js"
    }
];

export default function Features() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Micro-Features Deep Dive</h1>
            <p className="mt-4 text-lg text-slate-600">
                CoDified is built on a set of hardened micro-features designed for production reliability.
            </p>

            <div className="mt-12 grid gap-12">
                {features.map((feature) => (
                    <div key={feature.title} className="border-l-4 border-blue-500 pl-6 py-2">
                        <h2 className="text-2xl font-bold text-slate-900">{feature.title}</h2>
                        <div className="mt-2 text-xs font-mono text-slate-500 bg-slate-100 inline-block px-2 py-1 rounded">
                            {feature.file}
                        </div>

                        <div className="mt-4 space-y-4">
                            <div>
                                <h4 className="font-semibold text-slate-900">What it is:</h4>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Why it exists:</h4>
                                <p className="text-slate-600">{feature.why}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
