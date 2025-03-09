import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const loadBalancerExample = `// Nginx Load Balancer Configuration Example
upstream backend {
    least_conn;  # Least connections algorithm
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend;
    }
}`

const cachingExample = `// Redis Caching Implementation
const Redis = require('ioredis');
const redis = new Redis();

async function getCachedData(key) {
  try {
    // Try to get data from cache
    const cachedData = await redis.get(key);
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    // If not in cache, get from database
    const data = await fetchFromDatabase(key);
    
    // Store in cache with expiration
    await redis.setex(key, 3600, JSON.stringify(data));
    
    return data;
  } catch (error) {
    console.error('Cache error:', error);
    return null;
  }
}`

export default function SystemDesignInterviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">System Design Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Essential system design concepts and architectural patterns for scalable applications.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Load Balancing and High Availability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Load balancing is crucial for distributing incoming network traffic across multiple servers
            to ensure high availability and reliability.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Load Balancer Configuration:</h3>
            <CodeBlock code={loadBalancerExample} language="nginx" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Round-robin distribution</li>
              <li>Least connections algorithm</li>
              <li>Health checks</li>
              <li>Session persistence</li>
              <li>SSL termination</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Caching Strategies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Caching improves application performance by storing frequently accessed data in memory.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Caching Implementation:</h3>
            <CodeBlock code={cachingExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Caching Levels:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Browser caching</li>
              <li>CDN caching</li>
              <li>Application caching</li>
              <li>Database caching</li>
              <li>Cache invalidation strategies</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}