interface DataTableProps {
  caption?: string
  headers: string[]
  rows: (string | React.ReactNode)[][]
}

export default function DataTable({ caption, headers, rows }: DataTableProps) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse">
        {caption && (
          <caption className="text-left text-xs text-gray-400 mb-2 uppercase tracking-wider">
            {caption}
          </caption>
        )}
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              className="hover:bg-white/5 transition-colors"
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="py-3 px-4 text-gray-300 align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
