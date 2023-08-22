export function fromLeft (duration:number = 0.3) {
    return {
      from: { 
        right: '20%',
        opacity: 0,
        transition: {
          type: 'easeInOut',
                  duration: duration,
        } 
      },
      to: { 
        right: 0,
        opacity: 1,
        transition: {
          type: 'easeInOut',
                  duration: duration,
        } 
      },
    }
  }