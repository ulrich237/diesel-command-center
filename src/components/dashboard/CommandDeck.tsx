import { motion } from 'framer-motion';
import { agents, activityFeed } from '@/data/agents';
import { Activity, Cpu, BarChart3, Target } from 'lucide-react';

const metrics = [
  { label: 'Active Agents', value: '6 / 7', icon: Cpu, color: 'text-primary' },
  { label: 'Strategies Running', value: '12', icon: Activity, color: 'text-secondary' },
  { label: 'Backtests Today', value: '24', icon: BarChart3, color: 'text-primary' },
  { label: 'System Accuracy', value: '96.4%', icon: Target, color: 'text-secondary' },
];

const statusColor = {
  active: 'bg-primary',
  processing: 'bg-secondary',
  idle: 'bg-muted-foreground',
  standby: 'bg-warning',
};

export default function CommandDeck() {
  return (
    <div className="space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-lg p-5 glow-primary"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{m.label}</span>
              <m.icon className={`w-4 h-4 ${m.color}`} />
            </div>
            <div className="text-2xl font-bold font-heading">{m.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Two columns */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Activity Feed */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-lg p-5"
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Recent Activity</h3>
          <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-thin">
            {activityFeed.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="flex items-start gap-3 text-sm py-2 border-b border-border/30 last:border-0"
              >
                <span className="text-lg flex-shrink-0">{item.agent}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-foreground font-medium">{item.name}</span>
                  <span className="text-muted-foreground"> {item.action}</span>
                </div>
                <span className="text-xs text-muted-foreground flex-shrink-0 font-mono">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Agent Status */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-lg p-5"
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Agent Status</h3>
          <div className="space-y-3">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="flex items-center gap-3 py-2 border-b border-border/30 last:border-0"
              >
                <span className="text-lg">{agent.emoji}</span>
                <div className="relative">
                  <div className={`w-2 h-2 rounded-full ${statusColor[agent.status]}`} />
                  {agent.status === 'active' && (
                    <div className={`absolute inset-0 w-2 h-2 rounded-full ${statusColor[agent.status]} animate-ping`} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{agent.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{agent.currentTask}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs text-muted-foreground font-mono">{agent.lastSeen}</div>
                  <div className="text-xs font-mono text-primary">{agent.confidence}%</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
