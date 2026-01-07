"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { usePathname } from "next/navigation"

export interface UserBehaviorContext {
    clicks: number
    timeOnPage: number // seconds
    mouseConcentration: string // "top-left", "top-right", "bottom-left", "bottom-right", "center"
    isActive: boolean
    scrollDepth: number // percentage 0-100
    currentPath: string
}

export function useUserBehavior() {
    const pathname = usePathname()

    // Use refs for mutable metrics to avoid re-renders
    const clicksRef = useRef(0)
    const timeOnPageRef = useRef(0)
    const scrollDepthRef = useRef(0)
    const mousePositionRef = useRef({ x: 0, y: 0 })
    const isActiveRef = useRef(true)

    // Reset metrics on path change
    useEffect(() => {
        clicksRef.current = 0
        timeOnPageRef.current = 0
        scrollDepthRef.current = 0
    }, [pathname])

    // Track Clicks
    useEffect(() => {
        const handleClick = () => {
            clicksRef.current += 1
        }
        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
    }, [])

    // Track Time on Page
    useEffect(() => {
        const interval = setInterval(() => {
            if (document.visibilityState === "visible") {
                timeOnPageRef.current += 1
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    // Track Active Status
    useEffect(() => {
        const handleVisibilityChange = () => {
            isActiveRef.current = document.visibilityState === "visible"
        }
        document.addEventListener("visibilitychange", handleVisibilityChange)
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
    }, [])

    // Track Scroll Depth
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = (scrollTop / docHeight) * 100
            if (scrolled > scrollDepthRef.current) {
                scrollDepthRef.current = Math.round(scrolled)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Track Mouse Position for Concentration
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePositionRef.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const getConcentration = useCallback(() => {
        if (typeof window === "undefined") return "unknown"
        const { x, y } = mousePositionRef.current
        const width = window.innerWidth
        const height = window.innerHeight

        // Simple 2x2 grid + center
        const isCenter = x > width * 0.3 && x < width * 0.7 && y > height * 0.3 && y < height * 0.7
        if (isCenter) return "center"

        if (x < width / 2) {
            return y < height / 2 ? "top-left" : "bottom-left"
        } else {
            return y < height / 2 ? "top-right" : "bottom-right"
        }
    }, [])

    const getBehaviorContext = useCallback((): UserBehaviorContext => {
        return {
            clicks: clicksRef.current,
            timeOnPage: timeOnPageRef.current,
            mouseConcentration: getConcentration(),
            isActive: isActiveRef.current,
            scrollDepth: scrollDepthRef.current,
            currentPath: pathname || "/",
        }
    }, [pathname, getConcentration])

    return { getBehaviorContext }
}
