import { useState } from 'react';
import { motion } from 'framer-motion';
import { logs } from '@/data/agents';

const categoryStyle: Record<string, string> = {
  observation: 'bg-primary/15 text-primary border-primary/30',
  warning: 'bg-warning/15 text-warning border-warning/30',
  error: 'bg-destructive/15 text-destructive border-destructive/30',
  execution: 'bg-secondary/15 text-secondary border-secondary/30',
  verification: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
};

const categories = ['all', 'observation', 'warning', 'error', 'execution', 'verification'] as const;

export default function AILogs() {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? logs : logs.filter((l) => l.category === filter);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${
              filter === cat
                ? 'bg-primary/20 text-primary border-primary/40'
                : 'bg-muted/30 text-muted-foreground border-border/50 hover:bg-muted/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-2 max-h-[600px] overflow-y-auto scrollbar-thin">
        {filtered.map((log, i) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            className="glass rounded-md p-4 flex items-start gap-3"
          >
            <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border flex-shrink-0 mt-0.5 ${categoryStyle[log.category]}`}>
              {log.category}
            </span>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium text-foreground">{log.agent}: </span>
              <span className="text-sm text-muted-foreground">{log.message}</span>
            </div>
            <span className="text-xs text-muted-foreground font-mono flex-shrink-0">{log.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
