module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './public/index.html',
    './src/**/*.{html,js}',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      colors:{
        verdew:'#132A13',
        verdeb:'#0A150D',
        naranjaw:'#E8A339',
        naranjab:'#BC802E',
        azulw:'#6CC7DD',
        azulb:'#56A3AF',
        blancow:'#F5F4F4',
        blancob:'#D5DEE0',
        negrow:'#1E1E1E',
        negrob:'#000000',
        lilaw:'#78739E',
        lilab:'#5B597A',
        salmonw:'#E6B69D',
        salmonb:'#C69B8D',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}