import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Contact() {
  const [showEmail, setShowEmail] = useState(false);
  const [yesChecked, setYesChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);

  const email = atob("bWF0dEBjbGFzc3Zzb2Z0d2FyZS5jb20=");

  return (
    <>
      <form className="flex flex-col items-center my-24 gap-8">
        <div> Do you promise to use this email address only for good?</div>

        <div>
          <div className="flex flex-row items-center gap-2">
            <input
              id="yes"
              name="group1"
              type="radio"
              checked={yesChecked}
              onChange={(e) => {
                setYesChecked(e.target.checked);
                setNoChecked(!e.target.checked);
              }}
            />
            <label htmlFor="yes">Yes</label>
          </div>

          <div className="flex flex-row items-center gap-2">
            <input
              id="no"
              name="group1"
              type="radio"
              checked={noChecked}
              onChange={(e) => {
                setNoChecked(e.target.checked);
                setYesChecked(!e.target.checked);
              }}
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        {!showEmail && yesChecked && (
          <Button
            className="border border-black py-1 px-3 rounded"
            variant="primary"
            disabled={!yesChecked}
            onClick={() => setShowEmail(true)}
          >
            GET MATT'S EMAIL
          </Button>
        )}
        {noChecked && <div>Go away.</div>}
        {showEmail && yesChecked && <a href={`mailto:${email}`}>{email}</a>}
      </form>
    </>
  );
}
