import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="section-hl section-hl_type_gray"></div>
      <div className="footer__bottom-section">
        <p className="footer__year">&copy; 2023</p>

        <ul className="footer__sns-list">
          <li className="footer__sns-list-item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/"
              className="footer__sns-list-link"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
