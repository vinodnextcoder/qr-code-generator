import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [url, setUrl] = useState("");

  return (
    <div style={styles.page}>
      {/* Header & Navigation Bar */}
      <header style={styles.header}>
        <h2 style={styles.logo}>QR Code Generator</h2>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>About</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <div style={styles.container}>
        <h1 style={styles.title}>Generate Your QR Code</h1>
        <p style={styles.subtitle}>Enter a URL below to generate a QR code.</p>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={styles.input}
        />
        {url && (
          <div style={styles.qrContainer}>
            <QRCode value={url} size={200} />
            <p style={styles.scanText}>📷 Scan Me</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
    height: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.3s",
  },
  container: {
    textAlign: "center",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  input: {
    padding: "12px",
    width: "320px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    textAlign: "center",
    marginBottom: "20px",
    outline: "none",
  },
  qrContainer: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  },
  scanText: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#555",
    fontWeight: "bold",
  },
};

export default App;
