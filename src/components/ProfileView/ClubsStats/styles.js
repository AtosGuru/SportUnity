import { colors } from '../../../theme';

export default {
  marker: {
    color: colors.white,
    marginRight: 18,
  },
  blueButton: {
    backgroundColor: colors.blue,
    color: colors.white,
    padding: '7px',
    marginRight: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    minWidth: 180,
    height: 40,
    fontFamily: 'Lato',
    cursor: 'pointer',
    border: 0,
    borderRadius: 5,
    transition: 'all cubic-bezier(0.22,0.61,0.36,1) .3s',
    ':hover': {
      filter: 'brightness(0.9)'
    },
    ':disabled': {
      backgroundColor: colors.lightGray,
      color: colors.darkGray
    },
    ':active': {
      outline: 'none'
    },
    '@media (max-width: 900px)': {
      width: '100%'
    },
  },
  padding: {
    marginTop: 18,
    float: 'right',
    right: -18,
    top: 0,
  },
  userpic: {
    backgroundImage: 'url("https://sportunitydiag304.blob.core.windows.net/avatars/default-avatar.png")',
    borderRadius: '50%',
    width: 60,
    height: 60,
    marginRight: 54,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '@media (maxWidth: 450px)': {
      margin: '0 auto',
    },
  },
  bestItem: {
      display: 'flex',
      flexDirection: 'column',
      margin: 20,
      alignItems: 'center',
  },
  bestRow: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  moreOf: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  pseudo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
    content: {
        padding: '40px',
        fontFamily: 'Lato',
        color: 'rgba(0,0,0,0.65)',
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 500,
        marginTop: 25,
        marginBottom: 30,
    },
    section: {
        marginBottom: 30
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 500,
        marginBottom: 15,
    },
    table: {
        border: '1px solid rgba(0, 0, 0, 0.4)',
        fontSize: 18,
        margin: 'auto',
    },
    headerCol: {
        padding: '5px 10px',
        borderRight: '1px solid rgba(0, 0, 0, 0.4)',
        fontWeight: 'bold',
        verticalAlign: 'middle',
    },  
    colLabel: {
        minWidth: 200,
        padding: '5px 10px',
        borderRight: '1px solid rgba(0, 0, 0, 0.4)',
        fontWeight: 'bold',
        verticalAlign: 'middle'
    },
    col: {
        padding: '5px 10px',
        borderRight: '1px solid rgba(0, 0, 0, 0.4)',
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    colName: {
        display: 'flex',
        alignItems: 'center'
    },
    sortIcons: {
        display: 'flex',
        flexDirection: 'column',
        float: 'right',
        marginLeft: 5
    },
    sortUpIcon: {
        cursor: 'pointer',
        width: 0,
        height: 0, 
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderBottom: '5px solid '+colors.blue,
    },
    sortDownIcon: {
        cursor: 'pointer',
        width: 0, 
        height: 0, 
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: '5px solid '+colors.blue,
        marginTop: 5
    },
    input: {
        width: 240
    },
    circles: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    circleTitle: {
        fontSize: 22,
        fontFamily: 'Lato',
        marginBottom: 10,
        marginRight: 20
    },
    listContainer: {
        width: '350px',
      height: '100%',
        borderBottom: '2px solid '+colors.blue,
        backgroundColor: colors.white,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        fontSize: 20,
      maxWidth: '100%',
      margin: '10px 0px',
      '@media (maxWidth: 500px)': {
          width: 200
      },
      '@media (maxWidth: 350px)': {
          width: 150
      }
    },
    listItem: {
        cursor: 'pointer',
        margin: '10px 10px',
        paddingBottom: 5,
        borderBottom: '1px solid '+colors.blue,
        fontSize: 20
    },
  teamRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    alignItems: 'baseline'
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 50,
    color: colors.blue,
    fontWeight: 'bold',
    fontFamily: 'lato',
  },
  statName: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'lato',
  },
  circle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    width: '100%'
  },
  iconBest: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    marginBottom: 7,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    marginBottom: 7,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  name: {
    color: colors.black,
    fontSize: 17,
    textDecoration: 'none',
    textTransition: 'none',
    width: '100%',
    textAlign: 'center',
    wordWrap: 'break-word',
    fontWeight: 'bold'
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 22,
    alignItems: 'baseline',
    justifyContent: 'space-around',
    fontFamily: 'lato',
    padding: 10,
    margin: '40px 10px',
    border: '1px solid #0007',
    borderRadius: 10,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px 0px',
  },
  date: {
    width: '100%',
    border: '0px',
    textAlign: 'center',
    paddingBottom: 8,
    borderBottom: '2px solid '+colors.blue,
    backgroundColor: colors.white,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    fontSize: 20,
  },
  dateTitle: {
    padding: '0px 10px'
  },
  saveButton: {
    padding: 10,
    cursor: 'pointer',
    backgroundColor: '#0003',
    borderRadius: 10,
  }
}
