import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center ">
            <h4>Error 404</h4>
            <h1>Not Found</h1>
            <p>Sorry, it looks like something went wrong. Here are a few things you can try:</p>
            <ul>
                <li>Check the URL for errors.</li>
                <Link to="/">Click to Go Back <span className="px-2 rounded bg-red-300">Home</span></Link>
                <li>Contact our support team at support@example.com for further assistance.</li>
            </ul>
        </div>
    );
};

export default ErrorPage;
