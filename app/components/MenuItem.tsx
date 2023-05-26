import Link from 'next/link'
import React from 'react'

export default function MenuItem({title,link}:any) {
  return (
    <div>
        <Link href={link}>
            <h1 className='font-bold text-white'>{title}</h1>
        </Link>
    </div>
  )
}
