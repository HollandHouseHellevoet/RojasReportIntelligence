export type ThreatLevel = 'Low' | 'Moderate' | 'High' | 'Critical'

const styles: Record<ThreatLevel, React.CSSProperties> = {
  Low: { background: 'rgba(34,197,94,0.15)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' },
  Moderate: { background: 'rgba(234,179,8,0.15)', color: '#facc15', border: '1px solid rgba(234,179,8,0.3)' },
  High: { background: 'rgba(249,115,22,0.15)', color: '#fb923c', border: '1px solid rgba(249,115,22,0.3)' },
  Critical: { background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)' },
}

interface ThreatTagProps {
  level: ThreatLevel
}

export default function ThreatTag({ level }: ThreatTagProps) {
  return (
    <span
      style={{
        ...styles[level],
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}
    >
      {level}
    </span>
  )
}
