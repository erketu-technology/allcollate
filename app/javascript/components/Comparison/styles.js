import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  page: {
    minWidth: '100%'
  },
  content: {
    width: '100%'
  },
  pageHeader: {
    display: 'flex',
    marginTop: '50px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  titleBox: {
    width: 'fit-content'
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '34px',
    lineHeight: '40px',
    color: 'black'
  },
  searchBox: {
    width: '6000px',
  },
  noHotelsBox: {
    position: 'absolute',
    minWidth: '100%;',
    left: 0,
    textAlign: 'center',
    backgroundColor: '#F5F7FB'
  },
  noHotelsTitle: {
    marginTop: '15%'
  },
  contentBox: {
    alignSelf: 'flex-center',
    width: '245px',
    padding: '0px',
    height: '245px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  card: {
    width: '243px',
    height: '243px',
    border: 'none',
    boxShadow: 'none'
  },
  cardHeader: {
    align: 'center'
  },
  media: {
    width: '100px',
    height: '100px',
    marginLeft: '71.5px',
    marginTop: '15px',
    borderRadius: '4px'
  },
  removeButton: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  table: {
    marginTop: '50px',
    borderRight: '1px solid #ececec',
    borderRadius: '4px',
    width: 'fit-content'
  },
  row: {
    border: '1px;',
    borderWidth: '1px;',
    borderColor: 'grey;',
    borderStyle: 'solid;',
    borderRadius: '4px;',
  },
  cell: {
    width: '245px',
    background: '#FFFFFF',
    boxSizing: 'border-box'
  },
  leftColumnHeader: {
    position: 'sticky',
    left: '0px',
    backgroundColor: '#F5F7FB',
  },
  leftColumnHeaderBox: {
    width: '195px',
    height: '245px',
    left: '0px',
    top: '0px',
    backgroundColor: '#F5F7FB',
    borderBottom: '1px solid #F5F7FB',
    borderTop: '1px solid #F5F7FB',
    borderleft: '1px solid #F5F7FB'
  },
  noHotelsBox: {
    minWidth: '100%;',
    marginTop: '25%'
  },
  headerCardBox: {
    display: 'flex',
    flexWrap: 'wrap',
    background: '#FFFFFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '245px',
    height: '245px',
  },
  leftColumn: {
    position: 'sticky',
    width: '195px',
    left: '0px',
    color: 'black',
    background: '#FFFFFF',
    zIndex: '999',
    boxSizing: 'border-box',
    borderRadius: '4px',
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  dataCell: {
    borderRight: '1px solid #ececec',
  },
  resultTableRow: {
    background: '#FFFFFF',
    boxSizing: 'border-box'
  },
  row: {
    marginTop: '11px',
    height: '58px',
    borderRadius: '4px'
  },
  hotelDataCell: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-evenly',
    justifyContent: 'space-around',
    width: '100%',
    height: '60px',
    marginLeft: '0px',
    padding: '0px',
    borderRight: '1px solid #B2B2B2',
    borderTop: '1px solid #B2B2B2',
    borderBottom: '1px solid #B2B2B2',
  },
  hotelDataCellLast: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-evenly',
    justifyContent: 'space-around',
    width: '100%',
    height: '60px',
    marginLeft: '0px',
    padding: '0px',
    borderRight: '1px solid #B2B2B2',
    borderTop: '1px solid #B2B2B2',
    borderBottom: '1px solid #B2B2B2',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px'
  },
  comparisonOptionBlock: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-evenly',
    justifyContent: 'space-around',
    width: '100%',
    height: '60px',
    border: '1px solid #B2B2B2',
    marginLeft: '0px',
    padding: '0px',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
  },
  headerCell: {
    width: '245px',
    background: '#FFFFFF',
    boxSizing: 'border-box',
    border: 'none'
  },
  headerCardContainer: {
    width: '245px',
    left: '0px',
    height: '245px',
    top: '0px',
    borderTop: '1px solid #B2B2B2',
    borderBottom: '1px solid #B2B2B2',
    borderRight: '1px solid #B2B2B2'
  },
  headerCardContainerLast: {
    width: '245px',
    left: '0px',
    height: '245px',
    top: '0px',
    borderTop: '1px solid #B2B2B2',
    borderBottom: '1px solid #B2B2B2',
    borderRight: '1px solid #B2B2B2',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px'
  },
  headerCardContainerFirst: {
    width: '245px',
    left: '0px',
    height: '245px',
    top: '0px',
    borderTop: '1px solid #B2B2B2',
    borderBottom: '1px solid #B2B2B2',
    borderRight: '1px solid #B2B2B2',
    borderLeft:  '1px solid #B2B2B2',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
  },
  headerCardContainerOnly: {
    width: '245px',
    left: '0px',
    height: '245px',
    top: '0px',
    borderTop: '1px solid #B2B2B2',
    borderBottom: '1px solid #B2B2B2',
    borderRight: '1px solid #B2B2B2',
    borderLeft:  '1px solid #B2B2B2',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px'
  }
})