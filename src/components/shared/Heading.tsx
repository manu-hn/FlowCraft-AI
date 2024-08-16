import type { HeadingProps } from '@/utils/types';
import React from 'react'



const Heading = ({ children, classNames }: HeadingProps) => {
    return (
        <h2 className={classNames}>{children}</h2>
    )
}

export default Heading;