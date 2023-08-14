export function zoomOutIn (duration:number = 0.2) {
  return {
    from: { 
      x: '-100%',
      transition: {
        type: 'easeOut',
				duration: duration,
      } 
    },
    to: { 
      x: 0,
      transition: {
        type: 'easeOut',
				duration: duration,
      } 
    },
  }
}