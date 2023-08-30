'use client'

interface ModalHeadingProps {
    title: string,
    subtitle?: string,
    center?: boolean
}

const ModalHeading: React.FC<ModalHeadingProps> = ({title, subtitle, center}) => {
  return (
    <div style={{textAlign: `${center ? 'center': 'left'}`}}>
        <div className="title text-2xl font-bold">
            {title}
        </div>
        <div className="subtitle font-light text-neutral-500 mt-2">
            {subtitle}
        </div>
    </div>
  )
}

export default ModalHeading