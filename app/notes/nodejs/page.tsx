import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const clusterExample = `const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
  });
} else {
  // Workers share the TCP connection
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\\n');
  }).listen(8000);

  console.log(\`Worker \${process.pid} started\`);
}`

const debuggingExample = `// Start app with debugging enabled
// node --inspect app.js

const app = require('express')();

app.get('/', (req, res) => {
  debugger; // Breakpoint
  const result = complexCalculation();
  res.json({ result });
});

// Debug with console
console.log('Basic logging');
console.debug('Debug information');
console.warn('Warning message');
console.error('Error message');
console.trace('Stack trace');`

export default function NodejsNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Node.js Notes</h1>
        <p className="text-muted-foreground mt-2">
          Advanced Node.js concepts, performance optimization, and debugging techniques.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Clustering and Process Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Node.js clustering allows you to create child processes that share server ports, enabling better use of multi-core systems.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Cluster Implementation:</h3>
            <CodeBlock code={clusterExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Benefits:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Improved performance on multi-core systems</li>
              <li>Automatic load balancing of requests</li>
              <li>Better fault tolerance and reliability</li>
              <li>Zero downtime deployments</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Debugging and Profiling</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Node.js provides powerful built-in tools for debugging and profiling applications.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Debugging Example:</h3>
            <CodeBlock code={debuggingExample} language="javascript" />
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Built-in debugger with Chrome DevTools integration</li>
            <li>Memory heap snapshots and CPU profiles</li>
            <li>Performance monitoring with process.hrtime()</li>
            <li>Core dump analysis for crash debugging</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}