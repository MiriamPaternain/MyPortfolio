import 'animate.css';
import clickHere from '../../img/click.png';
import { Link } from 'react-router-dom';
import { GiClick } from 'react-icons/gi';

function Section2() {
  return (
    <>
      <div className='section2Container'>
        <Link to='/contact' className='section2Container_link rotate'>
          <section>
            <svg
              className='circleSvg'
              viewBox='0 0 100 100'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                className='circlePath'
                id='circlePath'
                fill='none'
                stroke-width='4'
                stroke='hsl(0 100% 50% / 0.5)'
                d='
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        '
              />
              <text
                id='text'
                font-family='monospace'
                font-size='12'
                font-weight='bold'
                fill='var(--text-1)'>
                <textPath
                  id='textPath'
                  href='#circlePath'
                  className='section2Container_link--text'>
                  CHARLEMOS ✳ CONTACTA ✳ CONTRÁTAME ✳
                </textPath>
              </text>

              <image
                href={clickHere}
                className='section2Container_link--icon'
                x='30'
                y='30'
                width='40'
                height='40'
              />
            </svg>
          </section>
        </Link>
      </div>
    </>
  );
}

export default Section2;
