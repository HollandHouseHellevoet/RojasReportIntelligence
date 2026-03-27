interface PullQuoteProps {
  quote: string
  attribution: string
}

export default function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <blockquote
      className="my-8 pl-6 py-2"
      style={{ borderLeft: '2px solid #EB6E2C' }}
    >
      <p
        className="text-xl italic leading-relaxed mb-3"
        style={{ color: '#f7f4ef', fontFamily: 'var(--font-headline)' }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <cite className="text-sm text-gray-400 not-italic">
        &mdash; {attribution}
      </cite>
    </blockquote>
  )
}
