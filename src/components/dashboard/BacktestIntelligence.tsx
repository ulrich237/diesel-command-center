import { motion } from 'framer-motion';
import { backtestResults } from '@/data/agents';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

const kpis = [
  { label: 'Total Backtests', value: '24' },
  { label: 'Avg Win Rate', value: '60.1%' },
  { label: 'Best Strategy', value: 'SPY Breakout v2' },
  { label: 'Avg Profit Factor', value: '1.67' },
];

const chartData = backtestResults.filter(b => b.status === 'completed').map(b => ({
  name: b.strategy.split(' ').slice(0, 2).join(' '),
  winRate: b.winRate,
  profitFactor: b.profitFactor,
  drawdown: b.maxDrawdown,
  sharpe: b.sharpe,
}));

const statusStyle: Record<string, string> = {
  completed: 'bg-primary/15 text-primary border-primary/30',
  running: 'bg-secondary/15 text-secondary border-secondary/30 animate-pulse-glow',
  queued: 'bg-muted text-muted-foreground border-border',
};

export default function BacktestIntelligence() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-lg p-4"
          >
            <div className="text-xs text-muted-foreground">{kpi.label}</div>
            <div className="text-xl font-bold font-heading mt-1">{kpi.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="glass rounded-lg p-5">
          <h4 className="text-xs font-mono uppercase text-muted-foreground mb-4">Win Rate by Strategy</h4>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 10% 16%)" />
              <XAxis dataKey="name" tick={{ fill: 'hsl(215 15% 55%)', fontSize: 10 }} />
              <YAxis tick={{ fill: 'hsl(215 15% 55%)', fontSize: 10 }} />
              <Tooltip contentStyle={{ background: 'hsl(240 15% 8%)', border: '1px solid hsl(240 10% 16%)', borderRadius: 8, fontSize: 12, color: 'hsl(210 20% 92%)' }} />
              <Bar dataKey="winRate" fill="hsl(160 84% 39%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="glass rounded-lg p-5">
          <h4 className="text-xs font-mono uppercase text-muted-foreground mb-4">Drawdown Analysis</h4>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 10% 16%)" />
              <XAxis dataKey="name" tick={{ fill: 'hsl(215 15% 55%)', fontSize: 10 }} />
              <YAxis tick={{ fill: 'hsl(215 15% 55%)', fontSize: 10 }} />
              <Tooltip contentStyle={{ background: 'hsl(240 15% 8%)', border: '1px solid hsl(240 10% 16%)', borderRadius: 8, fontSize: 12, color: 'hsl(210 20% 92%)' }} />
              <Area type="monotone" dataKey="drawdown" stroke="hsl(0 84% 60%)" fill="hsl(0 84% 60% / 0.15)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Backtest Results Table */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="glass rounded-lg p-5">
        <h4 className="text-xs font-mono uppercase text-muted-foreground mb-4">Backtest Results</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground font-mono uppercase border-b border-border/30">
                <th className="text-left py-2 pr-4">Strategy</th>
                <th className="text-left py-2 pr-4">Instrument</th>
                <th className="text-left py-2 pr-4">TF</th>
                <th className="text-right py-2 pr-4">Win Rate</th>
                <th className="text-right py-2 pr-4">PF</th>
                <th className="text-right py-2 pr-4">Trades</th>
                <th className="text-right py-2 pr-4">Sharpe</th>
                <th className="text-right py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {backtestResults.map((bt) => (
                <tr key={bt.id} className="border-b border-border/20 hover:bg-muted/10 transition-colors">
                  <td className="py-2.5 pr-4 font-medium">{bt.strategy}</td>
                  <td className="py-2.5 pr-4 font-mono text-secondary">{bt.instrument}</td>
                  <td className="py-2.5 pr-4 font-mono text-muted-foreground">{bt.timeframe}</td>
                  <td className="py-2.5 pr-4 text-right font-mono text-primary">{bt.winRate}%</td>
                  <td className="py-2.5 pr-4 text-right font-mono">{bt.profitFactor}</td>
                  <td className="py-2.5 pr-4 text-right font-mono text-muted-foreground">{bt.trades}</td>
                  <td className="py-2.5 pr-4 text-right font-mono">{bt.sharpe}</td>
                  <td className="py-2.5 text-right">
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${statusStyle[bt.status]}`}>
                      {bt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
