import React, { useState } from 'react';
import ModalForm from './ModelForm';
import Image from 'next/image';
import whatsappLogo from '../../../public/images/logo/WhatsApp.svg'

const WhatsAppIcon: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const iconStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: 1000,
    width : "65px"
  };

  const imgStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  };

  return (
    <>
       <div style={iconStyle}>
      <a onClick={handleOpen} style={{ cursor: 'pointer', display: 'block' }}>
        <Image
          src={whatsappLogo}
          alt="WhatsApp Bot"
          layout="responsive"
          width={50} // Aspect ratio width
          height={50} // Aspect ratio height
        />
      </a>
    </div>
      <ModalForm open={open} onClose={handleClose} />
    </>
  );
};

export default WhatsAppIcon;
