'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
    // Only render on client and non-touch devices
    const [isVisible, setIsVisible] = useState(false);
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    // Refs for direct DOM manipulation (better performance than state for high-frequency updates)
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    // Cursor position state
    const pos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Check if device supports hover (usually mouse devices)
        const checkDevice = () => {
            if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                setIsVisible(true);
            }
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        // Add hover listeners to interactive elements
        const handleLinkHover = () => setIsHoveringLink(true);
        const handleLinkLeave = () => setIsHoveringLink(false);

        const addLinkListeners = () => {
            document.querySelectorAll('a, button, input, textarea, select, [role="button"]').forEach(el => {
                el.addEventListener('mouseenter', handleLinkHover);
                el.addEventListener('mouseleave', handleLinkLeave);
            });
        };

        // Initial add
        addLinkListeners();

        // Observer for dynamic content
        const observer = new MutationObserver(addLinkListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('resize', checkDevice);
            observer.disconnect();
            document.querySelectorAll('a, button, input, textarea, select, [role="button"]').forEach(el => {
                el.removeEventListener('mouseenter', handleLinkHover);
                el.removeEventListener('mouseleave', handleLinkLeave);
            });
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const onMouseMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };

            // Update the precise dot immediately
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        const onMouseDown = () => {
            if (ringRef.current) {
                ringRef.current.classList.add('scale-75'); // Subtle shrink on click
            }
        };

        const onMouseUp = () => {
            if (ringRef.current) {
                ringRef.current.classList.remove('scale-75');
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        // Animation loop for the lagging ring
        let animationFrameId: number;

        const loop = () => {
            // Linear interpolation (Lerp) for smooth lag
            // 0.15 is the easing factor (lower = slower lag)
            ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
            ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;

            if (ringRef.current) {
                // Subtract half the width/height to center the ring
                ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className={cn(
                "pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-difference transition-opacity duration-300",
                isHoveringLink ? "opacity-0" : "opacity-100"
            )}
        >
            {/* Smooth Lagging Ring */}
            <div
                ref={ringRef}
                className={cn(
                    "absolute top-0 left-0 h-8 w-8 -ml-4 -mt-4 rounded-full border border-white backdrop-blur-[1px]",
                    "transition-transform duration-100 ease-out will-change-transform"
                )}
            />

            {/* Precise Dot */}
            <div
                ref={cursorRef}
                className={cn(
                    "absolute top-0 left-0 h-2 w-2 -ml-1 -mt-1 rounded-full bg-white shadow-sm",
                    "will-change-transform"
                )}
            />
        </div>
    );
}
