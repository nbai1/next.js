export default function Board() {
  const rows = Array.from({ length: 10 })
  const cols = Array.from({ length: 9 })

  return (
    <div style={{ display: 'inline-block', border: '1px solid #000' }}>
      {rows.map((_, r) => (
        <div key={r} style={{ display: 'flex' }}>
          {cols.map((_, c) => (
            <div
              key={c}
              style={{ width: 40, height: 40, border: '1px solid #ccc' }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
