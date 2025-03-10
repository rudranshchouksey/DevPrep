import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const dockerExample = `# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

# Docker Compose
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: myapp`

const cicdExample = `# GitHub Actions workflow
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run lint

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        uses: some-deploy-action@v1
        with:
          token: \${{ secrets.DEPLOY_TOKEN }}`

export default function DevOpsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">DevOps Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Essential DevOps practices, tools, and implementation examples.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Containerization with Docker</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Docker is a platform for developing, shipping, and running applications in containers.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Docker Configuration:</h3>
            <CodeBlock code={dockerExample} language="dockerfile" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Container orchestration</li>
              <li>Image layering</li>
              <li>Multi-stage builds</li>
              <li>Volume management</li>
              <li>Network configuration</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>CI/CD Pipelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Continuous Integration and Continuous Deployment (CI/CD) automates the building, testing, and deployment of applications.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">GitHub Actions Example:</h3>
            <CodeBlock code={cicdExample} language="yaml" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Pipeline Components:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Automated testing</li>
              <li>Code quality checks</li>
              <li>Security scanning</li>
              <li>Deployment automation</li>
              <li>Monitoring and alerts</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}