import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const linearRegressionExample = `import numpy as np

class LinearRegression:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None
        
    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        for _ in range(self.n_iterations):
            y_predicted = np.dot(X, self.weights) + self.bias
            
            # Gradient descent
            dw = (1/n_samples) * np.dot(X.T, (y_predicted - y))
            db = (1/n_samples) * np.sum(y_predicted - y)
            
            # Update parameters
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
            
    def predict(self, X):
        return np.dot(X, self.weights) + self.bias`

const knnExample = `class KNearestNeighbors:
    def __init__(self, k=3):
        self.k = k
        
    def fit(self, X, y):
        self.X_train = X
        self.y_train = y
        
    def predict(self, X):
        predictions = []
        for x in X:
            # Calculate distances
            distances = np.sqrt(np.sum((self.X_train - x)**2, axis=1))
            # Get k nearest samples
            k_indices = np.argsort(distances)[:self.k]
            k_nearest_labels = self.y_train[k_indices]
            # Majority vote
            most_common = np.bincount(k_nearest_labels).argmax()
            predictions.append(most_common)
        return np.array(predictions)`

export default function MachineLearningPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Machine Learning Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Essential machine learning algorithms, concepts, and implementations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Linear Regression</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Linear regression is a fundamental supervised learning algorithm used for predicting continuous values based on input features.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation:</h3>
            <CodeBlock code={linearRegressionExample} language="python" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Gradient Descent Optimization</li>
              <li>Mean Squared Error Loss</li>
              <li>Feature Scaling</li>
              <li>Bias-Variance Tradeoff</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>K-Nearest Neighbors (KNN)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            KNN is a versatile algorithm used for both classification and regression tasks, based on the principle that similar data points exist in close proximity.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation:</h3>
            <CodeBlock code={knnExample} language="python" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Important Considerations:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Choice of K value</li>
              <li>Distance metrics</li>
              <li>Curse of dimensionality</li>
              <li>Computational complexity</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}