import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { councilSession } from '@/data/agents';
import { ChevronDown } from 'lucide-react';

export default function Council() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-lg p-6 glow-secondary"
      >
        <div className="text-xs font-mono uppercase tracking-wider text-secondary mb-2">Council Question</div>
        <h3 className="text-lg font-heading font-semibold text-foreground">
          "{councilSession.question}"
        </h3>
        <div className="flex gap-2 mt-3">
          {councilSession.participants.map((p) => (
            <span key={p.agent.id} className="text-xl" title={p.agent.name}>{p.agent.emoji}</span>
          ))}
        </div>
      </motion.div>

      <div className="space-y-3">
        {councilSession.participants.map((p, i) => (
          <motion.div
            key={p.agent.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-muted/20 transition-colors"
            >
              <span className="text-xl">{p.agent.emoji}</span>
              <div className="flex-1">
                <div className="text-sm font-medium">{p.agent.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{p.verdict}</div>
              </div>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${expanded === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-0">
                    <div className="border-t border-border/30 pt-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.reasoning}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
