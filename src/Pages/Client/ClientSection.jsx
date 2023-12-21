import Marquee from 'react-fast-marquee';

const ClientSection = () => {
    return (
        <div>
            <div className="pb-5 m-12">
                <div className=" gap-3 mb-3 mt-5 px-1 lg:px-0 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-darkOne font-lora uppercase">
                        Our users
                    </h1>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkTwo capitalize font-lora">
                        Based on category
                    </h1>
                </div>
                <Marquee className="p-8 border-2 rounded-lg" speed={50}>
                    <div className="flex gap-[10rem]">
                        <h1 className="text-3xl font-lora capitalize">Developers</h1>
                        <h1 className="text-3xl font-lora capitalize">Corporate</h1>
                        <h1 className="text-3xl font-lora capitalize">Professionals</h1>
                        <h1 className="text-3xl font-lora capitalize">bankers</h1>
                        <h1 className="text-3xl font-lora capitalize">Doctors</h1>
                        <h1 className="text-3xl font-lora capitalize">Engineer</h1>
                    </div>
                </Marquee>
                <hr className="w-[400px] mx-auto mt-20 border-2" />
            </div>
        </div>
    );
};

export default ClientSection;