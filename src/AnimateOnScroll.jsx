import React, { useEffect, useRef, useState } from 'react';

export default function AnimateOnScroll({ children, className = '' }) {
    const domRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.disconnect(); };
    }, []);

    return (
        <div ref={domRef} className={`animate-on-scroll ${isVisible ? 'visible' : ''} ${className}`}>
            {children}
        </div>
    );
}