import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const securityExample = `const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

// CORS configuration
const cors = require('cors');
app.use(cors({
  origin: 'https://example.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));`

const authenticationExample = `const jwt = require('jsonwebtoken');

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Protected route
app.get('/api/profile', authenticate, (req, res) => {
  res.json({ user: req.user });
});`

export default function ExpressNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Express.js Notes</h1>
        <p className="text-muted-foreground mt-2">
          Advanced Express.js concepts, security best practices, and authentication patterns.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Security Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Implementing proper security measures is crucial for Express.js applications in production.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Security Implementation:</h3>
            <CodeBlock code={securityExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Security Measures:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Helmet for HTTP headers security</li>
              <li>Rate limiting to prevent brute force attacks</li>
              <li>CORS configuration for API security</li>
              <li>Input validation and sanitization</li>
              <li>Security headers and best practices</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Authentication and Authorization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Implementing secure authentication and authorization in Express.js applications.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">JWT Authentication Example:</h3>
            <CodeBlock code={authenticationExample} language="javascript" />
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>JWT-based authentication</li>
            <li>Role-based access control</li>
            <li>Session management</li>
            <li>OAuth and social authentication</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}