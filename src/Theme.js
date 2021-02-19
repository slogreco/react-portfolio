/* Color Scheme for site:
grey: #959595
cream: #e2e0d4
off pink: #cebeb9
pure pink: #e7cac2
soft grey: #e8e8e8

green: #999b84
off white: #f4eeed
light pink: #efd9d1
pink: #ddb7ab

font-family: 'Mr De Haviland'
font-family: 'Bentham'
*/

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e7cac2',
        },
        secondary: {
            main: '#959595',
        },
        error: {
            main: '#999b84',
        },
        warning: {
            main: '#999b84',
        },
        info: {
            main: '#999b84',
        },
        sucess: {
            main: '#999b84',
        },
    },
    typography: {
        fontFamily: 'Bentham',
        textTransform: 'none'  
        },
});

export default theme;