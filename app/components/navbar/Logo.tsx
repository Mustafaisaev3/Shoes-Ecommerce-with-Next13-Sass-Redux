'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

interface LogoProps {
  src?: string | null | undefined
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  const router = useRouter()

  const handleLogoClick = () => {
    router.push('/')
  }
  
  return (
    <Image
        className="logo"
        height={70}
        width={80}
        alt="logo"
        src={src || "/images/logo.png"}
        onClick={handleLogoClick}
    />
  )
}

export default Logo