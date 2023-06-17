'use client'
import Image from "next/image"

interface LogoProps {
  src?: string | null | undefined
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <Image
        className="logo"
        height={70}
        width={80}
        alt="logo"
        src={src || "/images/logo.png"}
    />
  )
}

export default Logo