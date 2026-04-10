import { motion } from 'framer-motion';
import { agents } from '@/data/agents';
import { Badge } from '@/components/ui/badge';

const statusVariant: Record<string, string> = {
  active: 'bg-primary/20 text-primary border-primary/30',
  processing: 'bg-secondary/20 text-secondary border-secondary/30',
  idle: 'bg-muted text-muted-foreground border-border',
  standby: 'bg-warning/20 text-warning border-warning/30',
};

export default function AgentProfiles() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {agents.map((agent, i) => (
        <motion.div
          key={agent.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.07 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className="glass rounded-lg p-5 flex flex-col gap-4 group hover:glow-primary transition-shadow duration-300"
        >
          <div className="flex items-start justify-between">
            <span className="text-3xl">{agent.emoji}</span>
            <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${statusVariant[agent.status]}`}>
              {agent.status}
            </span>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground">{agent.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{agent.role}</p>
          </div>

          <div className="text-xs text-muted-foreground font-mono">
            <span className="text-primary">{agent.type}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <div className="text-muted-foreground">Tasks</div>
              <div className="font-mono font-semibold text-foreground">{agent.tasksCompleted}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Accuracy</div>
              <div className="font-mono font-semibold text-primary">{agent.accuracy}%</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {agent.capabilities.map((cap) => (
              <Badge key={cap} variant="secondary" className="text-[10px] bg-muted/50 text-muted-foreground border-border/50">
                {cap}
              </Badge>
            ))}
          </div>

          <button className="mt-auto text-xs text-secondary font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-left hover:underline">
            View Agent Details →
          </button>
        </motion.div>
      ))}
    </div>
  );
}
