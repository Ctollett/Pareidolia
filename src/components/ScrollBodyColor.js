import React, { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const ScrollBodyColor = () => {
    const { scroll } = useLocomotiveScroll();

    useEffect(() => {
        scroll.on('scroll', (args) => {
            const { currentElements } = args;

            const scrollPosition = 500;
            const scrollPosition2 = 1000;

            if(currentElements.top > scrollPosition) {
                document.body.backgroundColor = 'white';
            } else if (currentElements.top > scrollPosition2) {
                document.body.backgroundColor = 'black';
            }
        })
        
}, [scroll]);

return null;

};

export default ScrollBodyColor;