'use client'

type BadgeTypes = {
    text: string | number
}

const Badge: React.FC<BadgeTypes> = ({text}) => {
  return (
    <span style={{width: '20px', height: '20px', fontSize: '10px', borderRadius: '50%', background: 'rgb(179, 9, 9)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: '-10px', top: '-10px'}}>{text}</span>
  )
}

export default Badge