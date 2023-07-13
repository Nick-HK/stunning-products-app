import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function YesNoDialog({ bOpen, setDialogState, alertAction, sDialogMsg }) {
  return (
    <Dialog
      open={bOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* Dialog Content */}
      <DialogContent>
        {/* Dialog Content Text */}
        <DialogContentText id="alert-dialog-description">
          {sDialogMsg}
        </DialogContentText>
      </DialogContent>
      {/* Dialog Actions */}
      <DialogActions>
        {/* "No" button */}
        <Button onClick={() => { setDialogState(false) }}>
          No
        </Button>
        {/* "Yes" button */}
        <Button onClick={alertAction} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}