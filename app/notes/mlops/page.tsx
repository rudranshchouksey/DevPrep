import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const mlflowExample = `import mlflow
import mlflow.sklearn
from sklearn.model_selection import cross_val_score

# Set tracking URI
mlflow.set_tracking_uri("http://localhost:5000")
mlflow.set_experiment("random-forest-experiment")

# Start MLflow run
with mlflow.start_run():
    # Log parameters
    mlflow.log_param("n_estimators", rf.n_estimators)
    mlflow.log_param("max_depth", rf.max_depth)
    
    # Train and evaluate
    scores = cross_val_score(rf, X, y, cv=5)
    
    # Log metrics
    mlflow.log_metric("accuracy_mean", scores.mean())
    mlflow.log_metric("accuracy_std", scores.std())
    
    # Log model
    mlflow.sklearn.log_model(rf, "model")`

const kubeflowExample = `apiVersion: "kubeflow.org/v1"
kind: PyTorchJob
metadata:
  name: pytorch-training
spec:
  pytorchReplicaSpecs:
    Master:
      replicas: 1
      restartPolicy: OnFailure
      template:
        spec:
          containers:
            - name: pytorch
              image: pytorch-training:latest
              resources:
                limits:
                  nvidia.com/gpu: 1
    Worker:
      replicas: 2
      restartPolicy: OnFailure
      template:
        spec:
          containers:
            - name: pytorch
              image: pytorch-training:latest
              resources:
                limits:
                  nvidia.com/gpu: 1`

export default function MLOpsNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">MLOps Notes</h1>
        <p className="text-muted-foreground mt-2">
          Best practices for deploying and managing machine learning systems in production.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>MLflow for Experiment Tracking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            MLflow is an open-source platform for managing the ML lifecycle, including experimentation, reproducibility, and deployment.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Tracking Example:</h3>
            <CodeBlock code={mlflowExample} language="python" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Experiment tracking and versioning</li>
              <li>Model packaging and deployment</li>
              <li>Parameter and metric logging</li>
              <li>Artifact storage and management</li>
              <li>Model registry and serving</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Kubeflow for ML Orchestration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Kubeflow is a machine learning toolkit for Kubernetes, making deployments of ML workflows portable and scalable.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Configuration Example:</h3>
            <CodeBlock code={kubeflowExample} language="yaml" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Components:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Pipeline orchestration</li>
              <li>Distributed training</li>
              <li>Hyperparameter tuning</li>
              <li>Model serving</li>
              <li>Notebook management</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}