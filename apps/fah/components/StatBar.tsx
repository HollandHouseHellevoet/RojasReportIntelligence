interface Stat {
  number: string
  label: string
}

interface StatBarProps {
  stats: Stat[]
}

export default function StatBar({ stats }: StatBarProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        gap: '1.5rem',
      }}
      className="py-8"
    >
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div
            style={{ color: '#EB6E2C', fontFamily: 'var(--font-headline)' }}
            className="text-4xl font-bold mb-1"
          >
            {stat.number}
          </div>
          <div className="text-sm text-gray-400 leading-snug">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
