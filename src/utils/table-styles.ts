const tableStyles = {
  rows: {
    style: {
      fontSize: '13px',
    },
  },
  headCells: {
    style: {
      paddingLeft: '10px',
      paddingRight: '10px',
      fontSize: '13px',
      color: '#484D59',
      fontStyle: 'normal',
      borderBottom: 'none',
      background: '#F5F6F6',
      fontWeight: '500',
    },
  },
  cells: {
    style: {
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '10px',
      paddingBottom: '10px',
      fontSize: '13px',
      overFlowY: 'auto',
      fontWeight: '500',
      'last-child': {
        borderBottomLeftRadius: '10px',
      },
    },
  },
}

export default tableStyles
