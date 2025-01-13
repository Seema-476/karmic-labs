import React, { useState, useEffect } from 'react'

const PreLoader = () => {
  const [preLoader, setPreLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreLoader(false)
    }, 3000)
  }, [])

  return (
    <>
      {preLoader ? (
        <div className='h-screen w-full bg-z-black fixed bottom-0 top-0 right-0 z-30 flex justify-center items-center overflow-hidden'>
          <img src="/assets/images/webp/header-logo.webp" alt="preloader" className='duration-700 animate-bounce size-20 relative z-50' />
        </div>
      ) : null}
    </>
  )
}

export default PreLoader

