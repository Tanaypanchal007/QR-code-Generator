import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [uservalue, setUserValue] = useState("");
  const [qrcode, setQrCode] = useState("Welcome! I am Tanay Panchal.");
  const [fbColor, setFbColor] = useState("#ffffff"); // Default background color
  const [qrColor, setQrColor] = useState("#000000"); // Default QR color

  // Temporary states for input fields
  const [tempFbColor, setTempFbColor] = useState("#ffffff");
  const [tempQrColor, setTempQrColor] = useState("#000000");

  const handleInputChange = (e) => {
    setUserValue(e.target.value);
  };

  const handleTempBgColorChange = (e) => {
    setTempFbColor(e.target.value);
  };

  const handleTempQrColorChange = (e) => {
    setTempQrColor(e.target.value);
  };

  const SetQrCodeValue = () => {
    setQrCode(uservalue);
    setFbColor(tempFbColor); // Apply background color on click
    setQrColor(tempQrColor); // Apply QR color on click
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center space-y-5">
        <h1 className="mt-5 text-[#ffffff] font-semibold text-2xl font-sans">
          QR Code Generator
        </h1>
        <div>
          <input
            type="text"
            value={uservalue}
            onChange={handleInputChange}
            className="w-[270px] px-[10px] py-[7px] outline-none rounded text-sm"
            placeholder="Enter text or URL"
          />
        </div>
        <div className="space-x-2">
          <input
            type="text"
            value={tempFbColor}
            onChange={handleTempBgColorChange}
            className="w-[130px] px-[10px] py-[7px] outline-none rounded text-sm"
            placeholder="BgColor"
          />
          <input
            type="text"
            value={tempQrColor}
            onChange={handleTempQrColorChange}
            className="w-[130px] px-[10px] py-[7px] outline-none rounded text-sm"
            placeholder="QrColor"
          />
        </div>
        <div className="bg-[#ffffff] p-2 rounded">
          <QRCode value={qrcode} bgColor={fbColor} fgColor={qrColor} />
        </div>
        <div>
          <button
            className="text-[#ffffff] bg-emerald-600 w-[270px] px-[10px] py-[7px] outline-none rounded text-sm"
            onClick={SetQrCodeValue}
          >
            Generate QR
          </button>
        </div>
      </section>
    </>
  );
};

export default QRCodeGenerator;
