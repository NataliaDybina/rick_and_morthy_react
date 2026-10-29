import {useNavigate} from "react-router";

export default function NotFound() {
    const nav = useNavigate();

    function navigateToHome() {
        nav("/")
    }

    return <div>
        <h2>Page Not Found</h2>
        <button onClick={navigateToHome}>Click here</button>
    </div>;
}