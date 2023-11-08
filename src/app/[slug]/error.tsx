'use client'

import Link from "next/link"

type Props = {}

const error = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center flex-col pt-16 text-center lg:-mt-8">
        <h1 className="text-white font-medium text-3xl md:text-4xl">This article does not exists!</h1>
        <Link href='/' className="text-blue-500 text-lg mt-4 font-medium md:text-xl">Go back to home</Link>
    </div>
  )
}

export default error