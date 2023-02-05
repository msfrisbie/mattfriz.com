import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Contact() {
  const [showEmail, setShowEmail] = useState(false);
  const [checked, setChecked] = useState(false);

  const email = atob("bXNmcmlzYmllQGdtYWlsLmNvbQ==");

  return (
    <>
      <div className="flex flex-col items-center my-24 gap-8">
        {!showEmail && (
          <>
            <div className="flex flex-row items-center gap-2">
              <input
                id="email"
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <label for="email">
                I promise to use this email address only for good
              </label>
            </div>
            {checked && (
              <Button
                variant="primary"
                disabled={!checked}
                onClick={() => setShowEmail(true)}
              >
                GET MATT'S EMAIL
              </Button>
            )}
          </>
        )}
        {showEmail && <a href={`mailto:${email}`}>{email}</a>}
      </div>
    </>
  );
}
