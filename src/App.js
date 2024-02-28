import React from 'react';
import QRCode from 'qrcode.react';
function App() {
  return (
    <div className="App">
      <h2>Your Qr code:</h2>
      <QRCode value="https://github.com/sharmi2020/"
      size={200} // setting the size to 200 pixels
      bgColor="#f8f8f8" // light grey background
      fgColor="#333333" // dark grey foreground
      level="H" // high error correction level 
      />
    </div>
  );
}

export default App;
