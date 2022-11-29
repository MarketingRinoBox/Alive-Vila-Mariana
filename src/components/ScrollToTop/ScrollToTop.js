import { useEffect } from 'react'
import './ScrollToTop.css'

export default function ScrollToTop() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <div className='scrollToTop'>
            
            <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
        <img src='./scroll-top-top.png' alt='scroll to top'/>
      </button>
        </div>
    )
}