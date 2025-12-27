import { useState } from "react";

export default function LogUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const uploadLog = async () => {
    if (!file) {
      setMessage("Please select a log file");
      return;
    }

    const formData = new FormData();
    formData.append("logfile", file);

    try {
      const res = await fetch("http://localhost:5000/api/logs/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Upload failed");
    }
  };

  return (
    <div className="upload-box">
      <h2>Upload Log File</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadLog}>Upload</button>
      <p className="status">{message}</p>
    </div>
  );
}
