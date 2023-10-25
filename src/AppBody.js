import './style.css'
import Icon from './images/icon-list.svg'

function AppBody() {
    return (
        <div className="App-body">
            <h1>Stay updated!</h1>
            <p>Join 60,000 + product managers receiving monthly updates on:</p>
            <ul>
                <li><img src={Icon} alt="Icon" />Product discovery and building what matters</li>
                <li><img src={Icon} alt="Icon" />Measuring to ensure updates are a success</li>
                <li><img src={Icon} alt="Icon" />And much more!</li >
            </ul >
            <form>
                <label for="email">Email address<input type="text" id="email" placeholder="email@company.com" /></label>
                <button type="submit">Subscribe to monthly newsletter</button>
            </form>

        </div >
    )
}

export default AppBody