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
    currentTask: 'Assigned Brokk to code MEDIUM + HARD variants',
    lastSeen: 'now',
    confidence: 92,
    tasksCompleted: 2,
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
    currentTask: 'Completed MK MEDIUM (14.6KB) and MK HARD (20.8KB) specs',
    lastSeen: 'now',
    confidence: 91,
    tasksCompleted: 2,
    accuracy: 94.5,
    capabilities: ['Spec extraction', 'Logic structuring', 'Ambiguity detection', 'Multi-variant handling'],
  },
  {
    id: 'pine-architect',
    name: 'Brokk',
    emoji: '⚙️',
    role: 'Pine Architect — Writes clean Pine Script from structured specifications',
    type: 'Code Agent',
    status: 'processing',
    currentTask: 'Generating MK MEDIUM and MK HARD Pine Script variants',
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
  { agent: '🧠', name: 'Mimir', action: 'completed MK MEDIUM (14.6KB) and MK HARD (20.8KB) specs', time: '1m ago', type: 'success' as const },
  { agent: '⚔️', name: 'Ragnar', action: 'assigned Brokk to code MEDIUM + HARD variants', time: '1m ago', type: 'success' as const },
  { agent: '⚙️', name: 'Brokk', action: 'generating Pine Script for MEDIUM and HARD variants', time: '1m ago', type: 'success' as const },
  { agent: '📚', name: 'Saga', action: 'analyzed MK course — 6 chapters, 50+ rules extracted', time: '2 days ago', type: 'success' as const },
  { agent: '🧠', name: 'Mimir', action: 'completed MK_EASY_SUPPLY_DEMAND_PINBAR spec', time: '2 days ago', type: 'success' as const },
  { agent: '⚙️', name: 'Brokk', action: 'generated 687 lines of Pine Script v6', time: '2 days ago', type: 'success' as const },
  { agent: '🛡️', name: 'Tyr', action: 'audited strategy — found CRITICAL zone logic bug', time: '2 days ago', type: 'warning' as const },
  { agent: '🐛', name: 'Eir', action: 'fixed zone-tested inversion + gap detection', time: '2 days ago', type: 'success' as const },
  { agent: '⚔️', name: 'Ragnar', action: 'approved MK strategy v2 for deployment', time: '1 day ago', type: 'success' as const },
];

export const logs = [
  { id: 1, category: 'execution' as const, agent: 'Mimir', message: 'DONE: MK MEDIUM (14.6KB) and MK HARD (20.8KB) specs complete', time: '1m ago' },
  { id: 2, category: 'observation' as const, agent: 'Ragnar', message: 'Handoff: Mimir → Brokk for MEDIUM + HARD Pine Script implementation', time: '1m ago' },
  { id: 3, category: 'execution' as const, agent: 'Brokk', message: 'Processing MEDIUM spec: minor zones, 3 confirmations, VWAP interference', time: '1m ago' },
  { id: 4, category: 'execution' as const, agent: 'Brokk', message: 'Processing HARD spec: zone flips, power hour, false breakouts', time: '1m ago' },
  { id: 5, category: 'verification' as const, agent: 'Tyr', message: 'CRITICAL: Zone tested logic inverted — zones marked tested on touch instead of body close beyond', time: '2 days ago' },
  { id: 6, category: 'observation' as const, agent: 'Saga', message: 'MK course: 6 target folders identified (Ch 8-10 Supply/Demand, Ch 12-14 Price Action)', time: '2 days ago' },
  { id: 7, category: 'execution' as const, agent: 'Brokk', message: 'MK strategy v2 deployed — 687 lines, VWAP + zones + pin bars + 7 alerts', time: '2 days ago' },
  { id: 8, category: 'observation' as const, agent: 'Ragnar', message: 'Workflow complete: Saga → Mimir → Brokk → Tyr → Eir — all agents reported DONE', time: '2 days ago' },
  { id: 9, category: 'warning' as const, agent: 'Bragi', message: 'Security incident documented: local model (14B) + web tools caused session disconnect', time: '1 day ago' },
  { id: 10, category: 'error' as const, agent: 'Eir', message: 'Fixed zone-tested logic — changed from inside-zone to body-close-beyond', time: '2 days ago' },
];

export const strategyBoard = {
  'To Analyze': [],
  'Spec Ready': [
    { id: 's1', title: 'MK EASY spec complete — 20+ inputs documented', priority: 'high', agent: '🧠' },
    { id: 's2', title: 'MK MEDIUM spec — 14.6KB (minor zones, 3 confirmations)', priority: 'high', agent: '🧠' },
    { id: 's3', title: 'MK HARD spec — 20.8KB (zone flips, power hour)', priority: 'high', agent: '🧠' },
  ],
  'Coding': [
    { id: 's4', title: 'MK strategy v2 — 687 lines Pine Script', priority: 'high', agent: '⚙️' },
    { id: 's5', title: 'MK MEDIUM Pine Script — in progress', priority: 'high', agent: '⚙️' },
    { id: 's6', title: 'MK HARD Pine Script — in progress', priority: 'high', agent: '⚙️' },
  ],
  'Debugging': [
    { id: 's7', title: 'Zone-tested logic inversion — FIXED', priority: 'critical', agent: '🐛' },
  ],
  'Verification': [
    { id: 's8', title: 'Tyr audit: CONDITIONAL PASS', priority: 'high', agent: '🛡️' },
  ],
  'Execution Plan': [
    { id: 's9', title: 'TradingView deployment — pending', priority: 'medium', agent: '🚀' },
  ],
  'Risk Review': [
    { id: 's10', title: 'Heimdall review — pending', priority: 'medium', agent: '⚠️' },
  ],
  'Ready': [
    { id: 's11', title: 'MK_EASY_SUPPLY_DEMAND_PINBAR v2', priority: 'high', agent: '✓' },
  ],
  'Deployed': [
    { id: 's12', title: 'Memory system overhaul', priority: 'high', agent: '🧾' },
  ],
};

export const councilSession = {
  question: 'Should we proceed with MEDIUM and HARD variants?',
  participants: [
    {
      agent: agents[0],
      reasoning: 'EASY strategy is complete and verified. User has requested MEDIUM and HARD variants. This extends the MK strategy suite for progressive difficulty trading.',
      verdict: 'Proceed — Assign Mimir',
    },
    {
      agent: agents[2],
      reasoning: 'Source material analyzed by Saga. Ch 9+13 (MEDIUM) and Ch 10+14 (HARD) contain sufficient rules for specification. Will create full specs with inputs, alerts, and implementation notes.',
      verdict: 'Ready — Will deliver both specs',
    },
    {
      agent: agents[3],
      reasoning: 'Awaiting specs. Once Mimir delivers, can implement MEDIUM and HARD variants. May reuse EASY core logic with additional filters and conditions.',
      verdict: 'Standby — Ready to code',
    },
    {
      agent: agents[5],
      reasoning: 'Will audit both variants after Brokk implements. Learned from EASY audit — will verify zone logic specifically.',
      verdict: 'Monitor — Audit pending',
    },
  ],
};

export const backtestResults = [
  { id: 'b1', strategy: 'MK_EASY_SUPPLY_DEMAND_PINBAR', instrument: 'NQ', timeframe: '5min', winRate: 75.0, profitFactor: 2.1, trades: 0, maxDrawdown: 0.0, status: 'running' as const, sharpe: 0.0 },
];
