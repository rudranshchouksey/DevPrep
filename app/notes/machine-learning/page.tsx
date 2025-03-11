import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const linearRegressionExample = `import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Prepare data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate model
print(f"Coefficient: {model.coef_[0]:.2f}")
print(f"Intercept: {model.intercept_:.2f}")
print(f"R² Score: {model.score(X_test, y_test):.2f}")`

const randomForestExample = `from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Create and train model
rf_model = RandomForestClassifier(
    n_estimators=100,
    max_depth=10,
    random_state=42
)
rf_model.fit(X_train, y_train)

# Make predictions
y_pred = rf_model.predict(X_test)

# Feature importance
feature_importance = pd.DataFrame({
    'feature': feature_names,
    'importance': rf_model.feature_importances_
}).sort_values('importance', ascending=False)

# Print classification report
print(classification_report(y_test, y_pred))`

export default function MachineLearningNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Machine Learning Notes</h1>
        <p className="text-muted-foreground mt-2">
          Comprehensive guide to machine learning algorithms, techniques, and best practices.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Linear Regression Implementation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Linear regression is a fundamental supervised learning algorithm used for predicting continuous values.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation Example:</h3>
            <CodeBlock code={linearRegressionExample} language="python" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Model training and evaluation</li>
              <li>Feature scaling and preprocessing</li>
              <li>Cross-validation techniques</li>
              <li>Regularization methods</li>
              <li>Model assumptions and diagnostics</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Random Forest Classification</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Random Forest is an ensemble learning method that combines multiple decision trees for improved prediction accuracy.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation Example:</h3>
            <CodeBlock code={randomForestExample} language="python" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Advanced Topics:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Hyperparameter tuning</li>
              <li>Feature importance analysis</li>
              <li>Handling imbalanced datasets</li>
              <li>Out-of-bag error estimation</li>
              <li>Ensemble methods comparison</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}