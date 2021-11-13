import { createTheme } from '@material-ui/core';

const theme =  createTheme({
  palette: {
    primary: {
      main: '#B4D8E8',
      contrastText: '#000',
    },
    text:{
      primary: '#000',
      secondary: '#C2606E'
    }
  },
});


export default theme;