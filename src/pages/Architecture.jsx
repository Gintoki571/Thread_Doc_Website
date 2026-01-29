import React from 'react';

export default function Architecture() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">System Architecture</h1>

            <p className="mt-4 text-lg text-slate-600">
                CoDified follows a strict <strong>Hexagonal (Ports & Adapters)</strong> architecture to ensure
                reliability, testability, and separation of concerns.
            </p>

            <div className="mt-10">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">The 3-Layer Design</h2>

                <div className="mt-6 space-y-8">
                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-100 text-blue-700 p-2 rounded-lg font-mono text-sm font-bold">L1</div>
                            <h3 className="text-xl font-semibold text-slate-900">Interface Layer (Ports)</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            The entry points to the system. This layer handles communication protocols and validation
                            but contains <em>no business logic</em>.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-slate-600">
                            <li><strong>MCP Server</strong>: Handles JSON-RPC communication with Claude/Cursor.</li>
                            <li><strong>Launcher Shim</strong>: <code>mcp-server.js</code> acts as a firewall for stdout pollution.</li>
                        </ul>
                    </section>

                    <section className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-purple-100 text-purple-700 p-2 rounded-lg font-mono text-sm font-bold">L2</div>
                            <h3 className="text-xl font-semibold text-slate-900">Core Domain (Business Logic)</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            The "Brain" of the system. This layer orchestrates memory processing, security, and state management.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-slate-600">
                            <li><strong>Memory Orchestrator</strong>: Coordinates ingestion and retrieval sagas.</li>
                            <li><strong>Active State Machine</strong>: Manages <code>PENDING</code> → <code>READY</code> lifecycles.</li>
                            <li><strong>Entity Extractor</strong>: NLP pipeline for structured data extraction.</li>
                        </ul>
                    </section>

                    <section className="bg-green-50 p-6 rounded-xl border border-green-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-green-100 text-green-700 p-2 rounded-lg font-mono text-sm font-bold">L3</div>
                            <h3 className="text-xl font-semibold text-slate-900">Infrastructure Layer (Adapters)</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Implementations of external services. These adapters can be swapped without affecting the core.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-slate-600">
                            <li><strong>LanceDB</strong>: Vector storage implementation.</li>
                            <li><strong>SQLite/Drizzle</strong>: Graph storage implementation.</li>
                            <li><strong>LLM Provider</strong>: Adaptation for OpenAI, LM Studio, etc.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
