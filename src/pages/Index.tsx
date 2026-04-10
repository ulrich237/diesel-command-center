import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, ListTodo, Bot, FileText, CheckSquare, Users, Calendar,
  FolderKanban, Brain, FileStack, UserCircle, Building2, Users2,
  Settings, Radar, Factory, GitBranch, FlaskConical, MessageSquare,
  Search, Pause, RefreshCw
} from 'lucide-react';
import CommandDeck from '@/components/dashboard/CommandDeck';
import AgentProfiles from '@/components/dashboard/AgentProfiles';
import StrategyBoard from '@/components/dashboard/StrategyBoard';
import AILogs from '@/components/dashboard/AILogs';
import Council from '@/components/dashboard/Council';
import BacktestIntelligence from '@/components/dashboard/BacktestIntelligence';

const navItems = [
  { id: 'command', label: 'Tasks', icon: ListTodo },
  { id: 'agents', label: 'Agents', icon: Bot },
  { id: 'logs', label: 'Content', icon: FileText },
  { id: 'council', label: 'Approvals', icon: CheckSquare },
  { id: 'strategy', label: 'Council', icon: Users },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'backtests', label: 'Memory', icon: Brain },
  { id: 'docs', label: 'Docs', icon: FileStack },
  { id: 'people', label: 'People', icon: UserCircle },
  { id: 'office', label: 'Office', icon: Building2 },
  { id: 'team', label: 'Team', icon: Users2 },
  { id: 'system', label: 'System', icon: Settings },
  { id: 'radar', label: 'Radar', icon: Radar },
  { id: 'factory', label: 'Factory', icon: Factory },
  { id: 'pipeline', label: 'Pipeline', icon: GitBranch },
  { id: 'ailab', label: 'AI Lab', icon: FlaskConical },
  { id: 'feedback', label: 'Feedback', icon: MessageSquare },
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
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Top Header */}
      <header className="h-12 border-b border-border/40 glass-strong flex items-center justify-between px-4 flex-shrink-0 z-50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-heading font-bold text-sm text-foreground">Mission Control</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/50 border border-border/50 text-xs text-muted-foreground font-mono hover:bg-muted transition-colors">
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="ml-2 text-[10px] bg-muted rounded px-1 py-0.5 border border-border/50">⌘K</kbd>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs text-muted-foreground font-mono hover:bg-muted/50 transition-colors">
            <Pause className="w-3.5 h-3.5" />
            <span>Pause</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary relative">
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary animate-ping" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">Online</span>
          </div>
          <button className="p-1.5 rounded-md hover:bg-muted/50 transition-colors text-muted-foreground">
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <nav className="w-[140px] flex-shrink-0 border-r border-border/30 bg-sidebar flex flex-col overflow-y-auto scrollbar-thin py-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const hasContent = !!tabContent[item.id];
            return (
              <button
                key={item.id}
                onClick={() => hasContent && setActiveTab(item.id)}
                className={`flex items-center gap-2.5 px-4 py-2 text-xs transition-colors text-left ${
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-foreground font-medium'
                    : hasContent
                    ? 'text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
                    : 'text-muted-foreground/50 cursor-default'
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto scrollbar-thin">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="p-6"
            >
              {ActiveComponent ? (
                <ActiveComponent />
              ) : (
                <div className="flex items-center justify-center h-[60vh] text-muted-foreground text-sm font-mono">
                  Coming soon
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
