import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [url, setUrl] = useState("");

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={styles.input}
      />
      <div style={styles.qrContainer}>
        {url && (
          <>
            <QRCode value={url} size={200} />
            <p style={styles.scanText}>📷 Scan Me</p>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f4f4f9",
    height: "100vh",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    padding: "10px",
    width: "300px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  qrContainer: {
    display: "inline-block",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  scanText: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#555",
    fontWeight: "bold",
  },
};

export default App;
