import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const kubernetesExample = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nodejs-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nodejs
  template:
    metadata:
      labels:
        app: nodejs
    spec:
      containers:
      - name: nodejs
        image: my-nodejs-app:1.0
        ports:
        - containerPort: 3000
        resources:
          limits:
            cpu: "1"
            memory: "512Mi"
          requests:
            cpu: "0.5"
            memory: "256Mi"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10`

const terraformExample = `# AWS Infrastructure as Code
provider "aws" {
  region = "us-west-2"
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "production"
  }
}

resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
  
  tags = {
    Name = "public"
  }
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public.id
  
  tags = {
    Name = "web-server"
  }
}`

export default function DevOpsNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">DevOps Notes</h1>
        <p className="text-muted-foreground mt-2">
          Comprehensive guide to DevOps practices, tools, and infrastructure management.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Kubernetes Orchestration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Kubernetes is a container orchestration platform that automates the deployment, scaling, and management of containerized applications.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Deployment Configuration:</h3>
            <CodeBlock code={kubernetesExample} language="yaml" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Core Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Pods and containers</li>
              <li>Services and networking</li>
              <li>ConfigMaps and Secrets</li>
              <li>StatefulSets and DaemonSets</li>
              <li>Horizontal Pod Autoscaling</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Infrastructure as Code</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Infrastructure as Code (IaC) enables automated provisioning and management of cloud resources through code.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Terraform Example:</h3>
            <CodeBlock code={terraformExample} language="hcl" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Best Practices:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Version control for infrastructure</li>
              <li>Modular design</li>
              <li>State management</li>
              <li>Security and compliance</li>
              <li>Cost optimization</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}