export default function Splash() {
  return (
    <>
      <div className="splash d-flex align-items-center justify-content-center text-white">
        <div className="box d-flex align-items-center justify-content-center flex-column">
          <svg
            width={600}
            height={200}
            viewBox="0 0 600 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <symbol id="text-copy">
              <text
                textAnchor="middle"
                x="50%"
                y="50%"
                dy=".40em"
                className="text--line"
              >
                NUTRI-TONE
              </text>
            </symbol>
            <g className="g-ants">
              <use xlinkHref="#text-copy" className="text-copy" id="outline" />
              <use xlinkHref="#text-copy" className="text-copy" id="fill" />
            </g>
          </svg>
          <p className="caption mt-5 fs-3 text-uppercase">MAKE DIET EASY</p>
        </div>
      </div>
    </>
  );
}
