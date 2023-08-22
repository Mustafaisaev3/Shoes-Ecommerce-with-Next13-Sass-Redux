export function fromRight (duration:number = 0.3) {
    return {
      from: { 
        left: '20%',
        opacity: 0,
        transition: {
          type: 'easeInOut',
                  duration: duration,
        } 
      },
      to: { 
        left: 0,
        opacity: 1,
        transition: {
          type: 'easeInOut',
                  duration: duration,
        } 
      },
    }
  }