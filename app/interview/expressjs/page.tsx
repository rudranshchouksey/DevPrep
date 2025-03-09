import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const middlewareExample = `const express = require('express');
const app = express();

// Custom middleware example
const requestLogger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url} at \${new Date()}\`);
  next();
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
};

app.use(requestLogger);
app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.use(errorHandler);`

const routingExample = `const express = require('express');
const router = express.Router();

// Route parameters
router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId });
});

// Query strings
router.get('/search', (req, res) => {
  const { q, page } = req.query;
  res.json({ query: q, page });
});

// Multiple route handlers
router.route('/posts')
  .get((req, res) => {
    res.json({ posts: [] });
  })
  .post((req, res) => {
    res.json({ message: 'Post created' });
  });

module.exports = router;`

export default function ExpressInterviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Express.js Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Essential Express.js concepts and common interview questions with detailed explanations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Explain Middleware in Express.js</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Middleware functions are functions that have access to the request object (req), 
            the response object (res), and the next middleware function in the application's request-response cycle.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Middleware Implementation:</h3>
            <CodeBlock code={middlewareExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Types of Middleware:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Application-level middleware (app.use)</li>
              <li>Router-level middleware (router.use)</li>
              <li>Error-handling middleware</li>
              <li>Built-in middleware (express.json, express.static)</li>
              <li>Third-party middleware (cors, morgan)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Routing in Express.js</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Express provides a robust routing system for handling HTTP requests with different methods and URLs.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Routing Examples:</h3>
            <CodeBlock code={routingExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Route parameters and pattern matching</li>
              <li>Query string handling</li>
              <li>Route handlers and middleware</li>
              <li>Router-level middleware</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}