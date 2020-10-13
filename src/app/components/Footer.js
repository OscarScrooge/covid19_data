import React from 'react';
import './style/footer.css';

function Footer(props) {
    return (
        <div className="footer-container">
            <footer>
                <p>Data provided by <a href="https://covid19-api.org/">covid19-api.org</a></p>
                <a href="https://github.com/OscarScrooge/covid19_data">@OscarScrooge</a>
            </footer>
        </div>
    );
}

export default Footer;
