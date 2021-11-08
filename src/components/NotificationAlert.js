import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';

function NotificationAlert({ text, serverity, duration }) {

    const [open, setOpen] = React.useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={duration}  onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}>
                <Alert variant="filled" severity={serverity}
                action={

                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2,width: '100%',m:'auto' }}
                    >
                        {text}
                </Alert>
            </Snackbar>

        </div>
    )
}

export default NotificationAlert
