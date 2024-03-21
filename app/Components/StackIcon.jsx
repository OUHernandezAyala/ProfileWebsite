import React from 'react';
import Image from 'next/image';

const StackIcon = ({stack}) =>{
    return(
        <Image 
                src={`/images/icons/${stack}.png`}
                alt={stack}
                className='rounded-lg hover:scale-[1.04]'
                width={90}
                height={90}
                />
    )
}

export default StackIcon;
