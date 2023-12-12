import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div classname="bg">
      <h1>About</h1>
      <hr></hr>
      <br></br>
      <div classname="PI">
        <h2>
          <u>Personal Information</u>
        </h2>
        <div className="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="First Name"
            required=""
          />
        </div>
        <div className="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Last Name"
            required=""
          />
        </div>
        <div className="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Date of Birth"
            required=""
          />
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select one
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Male
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Female
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Other
              </a>
            </li>
          </ul>
        </div>
        <label>Married :</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Yes
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label class="form-check-label" for="flexCheckChecked">
            No
          </label>
        </div>
        <div className="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Contact Number"
            required=""
          />
        </div>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Email Address"
            required=""
          />
        </div>
        <div className="AD">
          <h2>
            <u>Address Details</u>
          </h2>
          <input
            type="textfield"
            className="form__field"
            placeholder="Current Address"
            required=""
          />
          <br></br>
          <input
            type="textfield"
            className="form__field"
            placeholder="Permanent Address"
            required=""
          />
        </div>
        <div className="EC">
          <h2>
            <u>Emergency Contact</u>
          </h2>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Name"
              required=""
            />
          </div>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Relationship"
              required=""
            />
          </div>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Contact Number"
              required=""
            />
          </div>
        </div>
        <div className="MH">
          <h2>
            <u>Medical History</u>
          </h2>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Current Health Conditions"
              required=""
            />
          </div>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Ongoing Medications(if any)"
              required=""
            />
          </div>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Allergies"
              required=""
            />
          </div>
        </div>
        <div className="SUH">
          <h2>
            <u>Substance Use History</u>
          </h2>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Types of Substance(s) Used"
              required=""
            />
          </div>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Frequency and Duration of Use"
              required=""
            />
          </div>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Last Date of Use"
              required=""
            />
          </div>
        </div>
        <div className="TH">
          <h2>
            <u>Treatment History</u>
          </h2>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Previous Treatment(s)
            </label>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Center 1
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Center 2
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Center 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="M">
          <h2>
            <u>Motivation for Seeking Treatment</u>
          </h2>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Reasons for Seeking Help"
              required=""
            />
          </div>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Goals for Recovery"
              required=""
            />
          </div>
        </div>
        <div className="LI">
          <h2>
            <u>Legal Information</u>
          </h2>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Any Legal Issues Related to Substance Use"
              required=""
            />
          </div>
        </div>
        <div className="EE">
          <h2>
            <u>Employment and Education</u>
          </h2>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Occupation"
              required=""
            />
          </div>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Educational Background"
              required=""
            />
          </div>
        </div>
        <div className="RI">
          <h2>
            <u>Referral Information</u>
          </h2>
          <div className="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Who Referred the Patient(if applicable)"
              required=""
            />
          </div>
        </div>
        <div className="CA">
          <h2>
            <u>Consent and Agreement</u>
          </h2>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <p class="form-check-label" for="flexCheckDefault">
              I, willingly consent to admission at the Nasha Mukti Center. I
              understand and agree to participate actively in the treatment
              program, following guidelines and cooperating with the medical and
              counseling staff. I acknowledge the voluntary nature of my stay,
              with the option to withdraw after consultation. I authorize the
              release of relevant medical information for my treatment, ensuring
              confidentiality.
            </p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              I agree to all the Centre's Rules and Regulations
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
