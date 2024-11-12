
import { useLocation } from 'react-router-dom';
import '../styles/style.css';
import { useState, useRef, useEffect } from 'react';
import image from '../images/arrow.png';

function Collapse({title, content}) {
    const [visible, setVisible] = useState(false);

    const contentRef = useRef(null);
    const [height, setHeight] = useState('0px');
    useEffect(() => {
        setHeight(visible ? `${contentRef.current.scrollHeight}px` : '0px');
      }, [visible]);

    const location = useLocation();
    const className = location.pathname.includes('/Apropos') ? 'collapse-container' : 'logement-container';

    return (
        <div className={className} >
            <button className='collapse-button cursor' onClick={() => setVisible(!visible) }>
                <p>{title}</p>
                <img src={image} alt='arrow'  className={visible ?'arrow arrow-up' : 'arrow arrow-down'}></img>
            </button> 
            {visible && <div  ref={contentRef} className='collapse-content' style={{ height, transition: 'height 0.3s ease', overflow: 'hidden' }} key={content.id}>
                <p>{content}</p>
            </div>}
        </div>
    )
}

export default Collapse