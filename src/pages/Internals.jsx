import React from 'react';
import CodeBlock from '../components/CodeBlock';

const nodeSchema = `
export const nodes = sqliteTable('nodes', {
  id: text('id').primaryKey(),
  content: text('content').notNull(),
  type: text('type').notNull(), // 'concept', 'entity', 'event'
  embeddingId: text('embedding_id'),
  // ... metadata
  status: text('status').default('PENDING'), // PENDING, READY, FAILED
  userId: text('user_id').notNull(),
});
`;

const edgeSchema = `
export const edges = sqliteTable('edges', {
  id: text('id').primaryKey(),
  sourceId: text('source_id').references(() => nodes.id),
  targetId: text('target_id').references(() => nodes.id),
  type: text('type').notNull(), // 'related_to', 'depends_on'
  weight: real('weight').default(1.0),
});
`;

export default function Internals() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Internals & Data Schema</h1>
            <p className="mt-4 text-lg text-slate-600">
                Understanding the data model and low-level protocols powering CoDified.
            </p>

            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">1. The Knowledge Graph</h2>
                    <p className="mt-4 text-slate-600">
                        CoDified treats memory as a graph. The <code>nodes</code> table stores the raw information and its
                        vector reference, while the <code>edges</code> table defines semantic relationships.
                    </p>

                    <div className="mt-6">
                        <h3 className="font-semibold text-slate-900">Node Schema</h3>
                        <CodeBlock code={nodeSchema} language="typescript" />
                    </div>

                    <div className="mt-6">
                        <h3 className="font-semibold text-slate-900">Edge Schema</h3>
                        <CodeBlock code={edgeSchema} language="typescript" />
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">2. Vector Storage (LanceDB)</h2>
                    <p className="mt-4 text-slate-600">
                        Vectors are stored in a separate, embedded LanceDB table named <code>vectors</code>.
                        Each row contains:
                    </p>
                    <ul className="mt-2 list-disc pl-6 text-slate-600 space-y-2">
                        <li><code>id</code>: Matches the <code>embeddingId</code> in SQLite.</li>
                        <li><code>vector</code>: A 384-dimensional float array (from BGE-m3 model).</li>
                        <li><code>text</code>: The original chunk content for re-ranking.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">3. MCP Protocol Integration</h2>
                    <p className="mt-4 text-slate-600">
                        CoDified implements the Model Context Protocol over <code>stdio</code>.
                    </p>
                    <div className="mt-4 bg-slate-900 text-slate-200 p-4 rounded-lg font-mono text-sm">
                        <div>Client -&gt; Request (JSON-RPC) -&gt; stdin</div>
                        <div>stdout &lt;- Response (JSON-RPC) &lt;- Server</div>
                        <div className="text-slate-500 mt-2">// Logs flow exclusively to stderr</div>
                        <div>stderr &lt;- Logger.info() &lt;- Server</div>
                    </div>
                </section>
            </div>
        </div>
    );
}
