export const customStyles = {
  table: {
    style: {
      backgroundColor: '#fff',
    },
  },

  responsiveWrapper: {
    style: {
      overflowX: 'auto',
    },
  },

  headRow: {
    style: {
      backgroundColor: 'none',
    },
  },
  head: {
    style: {
      minHeight: '72px',
      backgroundColor: '#fff',
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      color: '#000',
      fontSize: '15px',
      border: 'none',
      backgroundColor: 'transparent',
    },
  },
  rows: {
    style: {
      color: '#000',
      fontSize: '15px',
      border: 'none',
    },
  },
  pagination: {
    style: {
      background: '#353ca6',
      color: '#fff',
      maxWidth: 1560,
      minWidth: '100%',
    },
    pageButtonsStyle: {
      borderRadius: '50%',
      height: '40px',
      width: '40px',
      padding: '8px',
      margin: 'px',
      cursor: 'pointer',
      transition: '0.4s',
      color: '#ff0',
      fill: '#fff',
      '&:disabled': {
        cursor: 'unset',
        color: '#b3b6ba',
        fill: '#b3b6ba',
      },
      '&:hover:not(:disabled)': {
        color: '#01a292',
        fill: '#01a292',
      },
      '&:focus': {
        outline: 'none',
        color: '#fff',
        fill: '#fff',
      },
    },
  },
};
