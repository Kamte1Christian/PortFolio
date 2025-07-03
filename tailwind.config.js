module.exports = {
    // ...
    variants: {
      extend: {
        animation: ['motion-safe'],
        textDecoration: ['focus-visible'],
      }
    },
     theme: {
    extend: {
      transitionTimingFunction: {
        'out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
      perspective: {
        '1000': '1000px',
      },
      zIndex: {
        '60': '60',
      }
    }
  }
}