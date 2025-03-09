import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const microservicesExample = `// User Service
@Service
class UserService {
  async createUser(userData) {
    // Create user
    const user = await this.userRepository.create(userData);
    
    // Publish event
    await this.eventBus.publish('USER_CREATED', {
      userId: user.id,
      email: user.email
    });
    
    return user;
  }
}

// Email Service (subscribing to events)
@EventSubscriber('USER_CREATED')
class EmailService {
  async handleUserCreated(event) {
    await this.sendWelcomeEmail(event.email);
  }
}`

const apiGatewayExample = `// API Gateway Configuration
const gateway = {
  routes: [
    {
      path: '/api/users',
      service: 'user-service',
      methods: ['GET', 'POST'],
      auth: true,
      rateLimit: {
        windowMs: 15 * 60 * 1000,
        max: 100
      }
    },
    {
      path: '/api/products',
      service: 'product-service',
      methods: ['GET'],
      cache: {
        ttl: 3600,
        strategy: 'LRU'
      }
    }
  ]
}`

export default function SystemDesignNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">System Design Notes</h1>
        <p className="text-muted-foreground mt-2">
          Advanced system design patterns, architectures, and best practices.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Microservices Architecture</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Microservices architecture breaks down applications into small, independent services
            that communicate through well-defined APIs.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Service Implementation:</h3>
            <CodeBlock code={microservicesExample} language="typescript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Principles:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Service independence</li>
              <li>Event-driven communication</li>
              <li>Data consistency patterns</li>
              <li>Service discovery</li>
              <li>Circuit breakers</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Gateway Pattern</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            API Gateway serves as a single entry point for all clients, handling cross-cutting concerns
            and routing requests to appropriate services.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Gateway Configuration:</h3>
            <CodeBlock code={apiGatewayExample} language="javascript" />
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Request routing</li>
            <li>Authentication and authorization</li>
            <li>Rate limiting</li>
            <li>Response caching</li>
            <li>Request/response transformation</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}