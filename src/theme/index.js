import { createTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});

const theme = createTheme({
  breakpoints,
  overrides: {
    MuiTypography: {
      h6: {
        [breakpoints.down('sm')]: {
          fontSize: 18,
        },

      },
    },
  },
  palette: {
    primary: {
      main: '#B4D8E8',
      contrastText: '#000',
    },
    text: {
      primary: '#000',
      secondary: '#C2606E',
    },
  },
});

export default theme;
