import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const cnnExample = `import torch
import torch.nn as nn

class ConvNet(nn.Module):
    def __init__(self):
        super(ConvNet, self).__init__()
        self.conv1 = nn.Conv2d(1, 32, 3)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(32, 64, 3)
        self.fc1 = nn.Linear(64 * 12 * 12, 128)
        self.fc2 = nn.Linear(128, 10)
        self.relu = nn.ReLU()
        
    def forward(self, x):
        x = self.pool(self.relu(self.conv1(x)))
        x = self.pool(self.relu(self.conv2(x)))
        x = x.view(-1, 64 * 12 * 12)
        x = self.relu(self.fc1(x))
        x = self.fc2(x)
        return x`

const transformerExample = `class TransformerBlock(nn.Module):
    def __init__(self, embed_dim, num_heads):
        super().__init__()
        self.attention = nn.MultiheadAttention(embed_dim, num_heads)
        self.norm1 = nn.LayerNorm(embed_dim)
        self.norm2 = nn.LayerNorm(embed_dim)
        self.feed_forward = nn.Sequential(
            nn.Linear(embed_dim, 4 * embed_dim),
            nn.ReLU(),
            nn.Linear(4 * embed_dim, embed_dim)
        )
        
    def forward(self, x):
        # Self-attention
        attended = self.attention(x, x, x)[0]
        x = self.norm1(x + attended)
        
        # Feed forward
        fed_forward = self.feed_forward(x)
        return self.norm2(x + fed_forward)`

export default function DeepLearningPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Deep Learning Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Advanced deep learning architectures, concepts, and implementations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Convolutional Neural Networks (CNN)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            CNNs are specialized neural networks designed for processing grid-like data, particularly effective for image recognition tasks.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">PyTorch Implementation:</h3>
            <CodeBlock code={cnnExample} language="python" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Components:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Convolutional layers</li>
              <li>Pooling layers</li>
              <li>Activation functions</li>
              <li>Fully connected layers</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transformer Architecture</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Transformers have revolutionized natural language processing through their self-attention mechanism and parallel processing capabilities.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation:</h3>
            <CodeBlock code={transformerExample} language="python" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Architecture Components:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Multi-head attention</li>
              <li>Layer normalization</li>
              <li>Position-wise feed-forward networks</li>
              <li>Residual connections</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}