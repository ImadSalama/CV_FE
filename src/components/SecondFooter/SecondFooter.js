import React from 'react';
import './SecondFooter.css'
const SecondFooter = () => {
    return (
        <div className="second-nav">
            <div>
                <ul>
                    <li>
                        <a to="" className="policy">Copyright &#64; 2021 Website</a>
                    </li>
                    <li>
                        <a to="" className="policy">Terms of Use</a>
                    </li>
                    <li>
                        <a to="" className="policy">Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul id="social-list">
                    <li>
                        <a to="" className="policy">
                            <i class="fab fa-facebook-f" />
                        </a>
                    </li>
                    <li>
                        <a to="" className="policy">
                            <i class="fab fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a to="" className="policy">
                            <i class="fab fa-aedin-in" />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default SecondFooter;