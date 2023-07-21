'use client'

interface HaedingProps {
    title: string,
    spanword?: string,
    align?: 'left' | 'center' | 'right',
    link?: {
        link: string,
        text: string
    },
}

const Heading: React.FC<HaedingProps> = ({title, spanword, align, link}) => {
  return (
    <div className={`
        heading
    `}> 
        <div className={`
            heading__inner
            ${align === 'center' && 'center'}
            ${align}
        `}>
            <div className="heading__title-wrapper">
                <div className="heading__title">
                    {title}
                </div>
                <div className="heading__spanword">
                    {spanword}
                </div>
            </div>
            <div className="heading__line"></div>

            {link ? (
                <div className="heading__link">
                    <a href={link.link}>
                        <div className="heading__link-text">{link.text}</div>
                    </a>
                </div>
            ) : null}
        </div>
    </div>
  )
}

export default Heading

// const Heading: React.FC<HaedingProps> = ({title, spanword, align}) => {
//     return (
//       <div className={`
//           heading
//       `}> 
//           <div className={`
//               heading__inner
//               ${align === 'center' && 'center'}
//           `}>
//               {align === 'right' && (
//                   <div className="heading__line"></div>
//               )}
  
//               <div className="heading__title">
//                   {title}
//               </div>
//               <div className="heading__spanword">
//                   {spanword}
//               </div>
  
//               {align === 'left' && (
//                   <div className="heading__line"></div>
//               )}
//           </div>
//       </div>
//     )
//   }
  
//   export default Heading