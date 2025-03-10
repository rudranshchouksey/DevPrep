import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const sqlExample = `-- Complex SQL Query Example
WITH monthly_revenue AS (
  SELECT
    DATE_TRUNC('month', order_date) as month,
    SUM(amount) as revenue,
    COUNT(DISTINCT customer_id) as unique_customers
  FROM orders
  WHERE status = 'completed'
  GROUP BY 1
),
customer_ltv AS (
  SELECT
    customer_id,
    SUM(amount) as lifetime_value,
    COUNT(order_id) as total_orders
  FROM orders
  GROUP BY customer_id
)
SELECT
  mr.month,
  mr.revenue,
  mr.unique_customers,
  AVG(c.lifetime_value) as avg_customer_ltv
FROM monthly_revenue mr
JOIN orders o ON DATE_TRUNC('month', o.order_date) = mr.month
JOIN customer_ltv c ON o.customer_id = c.customer_id
GROUP BY 1, 2, 3
ORDER BY 1 DESC;`

const nosqlExample = `// MongoDB Aggregation Pipeline
db.orders.aggregate([
  // Match orders from last 30 days
  {
    $match: {
      orderDate: {
        $gte: new Date(Date.now() - 30*24*60*60*1000)
      }
    }
  },
  // Group by product category
  {
    $group: {
      _id: "$category",
      totalSales: { $sum: "$amount" },
      orderCount: { $sum: 1 },
      averageOrderValue: { $avg: "$amount" }
    }
  },
  // Sort by total sales
  {
    $sort: { totalSales: -1 }
  },
  // Add rank field
  {
    $addFields: {
      rank: { $rank: {} }
    }
  }
])`

export default function DatabasesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Database Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Advanced database concepts, query optimization, and real-world examples.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>SQL and Query Optimization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Understanding complex SQL queries and optimization techniques is crucial for building efficient database applications.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Advanced SQL Example:</h3>
            <CodeBlock code={sqlExample} language="sql" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Query planning and execution</li>
              <li>Index optimization</li>
              <li>Common Table Expressions (CTEs)</li>
              <li>Window functions</li>
              <li>Performance tuning</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>NoSQL Databases</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            NoSQL databases provide flexible schema design and horizontal scalability for modern applications.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">MongoDB Aggregation:</h3>
            <CodeBlock code={nosqlExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Database Types:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Document stores (MongoDB)</li>
              <li>Key-value stores (Redis)</li>
              <li>Column-family stores (Cassandra)</li>
              <li>Graph databases (Neo4j)</li>
              <li>Time-series databases (InfluxDB)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}