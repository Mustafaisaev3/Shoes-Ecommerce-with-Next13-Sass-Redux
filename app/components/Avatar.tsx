'use client'
import Image from "next/image"

interface AvatarProps {
  src: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
        className="avatar"
        height={30}
        width={30}
        alt="avatar"
        style={{borderRadius: '100%'}}
        src={src || "/images/placeholder.jpg"}
    />
  )
}

export default Avatar