import { motion } from 'framer-motion';
import { strategyBoard } from '@/data/agents';

const priorityColor: Record<string, string> = {
  critical: 'border-l-destructive',
  high: 'border-l-primary',
  medium: 'border-l-secondary',
  low: 'border-l-muted-foreground',
};

const columnColor: Record<string, string> = {
  'To Analyze': 'text-muted-foreground',
  'Coding': 'text-secondary',
  'Backtesting': 'text-primary',
  'Needs Fix': 'text-destructive',
  'Ready': 'text-warning',
  'Deployed': 'text-primary',
};

export default function StrategyBoard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 overflow-x-auto">
      {Object.entries(strategyBoard).map(([column, cards], colIdx) => (
        <motion.div
          key={column}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: colIdx * 0.08 }}
          className="min-w-[180px]"
        >
          <div className="flex items-center justify-between mb-3 px-1">
            <h4 className={`text-xs font-mono uppercase tracking-wider ${columnColor[column]}`}>
              {column}
            </h4>
            <span className="text-[10px] font-mono text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded">
              {cards.length}
            </span>
          </div>
          <div className="space-y-2">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: colIdx * 0.08 + i * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className={`glass rounded-md p-3 border-l-2 ${priorityColor[card.priority]} cursor-grab active:cursor-grabbing hover:glow-primary transition-shadow`}
              >
                <div className="text-sm font-medium">{card.title}</div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg">{card.agent}</span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">{card.priority}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
