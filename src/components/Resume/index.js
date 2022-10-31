import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>
      <div>
        <div class="mt-5">
          <h2 className="top-title">Jhonatan Diaz</h2>
          <ul>
            <li>
             System Administrator and Infrastructure Design.
            </li>
          </ul>
          <a
            href="https://github.com/JhonatanDP/react-portfolio/blob/main/docs/JDiazPerezResume.pdf"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Expertises</h2>
          <ul>
            <li>
            Microsoft OS all versions, MAC OSX, Linux,<br />
            Networking, Firewall, switches, routers<br />
            VOIP, Security Systems.
            </li>
          </ul>
        </div>
      </div>
      
    </section>
  );
}

export default Resume;