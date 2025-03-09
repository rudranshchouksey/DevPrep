import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const eventLoopExample = `const fs = require('fs');

console.log('Start');

// Timer phase
setTimeout(() => {
  console.log('Timer 1');
}, 0);

// I/O phase
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File read');
});

// Check phase (setImmediate)
setImmediate(() => {
  console.log('Immediate');
});

// Promise microtask
Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

// Output order:
// Start
// End
// Promise
// Timer 1
// Immediate
// File read (timing depends on file system)`

const streamExample = `const fs = require('fs');

// Reading large file with streams
const readStream = fs.createReadStream('large-file.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length);
});

readStream.on('end', () => {
  console.log('Finished reading');
});`

export default function NodejsInterviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Node.js Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Essential Node.js concepts and common interview questions with detailed explanations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Explain the Node.js Event Loop</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Event Loop is the mechanism that allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Event Loop Phases Example:</h3>
            <CodeBlock code={eventLoopExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Event Loop Phases:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Timers: setTimeout() and setInterval()</li>
              <li>Pending callbacks: I/O operations</li>
              <li>Idle, prepare: internal use</li>
              <li>Poll: retrieve new I/O events</li>
              <li>Check: setImmediate() callbacks</li>
              <li>Close callbacks: socket.on('close', ...)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Streams in Node.js</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Streams are collections of data that might not be available all at once and don't have to fit in memory.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Stream Implementation:</h3>
            <CodeBlock code={streamExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Types of Streams:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Readable: for reading data (fs.createReadStream)</li>
              <li>Writable: for writing data (fs.createWriteStream)</li>
              <li>Duplex: both readable and writable (net.Socket)</li>
              <li>Transform: modify data while reading/writing (zlib.createGzip)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}