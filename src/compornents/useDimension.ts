import React, {useEffect, useState} from "react";

export function useDimension(ref: React.RefObject<HTMLElement>) {
    const [dimensions, setDimensions] = useState({width: 0, height: 0});
    const RESET_TIMEOUT = 100;
    useEffect(() => {
        const testDimensions = () => {
            if (ref.current) {
                setDimensions({
                    width: ref.current.offsetWidth,
                    height: ref.current.offsetHeight
                });
            }
        }
        let movement_timer: any = null;

        const handleResize = () => {
            clearInterval(movement_timer);
            movement_timer = setTimeout(testDimensions, RESET_TIMEOUT);
        }
        window.addEventListener('resize', handleResize);
        testDimensions();
        return () => window.removeEventListener("resize", handleResize);

    }, [ref]);
    return dimensions;
}
