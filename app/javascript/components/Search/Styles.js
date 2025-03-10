import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  titlePage: {
    fontSize: '26px',
    color: 'black',
    marginTop: '50px'
  },
  centerContent: {
    justifyContent: 'center'
  },
  loading: {
    opacity: '0.5'
  },
  locationChipsList: {
    display: 'flex',
    marginTop: '10px',
    flexWrap: 'wrap',
    '& > *': {
      margin: '5px 5px 5px 0',
    },
  },
  brandChipsList: {
    display: 'flex',
    marginTop: '10px',
    flexWrap: 'wrap',
    '& > *': {
      margin: '5px 5px 5px 0',
    },
  },
  link: {
    backgroundColor: '#5C73C2',
    color: 'white',
    '&:hover': {
      color: 'white',
      backgroundColor: '#5C73C2',
      opacity: '0.8'
    }
  },
  compareButtonBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '35px'
  },
  compareLinkBlock: {
    width: '70%',
    padding: '4px 1px 4px 5px'
  },
  compareLink: {
    color: 'white',
    '&:hover': {
      color: 'white',
      backgroundColor: '#5C73C2',
      opacity: '0.8',
      textDecoration: 'none',
    }
  },
  removeListIconBlock: {
    margin: 'auto',
    marginTop: '4px'
  },
  compareButton: {
    width: '150px',
    padding: '3px',
    opacity: '1',
    backgroundColor: '#5C73C2',
    '&:hover': {
      backgroundColor: '#303f9f',
    }
  }
})

export default useStyles;