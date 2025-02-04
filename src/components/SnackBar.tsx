import React from 'react';
import Snackbar from '@mui/joy/Snackbar';
import "./snackBar.css"


interface SnackBarProps {
  open: boolean;
  handleClose: () => void;
  vertical: 'bottom';
  horizontal: 'right';
  snackText:string;
}

const MySnackbar: React.FC<SnackBarProps> = ({snackText, open, handleClose, vertical, horizontal }) => {
  return (
    <div className='snackBarCont'>
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      key={vertical + horizontal}
      autoHideDuration={3000}
    >
      {snackText}
    </Snackbar>
    </div>
  );
};

export default MySnackbar;