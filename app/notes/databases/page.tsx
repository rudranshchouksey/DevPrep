import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const indexingExample = `-- Create indexes for performance
CREATE INDEX idx_users_email ON users(email);

-- Partial index for active users
CREATE INDEX idx_active_users ON users(id)
WHERE status = 'active';

-- Composite index for common query pattern
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);

-- Explain analyze example
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 5;`

const replicationExample = `# PostgreSQL primary configuration
primary_conninfo = 'host=replica1 port=5432 user=replication password=secret'
wal_level = replica
max_wal_senders = 10
max_replication_slots = 10

# Replica configuration
primary_conninfo = 'host=primary port=5432 user=replication password=secret'
hot_standby = on
hot_standby_feedback = on

# Monitoring replication status
SELECT client_addr, state, sent_lsn, write_lsn, flush_lsn, replay_lsn
FROM pg_stat_replication;`

export default function DatabasesNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Database Notes</h1>
        <p className="text-muted-foreground mt-2">
          Advanced database concepts, optimization techniques, and high availability configurations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Database Indexing and Query Optimization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Proper indexing strategy and query optimization are crucial for database performance.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Indexing Examples:</h3>
            <CodeBlock code={indexingExample} language="sql" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Optimization Techniques:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>B-tree and hash indexes</li>
              <li>Query plan analysis</li>
              <li>Table partitioning</li>
              <li>Materialized views</li>
              <li>Statistics and vacuum</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Replication and High Availability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Database replication ensures high availability and disaster recovery capabilities.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Replication Setup:</h3>
            <CodeBlock code={replicationExample} language="conf" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Synchronous vs asynchronous replication</li>
              <li>Write-ahead logging (WAL)</li>
              <li>Failover and switchover</li>
              <li>Load balancing</li>
              <li>Backup and recovery</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}