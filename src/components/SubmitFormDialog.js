import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Box, Typography, Divider, Input } from '@mui/material';
import Slide from '@mui/material/Slide';

export default function SubmitFormDialog(props) {

  const { open, handleClose, buttonText, isOpeningDialog } = props;

  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      // TransitionComponent={Transition}
    >
      <DialogTitle sx={{ padding: '5%' }}>
        { isOpeningDialog && isOpeningDialog == true ? <Typography variant='h5'>Brio Elevators</Typography> : <Typography variant='h5' sx={{fontWeight: 'bold', color: 'crimson'}}>Submit Details</Typography>}
        
        <Divider variant='fullWidth' />
      </DialogTitle>
      <DialogContent>
        <Grid sx={{ display: 'flex', flexDirection: 'column', padding: '4% 2% 4% 2%' }}>
          <Grid item>
            <Grid sx={{ display: 'flex', flexDirection: 'row', columnGap: '2%' }}>
              <Grid item>
                <input
                  type='text'
                  placeholder='Name'
                  style={{ height: '100%', width: '90%', fontSize: '1.2rem', padding: '1.5%', borderRadius: '0.5rem', borderColor: 'crimson'  }}
                />
              </Grid>
              <Grid item>
                <input
                  type='number'
                  placeholder='Phone Number'
                  style={{ height: '100%', width: '90%', fontSize: '1.2rem', padding: '1.5%', borderRadius: '0.5rem', borderColor: 'crimson'  }}
                />
              </Grid>
            </Grid>

          </Grid>
          <Grid item sx={{ height: '2rem' }} />
          <Grid item>
            <Grid sx={{ display: 'flex', flexDirection: 'row', columnGap: '2%' }}>
              <Grid item>
                <input
                  type='email'
                  placeholder='Email'
                  style={{ height: '100%', width: '90%', fontSize: '1.2rem', padding: '1.5%', borderRadius: '0.5rem', borderColor: 'crimson' }}
                />
              </Grid>
              <Grid item>
                <input
                  type='number'
                  placeholder='No.of Floors'
                  style={{ height: '100%', width: '90%', fontSize: '1.2rem', padding: '1.5%', borderRadius: '0.5rem', borderColor: 'crimson'  }}
                />
              </Grid>
            </Grid>

          </Grid>
          <Grid item sx={{ height: '2rem' }} />
          <Grid item>
            <Grid sx={{ display: 'flex', flexDirection: 'row', columnGap: '2%' }}>
              <Grid item>
                <input
                  type='text'
                  placeholder='Construction Type'
                  style={{ height: '100%', width: '90%', fontSize: '1.2rem', padding: '1.5%', borderRadius: '0.5rem', borderColor: 'crimson'  }}
                />
              </Grid>
              <Grid item>
                <input
                  type='text'
                  placeholder='Site Location'
                  style={{ height: '100%', width: '90%', fontSize: '1.2rem', padding: '1.5%', borderRadius: '0.5rem', borderColor: 'crimson'  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ height: '2rem' }} />
          <Grid item>
            <textarea name="message" placeholder='Enter your query' style={{ fontSize: '1rem', padding: '1.5%', height: '20%', width: '95%', borderRadius: '0.5rem', borderColor: 'crimson'  }} />
          </Grid>
          <Grid item sx={{ height: '25px' }} />
          <Grid item sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" onClick={handleClose} sx={{ width: '100%' }}>
              <Typography variant='body1'>{buttonText}</Typography></Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}