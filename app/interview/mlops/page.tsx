import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const modelTrackingExample = `# MLflow Experiment Tracking
import mlflow

def train_model(params):
    mlflow.start_run()
    try:
        # Log parameters
        mlflow.log_params(params)
        
        # Train model
        model = RandomForestClassifier(**params)
        model.fit(X_train, y_train)
        
        # Log metrics
        accuracy = model.score(X_test, y_test)
        mlflow.log_metric("accuracy", accuracy)
        
        # Save model
        mlflow.sklearn.log_model(model, "model")
    finally:
        mlflow.end_run()`

const cicdExample = `# GitHub Actions workflow for ML pipeline
name: ML Pipeline

on: [push]

jobs:
  train:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
      - name: Install dependencies
        run: |
          pip install -r requirements.txt
      - name: Run tests
        run: pytest tests/
      - name: Train model
        run: python train.py
      - name: Evaluate model
        run: python evaluate.py
      - name: Deploy model
        if: github.ref == 'refs/heads/main'
        run: python deploy.py`

export default function MLOpsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">MLOps Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Best practices for deploying and maintaining machine learning systems in production.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Experiment Tracking and Model Registry</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Tracking experiments and managing model versions is crucial for reproducibility and collaboration in ML projects.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">MLflow Implementation:</h3>
            <CodeBlock code={modelTrackingExample} language="python" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Components:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Parameter tracking</li>
              <li>Metric logging</li>
              <li>Model versioning</li>
              <li>Artifact storage</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>CI/CD for Machine Learning</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Implementing continuous integration and deployment pipelines for ML projects ensures reliable and automated model updates.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">GitHub Actions Example:</h3>
            <CodeBlock code={cicdExample} language="yaml" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Pipeline Stages:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Data validation</li>
              <li>Model training</li>
              <li>Testing and evaluation</li>
              <li>Deployment automation</li>
              <li>Monitoring setup</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}