import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function useLocoScroll(start) {
    useEffect(() => {
        if(!start) return;

        const scrollEl = document.querySelector('main-container');
        const locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        muiltiplier: 1,
        class: 'is-reveal',
        
        })
    }, [start]);
}