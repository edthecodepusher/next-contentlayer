import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
function Header() {
  return (
    <>
      <div className="h-60 w-full">
        <img
          className="h-60 w-full object-cover opacity-40 blur-sm"
          src="/images/background.png"
          alt="Background"
          style={{ objectFit: 'cover' }} // Ensures the image covers the area without stretching
        />
      </div>

      <div className="relative -top-10 z-10 flex w-full justify-center">
        <div className="absolute rounded-full bg-[#111111] p-1">
          {/* ShadCN Avatar Component */}
          <Avatar>
            <AvatarImage
              className="rounded-full" // To ensure it's round
              src="/images/avatar1.jpg" // Avatar image source
              alt="Avatar"
            />
            <AvatarFallback>AB</AvatarFallback> {/* Optional fallback text */}
          </Avatar>
        </div>
      </div>
    </>
  )
}

export default Header
