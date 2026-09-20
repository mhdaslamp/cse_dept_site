'use client';

import { ReactLenis } from 'lenis/react';

function LenisScroll({ children }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.3,
                wheelMultiplier: 1.3,
                smoothWheel: true,
            }}
        >
            {children}
        </ReactLenis>
    );
}

export default LenisScroll;
