import React, { useState } from 'react';
import ModalForm from './ModelForm';

const WhatsAppIcon: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const iconStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: 1000,
  };

  const imgStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  };

  return (
    <>
      <div style={iconStyle}>
        <a onClick={handleOpen} style={{ cursor: 'pointer' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Bot"
            style={imgStyle}
          />
        </a>
      </div>
      <ModalForm open={open} onClose={handleClose} />
    </>
  );
};

export default WhatsAppIcon;
