import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography, Card, CardContent, InputAdornment } from '@mui/material';
import { FaUser, FaEnvelope, FaPhone, FaMapPin } from 'react-icons/fa'; // Import icons from react-icons
import { MdClose } from 'react-icons/md'; // Import the close icon from react-icons

const ModalForm: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = () => {
    // Construct the message
    const message = `Hello, a new user has submitted their details:\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nPincode: ${pincode}`;
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/919885234150?text=${encodedMessage}`;
    
    // Open WhatsApp with the pre-filled message
    window.open(whatsappURL, '_blank');
    
    // Close the modal
    onClose();
  };
  

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        // Override default styles for the Modal
        '& .MuiBackdrop-root': {
          backdropFilter: 'blur(8px)',
          border : 'none' // Apply blur effect to the backdrop
        },
        '& .MuiModal-root': {
          border: 'none', // Ensure no border is applied to the modal root
        },
        border : 'none'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '500px',
          bgcolor: 'transparent', // Make background transparent
          boxShadow: 'none', // Remove shadow
        }}
      >
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            background: 'linear-gradient(135deg, #1e88e5 30%, #8e24aa 90%)',
            color: '#fff',
            p: 3, // Padding inside the card
            border: 'none', // Remove border if present on the Card
            position: 'relative', // Position relative for the close button
          }}
        >
          <Button
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: '#fff',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <MdClose size={24} />
          </Button>
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom>
              <strong>
                Start Your Study Abroad Journey
              </strong>
            </Typography>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaUser />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaEnvelope />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              margin="normal"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaPhone />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Pincode"
              variant="outlined"
              margin="normal"
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaMapPin />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
              size="small"
              sx={{
                width: '100%',
                mt: 2,
                py: 1.5,
                backgroundColor: '#ff4081', // Custom color for the button
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#f50057', // Darker shade for hover
                },
              }}
            >
              Book Your Free Consultation
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default ModalForm;
