export default function Garland() {
  const bulbs = [
    { left: '7%', color: 'red' },
    { left: '20%', color: 'yellow' },
    { left: '46%', color: 'blue' },
    { left: '60%', color: 'green' },
    { left: '83%', color: 'pink' },
  ]

  return (
    <div className="garland">
      {bulbs.map((b, i) => (
        <div
          key={i}
          className={`bulb bulb-${b.color}`}
          style={{
            left: b.left,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  )
}
