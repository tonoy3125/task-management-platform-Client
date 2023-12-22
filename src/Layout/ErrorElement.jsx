import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className='text-center'>
            <h1 className='text-[200px] font-bold'>
                404
            </h1>

            <h2 className='md:text-5xl font-bold'>
                NOT FOUND
            </h2>
            <Link to="/"><button className="btn btn-accent text-white mt-7">Go Home</button></Link>
        </div>
    );
};

export default ErrorElement;