import React from 'react'

function Image({imageUrl, children}) {
  return (
    <div className="bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${imageUrl})`}}>
      <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
        <div className="text-white text-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Image