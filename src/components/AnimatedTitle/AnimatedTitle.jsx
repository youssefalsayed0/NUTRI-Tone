
export default function AnimatedTitle({text , title}) {
  return (
<>
<div className="main-title text-center position-relative">
  <svg
      
      stroke="#bac736"
      opacity="0.3"
      strokeWidth={2}
      className="text-line"
      width="100%"
    >
      <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%" >
      {text}
      </text>
    </svg>
  <h1>{title}</h1>
</div>
  </>
  )
}
