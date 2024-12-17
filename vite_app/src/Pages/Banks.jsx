import React, { useState } from "react";
import "./Banks.css";

const Banks = () => {
  const [bankDetails, setBankDetails] = useState(null);
  const [ifscCode, setIfscCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setLoading(true);
    setError("");
    if (!ifscCode.trim()) {
      setError("Please enter a valid IFSC code.");
      setLoading(false);
      return;
    }

    fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${ifscCode.toUpperCase()}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Bank not found. Please check the IFSC code.");
        }
        return response.json();
      })
      .then((data) => {
        setBankDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="group bg-gray-600 p-8 rounded-lg shadow-lg flex items-center justify-center">
    <div className="banks-container">
      <h1 className="banks-title">Search Bank by IFSC Code</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter IFSC Code"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
          className="search-bar"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {bankDetails && !loading && (
        <div className="bank-details">
          <h2>{bankDetails.BANK}</h2>
          <p><strong>Branch:</strong> {bankDetails.BRANCH}</p>
          <p><strong>IFSC:</strong> {bankDetails.IFSC}</p>
          <p><strong>City:</strong> {bankDetails.CITY}</p>
          <p><strong>State:</strong> {bankDetails.STATE}</p>
          <p><strong>District:</strong> {bankDetails.DISTRICT}</p>
          <p><strong>Address:</strong> {bankDetails.ADDRESS}</p>
          <p><strong>Contact:</strong> {bankDetails.CONTACT}</p>
          <p><strong>IMPS:</strong> {bankDetails.IMPS ? "Available" : "Not Available"}</p>
          <p><strong>RTGS:</strong> {bankDetails.RTGS ? "Available" : "Not Available"}</p>
          <p><strong>NEFT:</strong> {bankDetails.NEFT ? "Available" : "Not Available"}</p>
          <p><strong>UPI:</strong> {bankDetails.UPI ? "Available" : "Not Available"}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Banks;