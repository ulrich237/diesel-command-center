export interface Agent {
  id: string;
  name: string;
  emoji: string;
  role: string;
  type: string;
  status: 'active' | 'idle' | 'processing' | 'standby';
  currentTask: string;
  lastSeen: string;
  confidence: number;
  tasksCompleted: number;
  accuracy: number;
  capabilities: string[];
}

export const agents: Agent[] = [
  {
    id: 'mission-commander',
    name: 'Ragnar',
    emoji: '⚔️',
    role: 'Mission Commander — Routes work, assigns agents, enforces workflow discipline',
    type: 'Coordinator',
    status: 'active',
    currentTask: 'Coordinated MK strategy workflow — 5 agents deployed',
    lastSeen: 'now',
    confidence: 92,
    tasksCompleted: 1,
    accuracy: 97.3,
    capabilities: ['Task routing', 'Agent assignment', 'Workflow enforcement', 'Handoff management'],
  },
  {
    id: 'strategy-decomposer',
    name: 'Saga',
    emoji: '📚',
    role: 'Strategy-Course Decomposer — Breaks down videos/courses into structured modules',
    type: 'Intelligence Agent',
    status: 'idle',
    currentTask: 'Completed MK course analysis (6 chapters, 20 videos, 50+ rules)',
    lastSeen: '2s ago',
    confidence: 94,
    tasksCompleted: 1,
    accuracy: 96.2,
    capabilities: ['Course parsing', 'Variant separation', 'Rule extraction', 'Concept mapping'],
  },
  {
    id: 'strategy-analyst',
    name: 'Mimir',
    emoji: '🧠',
    role: 'Strategy Analyst — Converts raw ideas into code-ready trading specifications',
    type: 'Analysis Agent',
    status: 'idle',
    currentTask: 'Completed MK_EASY_SUPPLY_DEMAND_PINBAR spec (20+ inputs, 7 alerts)',
    lastSeen: 'now',
    confidence: 91,
    tasksCompleted: 1,
    accuracy: 94.5,
    capabilities: ['Spec extraction', 'Logic structuring', 'Ambiguity detection', 'Multi-variant handling'],
  },
  {
    id: 'pine-architect',
    name: 'Brokk',
    emoji: '⚙️',
    role: 'Pine Architect — Writes clean Pine Script from structured specifications',
    type: 'Code Agent',
    status: 'idle',
    currentTask: 'Generated MK strategy v2 — 687 lines of Pine Script v6',
    lastSeen: '5s ago',
    confidence: 93,
    tasksCompleted: 1,
    accuracy: 95.1,
    capabilities: ['Pine Script v5/v6', 'Indicator coding', 'Strategy coding', 'Alert systems'],
  },
  {
    id: 'pine-debugger',
    name: 'Eir',
    emoji: '🐛',
    role: 'Pine Debugger — Fixes compiler errors using exact error feedback',
    type: 'Debug Agent',
    status: 'idle',
    currentTask: 'Fixed zone-tested logic inversion + added gap detection',
    lastSeen: '1m ago',
    confidence: 95,
    tasksCompleted: 1,
    accuracy: 97.8,
    capabilities: ['Error parsing', 'Code repair', 'Patch generation', 'Compile verification'],
  },
  {
    id: 'verification-auditor',
    name: 'Tyr',
    emoji: '🛡️',
    role: 'Verification Auditor — Detects hallucinations and checks spec compliance',
    type: 'Quality Agent',
    status: 'idle',
    currentTask: 'Audited MK strategy — found inverted zone logic (CRITICAL)',
    lastSeen: '8s ago',
    confidence: 97,
    tasksCompleted: 1,
    accuracy: 99.1,
    capabilities: ['Logic validation', 'Repaint detection', 'Hallucination spotting', 'Proof checking'],
  },
  {
    id: 'execution-planner',
    name: 'Ivar',
    emoji: '🚀',
    role: 'Execution Planner — Creates automation-ready operational workflows',
    type: 'Execution Agent',
    status: 'standby',
    currentTask: 'Awaiting deployment request',
    lastSeen: '12s ago',
    confidence: 89,
    tasksCompleted: 0,
    accuracy: 94.2,
    capabilities: ['Deployment planning', 'Webhook design', 'Alert setup', 'Broker integration'],
  },
  {
    id: 'risk-guardian',
    name: 'Heimdall',
    emoji: '⚠️',
    role: 'Risk Guardian — Reviews trading and operational risks before live deployment',
    type: 'Safety Agent',
    status: 'standby',
    currentTask: 'Awaiting risk review request',
    lastSeen: '30s ago',
    confidence: 96,
    tasksCompleted: 0,
    accuracy: 98.9,
    capabilities: ['Risk assessment', 'Overfitting detection', 'Slippage analysis', 'Safeguard design'],
  },
  {
    id: 'memory-librarian',
    name: 'Bragi',
    emoji: '🧾',
    role: 'Memory Librarian — Stores reusable knowledge for system improvement',
    type: 'Memory Agent',
    status: 'active',
    currentTask: 'Documented zone inversion bug + security incident prevention',
    lastSeen: '3s ago',
    confidence: 99,
    tasksCompleted: 2,
    accuracy: 99.8,
    capabilities: ['Pattern storage', 'Error cataloging', 'Knowledge indexing', 'Lesson retention'],
  },
];

export const activityFeed = [
  { agent: '⚔️', name: 'Ragnar', action: 'deployed 5-agent workflow for MK strategy', time: '2 days ago', type: 'success' as const },
  { agent: '📚', name: 'Saga', action: 'analyzed MK course — 6 chapters, 50+ rules extracted', time: '2 days ago', type: 'success' as const },
  { agent: '🧠', name: 'Mimir', action: 'completed MK_EASY_SUPPLY_DEMAND_PINBAR spec', time: '2 days ago', type: 'success' as const },
  { agent: '⚙️', name: 'Brokk', action: 'generated 687 lines of Pine Script v6', time: '2 days ago', type: 'success' as const },
  { agent: '🛡️', name: 'Tyr', action: 'audited strategy — found CRITICAL zone logic bug', time: '2 days ago', type: 'warning' as const },
  { agent: '🐛', name: 'Eir', action: 'fixed zone-tested inversion + gap detection', time: '2 days ago', type: 'success' as const },
  { agent: '🧾', name: 'Bragi', action: 'documented security incident prevention', time: '1 day ago', type: 'success' as const },
  { agent: '⚔️', name: 'Ragnar', action: 'approved MK strategy v2 for deployment', time: '1 day ago', type: 'success' as const },
  { agent: '🧾', name: 'Bragi', action: 'created 6 memory system improvements', time: '1 day ago', type: 'success' as const },
];

export const logs = [
  { id: 1, category: 'verification' as const, agent: 'Tyr', message: 'CRITICAL: Zone tested logic inverted — zones marked tested on touch instead of body close beyond', time: '2 days ago' },
  { id: 2, category: 'observation' as const, agent: 'Saga', message: 'MK course: 6 target folders identified (Ch 8-10 Supply/Demand, Ch 12-14 Price Action)', time: '2 days ago' },
  { id: 3, category: 'execution' as const, agent: 'Brokk', message: 'MK strategy v2 deployed — 687 lines, VWAP + zones + pin bars + 7 alerts', time: '2 days ago' },
  { id: 4, category: 'observation' as const, agent: 'Ragnar', message: 'Workflow complete: Saga → Mimir → Brokk → Tyr → Eir — all agents reported DONE', time: '2 days ago' },
  { id: 5, category: 'warning' as const, agent: 'Bragi', message: 'Security incident documented: local model (14B) + web tools caused session disconnect', time: '1 day ago' },
  { id: 6, category: 'error' as const, agent: 'Eir', message: 'Fixed zone-tested logic — changed from inside-zone to body-close-beyond', time: '2 days ago' },
  { id: 7, category: 'verification' as const, agent: 'Tyr', message: 'MK strategy audit: CONDITIONAL PASS — core features implemented, bug fixed', time: '2 days ago' },
  { id: 8, category: 'execution' as const, agent: 'Bragi', message: 'Memory system overhaul complete: 6 improvements, 2 cron jobs active', time: '1 day ago' },
  { id: 9, category: 'observation' as const, agent: 'Ragnar', message: 'Agent naming convention established: Viking theme (Ragnar, Saga, Mimir, Brokk, Eir, Tyr, Ivar, Heimdall, Bragi)', time: '2 days ago' },
  { id: 10, category: 'warning' as const, agent: 'Tyr', message: 'Gap-through-zone detection added per spec requirement', time: '2 days ago' },
];

export const strategyBoard = {
  'To Analyze': [
    { id: 's1', title: 'MK Medium/Hard variants', priority: 'medium', agent: '📚' },
  ],
  'Spec Ready': [
    { id: 's2', title: 'MK EASY spec complete — 20+ inputs documented', priority: 'high', agent: '🧠' },
  ],
  'Coding': [
    { id: 's3', title: 'MK strategy v2 — 687 lines Pine Script', priority: 'high', agent: '⚙️' },
  ],
  'Debugging': [
    { id: 's4', title: 'Zone-tested logic inversion — FIXED', priority: 'critical', agent: '🐛' },
  ],
  'Verification': [
    { id: 's5', title: 'Tyr audit: CONDITIONAL PASS', priority: 'high', agent: '🛡️' },
  ],
  'Execution Plan': [
    { id: 's6', title: 'TradingView deployment — pending', priority: 'medium', agent: '🚀' },
  ],
  'Risk Review': [
    { id: 's7', title: 'Heimdall review — pending', priority: 'medium', agent: '⚠️' },
  ],
  'Ready': [
    { id: 's8', title: 'MK_EASY_SUPPLY_DEMAND_PINBAR v2', priority: 'high', agent: '✓' },
  ],
  'Deployed': [
    { id: 's9', title: 'Memory system overhaul', priority: 'high', agent: '🧾' },
  ],
};

export const councilSession = {
  question: 'Is the MK_EASY_SUPPLY_DEMAND_PINBAR strategy ready for deployment?',
  participants: [
    {
      agent: agents[2],
      reasoning: 'Spec is complete with 20+ inputs, 7 alerts, and clear entry/exit rules. All EASY level requirements from Maurice Kenny course (Ch 8 + Ch 12) are implemented.',
      verdict: 'PASS — Spec Complete',
    },
    {
      agent: agents[3],
      reasoning: '687 lines of Pine Script v6. VWAP, zone detection, pin bar scanner, entry/exit logic all implemented. Fixed zone-tested inversion bug.',
      verdict: 'PASS — Code Complete',
    },
    {
      agent: agents[5],
      reasoning: 'Found CRITICAL bug: zone-tested logic was inverted. Eir fixed it. Added gap-through-zone detection. All other features match spec.',
      verdict: 'CONDITIONAL PASS — Bug Fixed',
    },
    {
      agent: agents[8],
      reasoning: 'Documented zone inversion fix in CRITICAL_FIXES.md. Created prevention checklist. Security incident (local model crash) also documented.',
      verdict: 'PASS — Knowledge Preserved',
    },
  ],
};

export const backtestResults = [
  { id: 'b1', strategy: 'MK_EASY_SUPPLY_DEMAND_PINBAR', instrument: 'NQ', timeframe: '5min', winRate: 75.0, profitFactor: 2.1, trades: 0, maxDrawdown: 0.0, status: 'running' as const, sharpe: 0.0 },
];
