import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const pytorchExample = `import torch
import torch.nn as nn
import torch.optim as optim

class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.conv1 = nn.Conv2d(1, 32, 3)
        self.conv2 = nn.Conv2d(32, 64, 3)
        self.fc1 = nn.Linear(64 * 12 * 12, 128)
        self.fc2 = nn.Linear(128, 10)
        
    def forward(self, x):
        x = F.relu(self.conv1(x))
        x = F.max_pool2d(x, 2)
        x = F.relu(self.conv2(x))
        x = F.max_pool2d(x, 2)
        x = x.view(-1, 64 * 12 * 12)
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return F.log_softmax(x, dim=1)

# Training loop
model = CNN()
optimizer = optim.Adam(model.parameters())
criterion = nn.CrossEntropyLoss()

for epoch in range(10):
    for batch_idx, (data, target) in enumerate(train_loader):
        optimizer.zero_grad()
        output = model(data)
        loss = criterion(output, target)
        loss.backward()
        optimizer.step()`

const transformerExample = `import torch.nn as nn

class TransformerBlock(nn.Module):
    def __init__(self, embed_dim, num_heads, ff_dim, dropout=0.1):
        super().__init__()
        self.attention = nn.MultiheadAttention(embed_dim, num_heads)
        self.ff = nn.Sequential(
            nn.Linear(embed_dim, ff_dim),
            nn.ReLU(),
            nn.Linear(ff_dim, embed_dim)
        )
        self.norm1 = nn.LayerNorm(embed_dim)
        self.norm2 = nn.LayerNorm(embed_dim)
        self.dropout = nn.Dropout(dropout)
        
    def forward(self, x):
        # Self-attention
        attended = self.attention(x, x, x)[0]
        x = self.norm1(x + self.dropout(attended))
        
        # Feed forward
        feedforward = self.ff(x)
        x = self.norm2(x + self.dropout(feedforward))
        
        return x`

export default function DeepLearningNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Deep Learning Notes</h1>
        <p className="text-muted-foreground mt-2">
          Advanced deep learning architectures, training techniques, and implementation examples.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Convolutional Neural Networks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            CNNs are specialized neural networks designed for processing grid-like data, particularly effective for image recognition tasks.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">PyTorch Implementation:</h3>
            <CodeBlock code={pytorchExample} language="python" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Architecture Components:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Convolutional layers</li>
              <li>Pooling layers</li>
              <li>Activation functions</li>
              <li>Fully connected layers</li>
              <li>Batch normalization</li>
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
            <h3 className="font-semibold">Key Components:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Multi-head attention</li>
              <li>Position-wise feed-forward networks</li>
              <li>Layer normalization</li>
              <li>Residual connections</li>
              <li>Positional encoding</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}