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
        //pure pink
        primary: {
            main: '#e7cac2',
        },
        //grey
        secondary: {
            main: '#959595',
        },
        //green
        error: {
            main: '#999b84',
        },
        //offpink
        warning: {
            main: '#cebeb9',
        },
        //softgrey
        info: {
            main: '#e8e8e8',
        },
        //cream
        sucess: {
            main: '#e2e0d4',
        },
    },
    typography: {
        fontFamily: 'Bentham',
        textTransform: 'none'  
        },
});

export default theme;