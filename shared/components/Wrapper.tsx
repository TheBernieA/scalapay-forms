import React from 'react'

const Wrapper = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div className={`bg-white rounded-[20px] ${className}`}>{children}</div>
    )
}

export default Wrapper