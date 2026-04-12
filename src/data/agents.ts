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
    currentTask: 'Orchestrating pipeline cycle #847',
    lastSeen: 'now',
    confidence: 92,
    tasksCompleted: 847,
    accuracy: 97.3,
    capabilities: ['Task routing', 'Agent assignment', 'Workflow enforcement', 'Handoff management'],
  },
  {
    id: 'strategy-decomposer',
    name: 'Saga',
    emoji: '📚',
    role: 'Strategy-Course Decomposer — Breaks down videos/courses into structured modules',
    type: 'Intelligence Agent',
    status: 'active',
    currentTask: 'Parsing ICT Mentorship Module 4',
    lastSeen: '2s ago',
    confidence: 94,
    tasksCompleted: 127,
    accuracy: 96.2,
    capabilities: ['Course parsing', 'Variant separation', 'Rule extraction', 'Concept mapping'],
  },
  {
    id: 'strategy-analyst',
    name: 'Mimir',
    emoji: '🧠',
    role: 'Strategy Analyst — Converts raw ideas into code-ready trading specifications',
    type: 'Analysis Agent',
    status: 'processing',
    currentTask: 'Extracting entry/exit rules from FVG course',
    lastSeen: 'now',
    confidence: 91,
    tasksCompleted: 156,
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
    currentTask: 'Generating FVG detector v6',
    lastSeen: '5s ago',
    confidence: 93,
    tasksCompleted: 189,
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
    currentTask: 'Awaiting error reports',
    lastSeen: '1m ago',
    confidence: 95,
    tasksCompleted: 312,
    accuracy: 97.8,
    capabilities: ['Error parsing', 'Code repair', 'Patch generation', 'Compile verification'],
  },
  {
    id: 'verification-auditor',
    name: 'Tyr',
    emoji: '🛡️',
    role: 'Verification Auditor — Detects hallucinations and checks spec compliance',
    type: 'Quality Agent',
    status: 'active',
    currentTask: 'Reviewing EMA crossover logic',
    lastSeen: '8s ago',
    confidence: 97,
    tasksCompleted: 234,
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
    currentTask: 'Planning webhook integration for NQ strategy',
    lastSeen: '12s ago',
    confidence: 89,
    tasksCompleted: 67,
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
    currentTask: 'Reviewing slippage sensitivity on NQ scalp',
    lastSeen: '30s ago',
    confidence: 96,
    tasksCompleted: 89,
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
    currentTask: 'Archiving solved Pine errors batch #42',
    lastSeen: '3s ago',
    confidence: 99,
    tasksCompleted: 1893,
    accuracy: 99.8,
    capabilities: ['Pattern storage', 'Error cataloging', 'Knowledge indexing', 'Lesson retention'],
  },
];

export const activityFeed = [
  { agent: '⚔️', name: 'Ragnar', action: 'assigned Mimir to FVG task', time: '2s ago', type: 'success' as const },
  { agent: '📚', name: 'Saga', action: 'extracted 3 variants from ICT course', time: '15s ago', type: 'success' as const },
  { agent: '🧠', name: 'Mimir', action: 'completed spec for NQ momentum breakout', time: '32s ago', type: 'success' as const },
  { agent: '⚙️', name: 'Brokk', action: 'generated Pine v6 FVG script', time: '45s ago', type: 'success' as const },
  { agent: '🐛', name: 'Eir', action: 'fixed array bounds error in CCI indicator', time: '1m ago', type: 'success' as const },
  { agent: '🛡️', name: 'Tyr', action: 'flagged repainting issue in EMA script', time: '2m ago', type: 'warning' as const },
  { agent: '🚀', name: 'Ivar', action: 'designed webhook payload for alerts', time: '3m ago', type: 'success' as const },
  { agent: '⚠️', name: 'Heimdall', action: 'approved NQ scalp for paper trading', time: '4m ago', type: 'success' as const },
  { agent: '🧾', name: 'Bragi', action: 'stored CE10013 error fix pattern', time: '5m ago', type: 'success' as const },
];

export const logs = [
  { id: 1, category: 'verification' as const, agent: 'Tyr', message: 'Strategy logic mismatch detected in EMA crossover — possible lookahead bias', time: '12s ago' },
  { id: 2, category: 'observation' as const, agent: 'Mimir', message: 'Ambiguity detected in course material — multiple exit interpretations possible', time: '45s ago' },
  { id: 3, category: 'execution' as const, agent: 'Ivar', message: 'Webhook design complete — NQ momentum_breakout_v3 ready for automation', time: '1m ago' },
  { id: 4, category: 'observation' as const, agent: 'Ragnar', message: 'Workflow cycle #847 started — 4 agents assigned', time: '2m ago' },
  { id: 5, category: 'warning' as const, agent: 'Heimdall', message: 'Win rate >70% without slippage accounting — possible overfitting risk', time: '3m ago' },
  { id: 6, category: 'error' as const, agent: 'Eir', message: 'CE10013 array index error — fix applied and verified', time: '4m ago' },
  { id: 7, category: 'verification' as const, agent: 'Tyr', message: 'FVG detector passes repaint check on all timeframes', time: '5m ago' },
  { id: 8, category: 'execution' as const, agent: 'Ivar', message: 'Alert webhook configured for NQ scalp strategy', time: '6m ago' },
  { id: 9, category: 'observation' as const, agent: 'Bragi', message: 'Stored pattern: for-loop array bounds checking in Pine v6', time: '8m ago' },
  { id: 10, category: 'warning' as const, agent: 'Saga', message: 'Course contains 3 strategy variants — split before implementation', time: '10m ago' },
];

export const strategyBoard = {
  'To Analyze': [
    { id: 's1', title: 'Convert FVG strategy from course', priority: 'high', agent: '🧠' },
    { id: 's2', title: 'Parse order block patterns', priority: 'medium', agent: '📚' },
  ],
  'Spec Ready': [
    { id: 's3', title: 'NQ momentum breakout — awaiting Brokk', priority: 'high', agent: '⚙️' },
    { id: 's4', title: 'ES mean reversion spec complete', priority: 'medium', agent: '⚙️' },
  ],
  'Coding': [
    { id: 's5', title: 'Add multi timeframe CCI filter', priority: 'high', agent: '⚙️' },
    { id: 's6', title: 'Build volume profile indicator', priority: 'medium', agent: '⚙️' },
  ],
  'Debugging': [
    { id: 's7', title: 'Fix CE10013 array bounds error', priority: 'critical', agent: '🐛' },
  ],
  'Verification': [
    { id: 's8', title: 'Audit NQ breakout for repaint', priority: 'high', agent: '🛡️' },
  ],
  'Execution Plan': [
    { id: 's9', title: 'Design webhook for ES strategy', priority: 'medium', agent: '🚀' },
  ],
  'Risk Review': [
    { id: 's10', title: 'Review slippage on NQ scalp', priority: 'high', agent: '⚠️' },
  ],
  'Ready': [
    { id: 's11', title: 'CCI divergence — approved', priority: 'low', agent: '✓' },
  ],
  'Deployed': [
    { id: 's12', title: 'Momentum strategy live on TV', priority: 'high', agent: '🚀' },
  ],
};

export const councilSession = {
  question: 'Is the FVG momentum strategy repainting on lower timeframes?',
  participants: [
    {
      agent: agents[2],
      reasoning: 'The strategy references historical FVG zones that were identified in real-time. The zone detection itself does not repaint, but the entry trigger uses a confirmation candle that could shift on live data. I recommend adding `barstate.isconfirmed` checks.',
      verdict: 'Conditional Pass',
    },
    {
      agent: agents[3],
      reasoning: 'From a code perspective, the script uses `request.security()` with `lookahead=barmerge.lookahead_off` which is correct. However, line 47 references `close` without bar confirmation. This could cause the last bar to flicker. Fix is straightforward — wrap in barstate check.',
      verdict: 'Needs Minor Fix',
    },
    {
      agent: agents[5],
      reasoning: 'I ran the repaint detection suite against this strategy. On 5min NQ data, 3 out of 200 signals shifted on bar close vs. real-time feed. This is within acceptable tolerance but technically constitutes minor repainting. The fix suggested by Brokk would resolve this.',
      verdict: 'Minor Repaint Detected',
    },
    {
      agent: agents[7],
      reasoning: 'Backtest results show consistent performance whether using confirmed bars or not, suggesting the repaint impact is minimal on P&L. However, for signal accuracy reporting, we should apply the fix to ensure backtested signals match live signals exactly.',
      verdict: 'Low Impact — Fix Recommended',
    },
  ],
};

export const backtestResults = [
  { id: 'b1', strategy: 'NQ Momentum Breakout', instrument: 'NQ', timeframe: '5min', winRate: 63.2, profitFactor: 1.87, trades: 147, maxDrawdown: 4.2, status: 'completed' as const, sharpe: 1.42 },
  { id: 'b2', strategy: 'ES Mean Reversion', instrument: 'ES', timeframe: '15min', winRate: 58.9, profitFactor: 1.54, trades: 89, maxDrawdown: 6.1, status: 'completed' as const, sharpe: 1.18 },
  { id: 'b3', strategy: 'SPY Breakout v2', instrument: 'SPY', timeframe: '1h', winRate: 67.4, profitFactor: 2.13, trades: 62, maxDrawdown: 3.8, status: 'completed' as const, sharpe: 1.67 },
  { id: 'b4', strategy: 'FVG Detector NQ', instrument: 'NQ', timeframe: '5min', winRate: 54.1, profitFactor: 1.31, trades: 203, maxDrawdown: 7.3, status: 'running' as const, sharpe: 0.94 },
  { id: 'b5', strategy: 'CCI Divergence', instrument: 'ES', timeframe: '30min', winRate: 61.8, profitFactor: 1.72, trades: 44, maxDrawdown: 5.5, status: 'completed' as const, sharpe: 1.35 },
  { id: 'b6', strategy: 'EMA Crossover Trend', instrument: 'NQ', timeframe: '15min', winRate: 55.3, profitFactor: 1.42, trades: 178, maxDrawdown: 8.1, status: 'queued' as const, sharpe: 1.05 },
];