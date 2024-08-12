/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    colors:{
      Primary: '#FFA732',
      color_Black: '#202020',
      White: '#FFFFFF',
      Button_Color: '#E1000A',
      Shapes_on_primary: '#FFB758',
      Error_State: '#FF0707',
      Active_State: '#27C100',
      Grey_1: '#797979',
      Grey_2: '#D2D2D2',
      Error_State: '#FF0707',
      Error_State: '#FF0707',
      Secondary: '#FFEDD6',
      Tertiary_color_1: '#FEE7E6',
      Tertiary_color_2: '#F9EAC2',
      Tertiary_color_3: '#ECFDF1',
      cancle_button : '#F2F2F2',
      input: '#FFEDD6',
      input_border: '#27C100',
    },
    extend: {

    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.custom-btn': {
          padding: '10px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#FFFFFF',
          fontSize: '15px',
          fontWeight: '500',
          userSelect: 'none',
          backgroundColor: '#1D4ED8',
        }
      })
    }
  ],
}