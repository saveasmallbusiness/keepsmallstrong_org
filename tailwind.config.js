module.exports = {
  theme: {
    fontFamily: {
      headline: ['Khula', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['Raleway', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      opacity: {
        10: '0.1',
        90: '0.90'
      },
      colors: {
        light: {
          lighter: 'hsl(0, 40%, 98%)',
          default: 'hsl(0, 40%, 98%)',
          darker: 'hsl(0, 40%, 98%)',
        },
        primary: {
          lighter: 'hsl(202, 59%, 54%)',
          default: 'hsl(202, 59%, 64%)',
          darker: 'hsl(202, 59%, 74%)',
        },
        secondary: {
          lighter: 'hsl(6, 76%, 41%)',
          default: 'hsl(6, 76%, 51%)',
          darker: 'hsl(6, 76%, 61%)',
        },
        accent: {
          lighter: 'hsl(41, 97%, 48%)',
          default: 'hsl(41, 97%, 58%)',
          darker: 'hsl(41, 97%, 68%)',
        },
        accent2: {
          lighter: 'hsl(82, 81%, 64%)',
          default: 'hsl(82, 81%, 74%)',
          darker: 'hsl(82, 81%, 74%)',
        },
        dark: {
          lighter: 'hsl(240, 25%, 18%)',
          default: 'hsl(240, 25%, 18%)',
          darker: 'hsl(240, 25%, 18%)',
        },
        grey: {
          lighter: 'hsl(0, 0%, 80%)',
          default: 'hsl(0, 0%, 50%)',
          darker: 'hsl(0, 0%, 20%)',
        },
      },
    },
    inset: {
      0: 0,
      auto: 'auto',
      '1/2': '50%',
      20: '5rem',
    },
    maxHeight: {
      500: '500px',
      0: '0',
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: ['transform'],
};
