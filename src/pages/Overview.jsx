import React from 'react';

export default function Overview() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Overview</h1>
            <p className="mt-4 text-lg text-slate-600">
                The CoDified Memory Protocol explained.
            </p>

            <div className="mt-10">
                <h2 className="text-2xl font-bold text-slate-900">What is CoDified?</h2>
                <p className="mt-4 text-slate-600">
                    CoDified is an open-source, local-first memory engine designed for AI agents.
                    It solves the problem of ephemeral context by providing a persistent, structured,
                    and intelligent storage layer that lives outside the model's context window.
                </p>
                <p className="mt-4 text-slate-600">
                    Acting as an <strong>External Hippocampus</strong>, it allows you to:
                </p>
                <ul className="mt-4 list-disc pl-8 space-y-2 text-slate-600">
                    <li>Store infinite context without hitting token limits.</li>
                    <li>Share memory between different models (Claude, Gemini, GPT-4).</li>
                    <li>Retrieve specific facts with high precision using hybrid search.</li>
                </ul>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900">The Core Problems</h2>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 p-6">
                        <h3 className="font-semibold text-slate-900">📉 AI Amnesia</h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Models forget everything once the chat window closes. CoDified persists
                            interaction data forever.
                        </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-6">
                        <h3 className="font-semibold text-slate-900">🤯 Context Overload</h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Pasting huge files degrades model performance. CoDified retrieves only
                            the relevant snippets needed for the task.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
