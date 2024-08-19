import React from "react";

const HomeScene: React.FC = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="./assets/7.png"
          alt=""
          style={{ position: "absolute", bottom: 0, width: "40%", left: 0 }}
        />
        <h1
          style={{
            position: "absolute",
            left: "25%",
            fontFamily: "Spline Sans Mono, monospace",
            fontSize: "7rem",
            width: "75%",
            padding: "5rem",
          }}
        >
          Por suerte siempre hay <span style={{ color: "#F3D222" }}>algo</span>{" "}
          amarillo
        </h1>
        <h2
          style={{
            position: "absolute",
            bottom: "2%",
            backgroundColor: "white",
            padding: "1rem",
            border: "1px solid #F3D222",
            left: "2%",
            fontFamily: "Spline Sans Mono, monospace",
            fontSize: "1.2rem",
            width: "max-content",
            zIndex: 1,
          }}
        >
          Comic-Web by{" "}
          <a
            style={{
              color: "#F3D222",
              textDecoration: "none",
            }}
            href="https://github.com/NachoVBordera"
          >
            Siteudic
          </a>
        </h2>
      </div>
    </>
  );
};

export default HomeScene;
