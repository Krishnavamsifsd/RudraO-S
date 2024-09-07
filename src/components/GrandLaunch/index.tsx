"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import grandLaunch from "../../../public/images/launch/GrandLaunch.jpeg";
import { CSSProperties } from "react";
import useIsMobile from "@/hooks/UseIsMobile";
import { IoClose } from "react-icons/io5"; // Import the close icon

const COUNTDOWN_TARGET = new Date("2024-09-08T10:00:00");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET.getTime() - new Date().getTime();

  if (totalTimeLeft <= 0) {
    return { message: "The event is now live! Countdown ended." };
  }

  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const GrandLaunch: React.FC = () => {
  const isMobile = useIsMobile();
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [hasMounted, setHasMounted] = useState(false);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setHasMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!hasMounted) {
    return null;
  }

  // Styles
  const popupStyles: CSSProperties = {
    position: "fixed",
    top: "15%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: isMobile ? "85%" : "70%",
    height: "80%",
    zIndex: 50,
    borderRadius: "15px",
    overflow: "hidden",
    backdropFilter: "blur(10px) !important", 
  };

  const contentStyles: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    overflow: "hidden",
    alignItems: "center",
  };

  const imageWrapperStyles: CSSProperties = {
    position: "relative",
    width: "350px",
    height: "100%",
    overflow: "hidden",
  };

  const countdownWrapperStyles: CSSProperties = {
    flex: "1",
    background: "linear-gradient(135deg, #f5f5f5, #ffffff)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    height: "100%",
    transition: "transform 0.3s ease-in-out",
  };

  const countdownStyles: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
    transition: "opacity 0.3s ease-in-out",
  };

  const countdownItemStyles: CSSProperties = {
    textAlign: "center",
    background: "linear-gradient(135deg, #e0e0e0, #f5f5f5)",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
    flex: "1 1 auto",
    minWidth: "100px",
    maxWidth: "120px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "pointer",
  };

  const buttonStyles: CSSProperties = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffffff",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 100,
  };

  return (
    <>
      {isPopupOpen && (
        <div style={popupStyles}>
          <div style={contentStyles} className="content">
            <button style={buttonStyles} onClick={handleClosePopup}>
              <IoClose size={28} color="red" /> {/* Use the close icon here */}
            </button>
            <div style={imageWrapperStyles} className="image-wrapper">
              <Image
                src={grandLaunch}
                alt="Grand Launch"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            {!isMobile && (
              <div style={countdownWrapperStyles} className="countdown-wrapper">
                <h2
                  style={{
                    fontSize: "2rem",
                    marginBottom: "20px",
                    fontFamily: "'Roboto', sans-serif",
                    textShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                    background: "linear-gradient(135deg, #ff6f61, #d5a6f2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    borderRadius: "12px",
                    padding: "12px 24px",
                    textAlign: "center",
                    fontWeight: "bold",
                    // transform: "skewY(-2deg)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, color 0.3s ease-in-out",
                    backgroundBlendMode: "overlay",
                  }}
                >
                  Countdown to the Big Event
                </h2>

                <div style={countdownStyles}>
                  {timeLeft.message ? (
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {timeLeft.message}
                    </p>
                  ) : (
                    Object.entries(timeLeft).map(([label, value]) => (
                      <div key={label} style={countdownItemStyles}>
                        <div
                          style={{
                            fontSize: "2rem",
                            fontWeight: "700",
                            color: "#333",
                          }}
                        >
                          {value}
                        </div>
                        <div style={{ fontSize: "1.5rem", color: "#666" }}>
                          {label}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GrandLaunch;
