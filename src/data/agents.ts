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
    id: 'strategy-decomposer',
    name: 'Strategy Decomposer',
    emoji: '🧠',
    role: 'Break trading courses/videos into structured strategies',
    type: 'Intelligence Agent',
    status: 'active',
    currentTask: 'Parsing ICT Mentorship Module 4',
    lastSeen: '2s ago',
    confidence: 94,
    tasksCompleted: 127,
    accuracy: 96.2,
    capabilities: ['Course parsing', 'Strategy extraction', 'Pattern recognition', 'Concept mapping'],
  },
  {
    id: 'pine-engineer',
    name: 'Pine Script Engineer',
    emoji: '⚙️',
    role: 'Convert strategies into Pine Script / NinjaTrader code',
    type: 'Code Agent',
    status: 'processing',
    currentTask: 'Generating FVG detector v6',
    lastSeen: 'now',
    confidence: 91,
    tasksCompleted: 89,
    accuracy: 93.7,
    capabilities: ['Pine Script v5/v6', 'NinjaScript', 'Indicator coding', 'Alert systems'],
  },
  {
    id: 'backtest-analyst',
    name: 'Backtest Analyst',
    emoji: '📊',
    role: 'Run backtests & evaluate accuracy',
    type: 'Analysis Agent',
    status: 'active',
    currentTask: 'Backtesting NQ scalp strategy',
    lastSeen: '5s ago',
    confidence: 88,
    tasksCompleted: 214,
    accuracy: 91.4,
    capabilities: ['Statistical analysis', 'Walk-forward testing', 'Monte Carlo sim', 'Drawdown analysis'],
  },
  {
    id: 'verification-agent',
    name: 'Verification Agent',
    emoji: '🛡️',
    role: 'Validate logic / prevent hallucinations',
    type: 'Quality Agent',
    status: 'active',
    currentTask: 'Reviewing EMA crossover logic',
    lastSeen: '8s ago',
    confidence: 97,
    tasksCompleted: 156,
    accuracy: 99.1,
    capabilities: ['Logic validation', 'Repaint detection', 'Lookahead bias check', 'Code review'],
  },
  {
    id: 'execution-agent',
    name: 'Execution Agent',
    emoji: '🚀',
    role: 'Deploy strategy to TradingView / NinjaTrader',
    type: 'Execution Agent',
    status: 'idle',
    currentTask: 'Awaiting deployment queue',
    lastSeen: '1m ago',
    confidence: 95,
    tasksCompleted: 43,
    accuracy: 98.6,
    capabilities: ['TradingView deploy', 'NinjaTrader deploy', 'Alert configuration', 'Webhook setup'],
  },
  {
    id: 'automation-controller',
    name: 'Automation Controller',
    emoji: '🤖',
    role: 'OpenClaw orchestration & workflow control',
    type: 'Coordinator',
    status: 'active',
    currentTask: 'Orchestrating pipeline cycle #847',
    lastSeen: 'now',
    confidence: 92,
    tasksCompleted: 847,
    accuracy: 97.3,
    capabilities: ['Workflow orchestration', 'Agent coordination', 'Pipeline management', 'Task scheduling'],
  },
  {
    id: 'data-logger',
    name: 'Data Logger',
    emoji: '🧾',
    role: 'Record results / metrics / improvements',
    type: 'Memory Agent',
    status: 'active',
    currentTask: 'Logging backtest results batch #214',
    lastSeen: '3s ago',
    confidence: 99,
    tasksCompleted: 1893,
    accuracy: 99.8,
    capabilities: ['Metrics tracking', 'Result archiving', 'Performance trends', 'Improvement logging'],
  },
];

export const activityFeed = [
  { agent: '🧠', name: 'Strategy Decomposer', action: 'parsed ICT Mentorship Module 4', time: '2s ago', type: 'success' as const },
  { agent: '⚙️', name: 'Pine Agent', action: 'generated Pine v6 FVG script', time: '15s ago', type: 'success' as const },
  { agent: '📊', name: 'Backtest Agent', action: 'completed NQ scalp test — 63% WR', time: '32s ago', type: 'success' as const },
  { agent: '🛡️', name: 'Verification Agent', action: 'flagged repainting issue in EMA script', time: '1m ago', type: 'warning' as const },
  { agent: '🚀', name: 'Execution Agent', action: 'deployed momentum strategy to TV', time: '2m ago', type: 'success' as const },
  { agent: '🤖', name: 'Automation Controller', action: 'completed pipeline cycle #846', time: '3m ago', type: 'success' as const },
  { agent: '🧾', name: 'Data Logger', action: 'archived 12 backtest results', time: '4m ago', type: 'success' as const },
  { agent: '🧠', name: 'Strategy Decomposer', action: 'extracted 3 new setups from volume profile course', time: '5m ago', type: 'success' as const },
  { agent: '⚙️', name: 'Pine Agent', action: 'refactored CCI multi-timeframe indicator', time: '7m ago', type: 'success' as const },
  { agent: '🛡️', name: 'Verification Agent', action: 'approved NQ breakout strategy logic', time: '8m ago', type: 'success' as const },
];

export const logs = [
  { id: 1, category: 'verification' as const, agent: 'Verification Agent', message: 'Strategy logic mismatch detected in EMA crossover — possible lookahead bias', time: '12s ago' },
  { id: 2, category: 'observation' as const, agent: 'Backtest Agent', message: 'Win rate improved to 63.2% after parameter optimization on NQ 5min', time: '45s ago' },
  { id: 3, category: 'execution' as const, agent: 'Execution Agent', message: 'Script deployed to TradingView — momentum_breakout_v3.pine', time: '1m ago' },
  { id: 4, category: 'observation' as const, agent: 'Automation Agent', message: 'Workflow cycle #846 completed — all agents reported nominal', time: '2m ago' },
  { id: 5, category: 'warning' as const, agent: 'Pine Engineer', message: 'Pine Script v5 deprecation warning — migrating to v6 syntax', time: '3m ago' },
  { id: 6, category: 'error' as const, agent: 'Backtest Agent', message: 'Insufficient data for ES 1min backtest — need minimum 500 bars', time: '4m ago' },
  { id: 7, category: 'verification' as const, agent: 'Verification Agent', message: 'Confirmed: FVG detector passes repaint check on all timeframes', time: '5m ago' },
  { id: 8, category: 'execution' as const, agent: 'Execution Agent', message: 'Alert webhook configured for NQ scalp strategy', time: '6m ago' },
  { id: 9, category: 'observation' as const, agent: 'Strategy Decomposer', message: 'Identified 4 high-probability setups from order flow module', time: '8m ago' },
  { id: 10, category: 'warning' as const, agent: 'Automation Controller', message: 'Pipeline queue depth above threshold — 7 tasks pending', time: '10m ago' },
];

export const strategyBoard = {
  'To Analyze': [
    { id: 's1', title: 'Convert FVG strategy', priority: 'high', agent: '🧠' },
    { id: 's2', title: 'Parse order block patterns', priority: 'medium', agent: '🧠' },
  ],
  'Coding': [
    { id: 's3', title: 'Add multi timeframe CCI filter', priority: 'high', agent: '⚙️' },
    { id: 's4', title: 'Build volume profile indicator', priority: 'medium', agent: '⚙️' },
  ],
  'Backtesting': [
    { id: 's5', title: 'NQ momentum breakout', priority: 'high', agent: '📊' },
    { id: 's6', title: 'ES mean reversion scalp', priority: 'medium', agent: '📊' },
  ],
  'Needs Fix': [
    { id: 's7', title: 'Fix repainting issue', priority: 'critical', agent: '🛡️' },
  ],
  'Ready': [
    { id: 's8', title: 'Optimize EMA parameters', priority: 'low', agent: '⚙️' },
    { id: 's9', title: 'CCI divergence strategy', priority: 'medium', agent: '📊' },
  ],
  'Deployed': [
    { id: 's10', title: 'Deploy NQ strategy', priority: 'high', agent: '🚀' },
    { id: 's11', title: 'SPY breakout v2', priority: 'medium', agent: '🚀' },
    { id: 's12', title: 'ES trend follower', priority: 'low', agent: '🚀' },
  ],
};

export const councilSession = {
  question: 'Is the FVG momentum strategy repainting on lower timeframes?',
  participants: [
    {
      agent: agents[0],
      reasoning: 'The strategy references historical FVG zones that were identified in real-time. The zone detection itself does not repaint, but the entry trigger uses a confirmation candle that could shift on live data. I recommend adding `barstate.isconfirmed` checks.',
      verdict: 'Conditional Pass',
    },
    {
      agent: agents[1],
      reasoning: 'From a code perspective, the script uses `request.security()` with `lookahead=barmerge.lookahead_off` which is correct. However, line 47 references `close` without bar confirmation. This could cause the last bar to flicker. Fix is straightforward — wrap in barstate check.',
      verdict: 'Needs Minor Fix',
    },
    {
      agent: agents[3],
      reasoning: 'I ran the repaint detection suite against this strategy. On 5min NQ data, 3 out of 200 signals shifted on bar close vs. real-time feed. This is within acceptable tolerance but technically constitutes minor repainting. The fix suggested by Pine Engineer would resolve this.',
      verdict: 'Minor Repaint Detected',
    },
    {
      agent: agents[2],
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
