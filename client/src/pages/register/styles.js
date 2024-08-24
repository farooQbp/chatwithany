import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        height: window.innerHeight * 0.95,
        display: 'flex',
        flexDirection: 'column',
    },
    copyrightContainer: {
        margin: 'auto',
        textAlign: 'center',
    },
}));

export default useStyles;
