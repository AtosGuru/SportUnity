import { colors, fonts, metrics } from '../../../theme'

export const styles = {
	container: {
		display: 'flex',
        flexDirection: 'column',
        marginTop: 15
    },
    title: {
        fontSize: 22,
        fontFamily: 'Lato',
        color: colors.darkGray,
        margin: '15px 0px'
    },
    checkboxRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    checkboxLabel: {
        fontFamily: 'Lato',
        fontSize: 16, 
        color: colors.blue,
    },
    checkBox: {
        width: 18,
        height: 18,
        border: '2px solid #5E9FDF',
        display: 'block',
        cursor: 'pointer',
        marginLeft: 15,
        marginTop: 0,
        marginBottom: 0
    },
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    buttonLabel: {
        fontFamily: 'Lato',
        fontSize: 18, 
        color: colors.blue,
        cursor: 'pointer',
    },
    modalContent: {
		display: 'flex',
		flexDirection: 'column',
        justifyContent: 'flex-start',
        width: 400,
        paddingBottom: 10
	},
	modalHeader: {
		display: 'flex',
		flexDirection: 'row',
        alignItems: 'flex-center',
		justifyContent: 'space-between',
	},
	modalTitle: {
		fontFamily: 'Lato',
		fontSize:24,
		fontWeight: fonts.weight.medium,
		color: colors.blue,
		marginBottom: 20,
		flex: '2 0 0',
	},
	modalClose: {
		justifyContent: 'flex-center',
		paddingTop: 10,
		color: colors.gray,
		cursor: 'pointer',
    },
    headerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        paddingBottom: 3,
        borderBottom: '1px solid ' + colors.gray,
        color: colors.blueLight
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        color: colors.blue,
    },
    subRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 9
    },
    label: {
        fontFamily: 'Lato',
        fontSize: 15, 
        flex: 5
    },
    type: {
        fontFamily: 'Lato',
        fontSize: 15, 
        flex: 5,
        marginLeft: 5
    },
    removeIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
		color: colors.redGoogle,
        cursor: 'pointer',
        flex: 1
    },
    editIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
		color: colors.blueLight,
        cursor: 'pointer',
        flex: 1
    },
    validateEditionIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
		color: colors.green,
        cursor: 'pointer',
        flex: 1
    },
    newInfoTitle: {
        fontFamily: 'Lato',
        fontSize: 15, 
        color: colors.blueLight,
        marginTop: 20,
        marginBottom: 10
    },
    dropdown: {
        position: 'absolute',
        top: 31,
        left: 0,    
        width: '100%',
        maxHeight: 300,    
        backgroundColor: colors.white,    
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.24), 0 0 4px 0 rgba(0,0,0,0.12)',
        border: '2px solid rgba(94,159,223,0.83)',
        padding: '7px 20px',    
        overflowY: 'scroll',
        overflowX: 'hidden',    
        zIndex: 100,
    },
    listItem: {
        paddingTop: 5,
        paddingBottom: 5,
        color: '#515151',
        fontSize: 20,
        fontWeight: 500,
        fontFamily: 'Lato',
        borderBottomWidth: 1,
        borderColor: colors.blue,
        borderStyle: 'solid',
        cursor: 'pointer',
    },
    loadInput: {
        borderWidth: 0,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: colors.blue,
        height: '30px',
        lineHeight: '36px',
        fontFamily: 'Lato',
        display: 'block',
        background: 'transparent',
        fontSize: fonts.size.medium,
        outline: 'none',
        cursor: 'pointer',
        width: '100%',
        color: '#515151',
    },
    typeListContainer: {
        position: 'relative',
        flex: 5,
        marginTop: 2,
        marginBottom: 20,
        marginLeft: 5,
    },
    triangle: {
        position: 'absolute',
        right: 3,
        top: 12,
        width: 0, 
        height: 0,    
        transition: 'border 100ms',
        transitionOrigin: 'left',    
        color: colors.blue,        
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderTop: `8px solid ${colors.blue}`,
        cursor: 'pointer',    
    },
    addButton: {
        textAlign: 'center',
        justifyContent: 'flex-center',
		color: colors.green,
        cursor: 'pointer',
        flex: 1,
        marginBottom: 20
    },
    saveButton: {
        width: '400px',
        height: '50px',
        backgroundColor: colors.green,
        boxShadow: '0 0 4px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.24)',
        borderRadius: '3px',
        display: 'inline-block',
        fontFamily: 'Lato',
        fontSize: '22px',
        textAlign: 'center',
        color: colors.white,
        borderWidth: 0,
        marginTop: 15,
        marginBottom: 10,
        cursor: 'pointer',
        lineHeight: '27px',
    },
}

export const modalStyles = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    },
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border                     : '1px solid #ccc',
      background                 : '#fff',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px',
    },
  }
