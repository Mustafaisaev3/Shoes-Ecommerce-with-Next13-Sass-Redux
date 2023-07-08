'use client'

interface ReactProps {
    children: React.ReactNode
}

const Container: React.FC<ReactProps> = ({children}) => {
  return (
    <div className="container">
        {children}
    </div>
  )
}

export default Container