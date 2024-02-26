function Section1() {
  return (
    <>
      <div className='container'>
        <p className='container_words--desing'>developer</p>
        <svg className='container_svg' viewBox='0 0 960 600'>
          <symbol id='s-text'>
            <text text-anchor='middle' x='50%' y='80%'>
              &
            </text>
          </symbol>

          <g className='g-ants'>
            <use xlinkHref='#s-text' className='text-copy'></use>
            <use xlinkHref='#s-text' className='text-copy'></use>
            <use xlinkHref='#s-text' className='text-copy'></use>
            <use xlinkHref='#s-text' className='text-copy'></use>
            <use xlinkHref='#s-text' className='text-copy'></use>
          </g>
        </svg>
        <p className='container_words--development'>designer</p>
      </div>
    </>
  );
}

export default Section1;
