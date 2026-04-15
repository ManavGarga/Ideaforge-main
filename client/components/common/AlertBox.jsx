import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Snackbar } from '@mui/material';

import useIdeaForge from '../../src/hooks/useIdeaForge';

const AlertBox = () => {
    const { alertSeverity, alertBoxOpenStatus, setAlertBoxOpenStatus, alertMessage } = useIdeaForge();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertBoxOpenStatus(false);
    };
    return (

        <Snackbar
            open={alertBoxOpenStatus}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleClose}
        >
            <Alert
                severity={alertSeverity}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setAlertBoxOpenStatus(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                {alertMessage}
            </Alert>
        </Snackbar>
    )
}

export default AlertBox