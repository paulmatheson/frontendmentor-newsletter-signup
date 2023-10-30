import React, { useState } from 'react';
import './style.css';
import Icon from './images/icon-list.svg';

function AppBody() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior.
        setSubmitted(true);
    };

    return (
        <div className="App-body">
            {submitted ? (
                <div>
                    <h1>Thank you for subscribing!</h1>
                    <p>Your email has been submitted.</p>
                </div>
            ) : (
                <div>
                    <h1>Stay updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul>
                        <li>
                            <img src={Icon} alt="Icon" />
                            Product discovery and building what matters
                        </li>
                        <li>
                            <img src={Icon} alt="Icon" />
                            Measuring to ensure updates are a success
                        </li>
                        <li>
                            <img src={Icon} alt="Icon" />
                            And much more!
                        </li>
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            Email address
                            <input type="text" id="email" placeholder="email@company.com" required />
                        </label>
                        <button type="submit">Subscribe to the monthly newsletter</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AppBody;
