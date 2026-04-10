import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import CommandDeck from '@/components/dashboard/CommandDeck';
import AgentProfiles from '@/components/dashboard/AgentProfiles';
import StrategyBoard from '@/components/dashboard/StrategyBoard';
import AILogs from '@/components/dashboard/AILogs';
import Council from '@/components/dashboard/Council';
import BacktestIntelligence from '@/components/dashboard/BacktestIntelligence';

const tabs = [
  { id: 'command', label: 'Command Deck' },
  { id: 'agents', label: 'Agents' },
  { id: 'strategy', label: 'Strategy Board' },
  { id: 'logs', label: 'AI Logs' },
  { id: 'council', label: 'Council' },
  { id: 'backtests', label: 'Backtests' },
];

const tabContent: Record<string, React.FC> = {
  command: CommandDeck,
  agents: AgentProfiles,
  strategy: StrategyBoard,
  logs: AILogs,
  council: Council,
  backtests: BacktestIntelligence,
};

export default function Index() {
  const [activeTab, setActiveTab] = useState('command');

  const ActiveComponent = tabContent[activeTab];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 glass-strong sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-heading font-bold text-lg text-foreground">Diesel Multi-Agent System</span>
              </div>
              <span className="hidden sm:block text-xs text-muted-foreground font-mono">AI Trading Mission Control</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary relative">
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary animate-ping" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  Trading System: <span className="text-primary">Online</span>
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground hidden md:block">Last cycle: just now</span>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <nav className="border-b border-border/30 bg-background/80 backdrop-blur-sm sticky top-[57px] z-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-thin py-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2.5 text-sm font-mono whitespace-nowrap transition-colors rounded-md ${
                  activeTab === tab.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
