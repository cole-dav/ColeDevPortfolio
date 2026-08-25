import React from 'react'
import styled, { keyframes } from 'styled-components'

const flicker = keyframes`
    0% { opacity: 0.94; }
    50% { opacity: 1; }
    100% { opacity: 0.96; }
`;

const scan = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 0 100%; }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    pointer-events: none;
    animation: ${flicker} 6s infinite;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.15) 0px,
            rgba(0, 0, 0, 0.15) 1px,
            transparent 2px,
            transparent 3px
        );
        background-size: 100% 3px;
        animation: ${scan} 9s linear infinite;
        mix-blend-mode: multiply;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.35) 100%
        );
    }
`;

function CrtEffect({ enabled }) {
    if (!enabled) {
        return null;
    }
    return <Overlay />
}

export default CrtEffect
