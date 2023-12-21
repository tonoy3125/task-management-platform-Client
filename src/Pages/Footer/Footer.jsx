

const Footer = () => {
    return (
        <div>
            <hr className='pb-5' />
            <div className=' container mx-auto pb-5 flex items-center justify-between flex-col lg:flex-row'>
                <small className='text-black text-base font-semibold pb-5 pt-3'> Task Management © 2023. All rights reserved.</small>
                <div className="flex items-center gap-5">
                    <p className="text-black text-base font-semibold ">Privacy Policy</p>
                    <p className="text-black text-base font-semibold ">Terms and Conditions</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;