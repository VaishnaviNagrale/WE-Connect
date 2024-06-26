import React from "react";
import "../../style/PostJob.css";

export default function SecondStep({
  fullName,
  onFullChange,
  phNo,
  onPhChange,
  email,
  onEmailChange,
  loc,
  onLocChange,
  website,
  onWebsiteChange,
}) {
  return (
    <div className="content">
      <div className="field">
        <div>
          <label htmlFor="input">Your Full Name</label>
        </div>
        <div>
          <input
            required
            type="text"
            onChange={(e) => onFullChange(e.target.value)}
            value={fullName}
          />
        </div>
      </div>

      <div className="field">
        <div>
          <label htmlFor="input">Phone Number</label>
        </div>
        <div>
          <input
            required
            type="tel"
            onChange={(e) => onPhChange(e.target.value)}
            value={phNo}
          />
        </div>
      </div>

      <div className="field">
        <div>
          <label htmlFor="input">Email ID</label>
        </div>
        <div>
          <input
            required
            type="email"
            onChange={(e) => onEmailChange(e.target.value)}
            value={email}
          />
        </div>
      </div>
      <div className="field">
        <div>
          <label htmlFor="input">Location</label>
        </div>
        <div>
          <input
            required
            type="text"
            onChange={(e) => onLocChange(e.target.value)}
            value={loc}
          />
        </div>
      </div>
      <div className="field">
        <div>
          <label htmlFor="input">Website Link</label>
        </div>
        <div>
          <input
            required
            type="text"
            onChange={(e) => onWebsiteChange(e.target.value)}
            value={website}
          />
        </div>
      </div>
    </div>
  );
}
