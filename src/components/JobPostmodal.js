/*import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import JobPost from '../pages/JobPost';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Post a job</Button>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        <Box sx={style}>
          
            <JobPost />
         
        </Box>
      </Modal>
    </div>
  );
}

    
export default BasicModal;*/