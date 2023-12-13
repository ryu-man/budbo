export function HumburgerIcon() {

    const strokeWidth = 2

    return (
        <svg width="1em" height="1em" viewBox="0 0 18 12">
            <line x1={0} x2={18} y1={0} y2={0} stroke="currentColor" strokeWidth={strokeWidth} />
            <line x1={18*0.25} x2={18} y1={6} y2={6} stroke="currentColor" strokeWidth={strokeWidth} />
            <line x1={0} x2={18} y1={12} y2={12} stroke="currentColor" strokeWidth={strokeWidth} />
        </svg>
    )
}
