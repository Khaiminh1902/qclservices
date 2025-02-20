import Image from 'next/image'
import React from 'react'
import Cover from '../images/Cover.png'
import Link from 'next/link'

const Logo = () => {
  return (
    <div>
      <div className='flex items-center '>
        <Link href={'/'}>
          <Image 
            src={Cover}
            alt='hello'
            width={280}
            height={90}
          />
        </Link>
      </div>
    </div>
  )
}

export default Logo