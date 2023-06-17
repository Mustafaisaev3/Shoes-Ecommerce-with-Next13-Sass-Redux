export function title (duration:number = 0.3) {
    return {
      from: { 
        x: '-100%',
        opacity: 0,
        transition: {
          type: 'easeInOut',
                  duration: duration,
        } 
      },
      to: { 
        x: 0,
        opacity: 1,
        transition: {
          type: 'easeInOut',
                  duration: duration,
        } 
      },
    }
}

export function description (duration:number = 0.3) {
    return {
      from: { 
        y: -50,
        opacity: 0,
        transition: {
          type: 'easeInOut',
                  duration: duration,
        } 
      },
      to: { 
        y: 0,
        opacity: 1,
        transition: {
          type: 'easeInOut',
                  duration: duration,
        } 
      },
    }
}