function Section1() {
  return (
    <>
      <div className='container'>
        <p className='container_words--development'>developer</p>
        <svg className='container_svg' viewBox='0 0 500 250'>
          <symbol id='s-text'>
            <text text-anchor='middle' x='50%' y='120%'>
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
        <p className='container_words--design'>designer</p>
      </div>
    </>
  );
}

export default Section1;
