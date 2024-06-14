function TimeLine() {
    return (
        <div className="max-w-5xl mx-auto my-12 px-5 relative">
            <div className="absolute h-full w-1 bg-black left-1/2 transform -translate-x-1/2 top-5"></div>
            <div className="flex flex-col space-y-10">
                <div className="flex justify-start">
                    <section className="bg-gray-200 rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
                        <i className="icon fas fa-home absolute bg-gray-200 h-10 w-10 text-center leading-10 rounded-full text-black text-xl shadow-inner right-[-60px] top-4"></i>
                        <div className="absolute h-4 w-4 bg-green-800 top-7 transform rotate-45 -right-1 z-[-1]"></div>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">Start Registrations</span>
                            <span>1st June 2022</span>
                        </div>
                    </section>
                </div>
                <div className="flex justify-end">
                    <section className="bg-blue-200 rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
                        <i className="icon fas fa-star absolute bg-gray-200 h-10 w-10 text-center leading-10 rounded-full text-black text-xl shadow-inner left-[-60px] top-4"></i>
                        <div className="absolute h-4 w-4 bg-green-800 top-7 transform rotate-45 -left-1 z-[-1]"></div>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">End Registrations</span>
                            <span>14th Jul 2022</span>
                        </div>
                    </section>
                </div>
                <div className="flex justify-start">
                    <section className="bg-gray-200 rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
                        <i className="icon fas fa-rocket absolute bg-gray-200 h-10 w-10 text-center leading-10 rounded-full text-black text-xl shadow-inner right-[-60px] top-4"></i>
                        <div className="absolute h-4 w-4 bg-green-800 top-7 transform rotate-45 -right-1 z-[-1]"></div>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">Opening Ceremony</span>
                            <span>16th July 2022</span>
                        </div>
                        <p className="mt-2 mb-4 text-sm">Hackathon opening ceremony will start 9:15 AM onwards.</p>
                    </section>
                </div>
                <div className="flex justify-end">
                    <section className="bg-gray-200 rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
                        <i className="icon fas fa-globe absolute bg-gray-200 h-10 w-10 text-center leading-10 rounded-full text-black text-xl shadow-inner left-[-60px] top-4"></i>
                        <div className="absolute h-4 w-4 bg-green-800 top-7 transform rotate-45 -left-1 z-[-1]"></div>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">Hackathon Starts</span>
                            <span>16th July 2022</span>
                        </div>
                        <p className="mt-2 mb-4 text-sm">Hackathon coding period will start from 10:30 AM onwards.</p>
                    </section>
                </div>
                <div className="flex justify-start">
                    <section className="bg-gray-200 rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
                        <i className="icon fas fa-paper-plane absolute bg-gray-200 h-10 w-10 text-center leading-10 rounded-full text-black text-xl shadow-inner right-[-60px] top-4"></i>
                        <div className="absolute h-4 w-4 bg-green-800 top-7 transform rotate-45 -right-1 z-[-1]"></div>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">Session from GeeksforGeeks</span>
                            <span>16th July 2022</span>
                        </div>
                        <p className="mt-2 mb-4 text-sm">Session on Complete Interview Preparation by GeeksForGeeks on 11.30 AM Onwards.</p>
                    </section>
                </div>
                <div className="flex justify-end">
                    <section className="bg-gray-200 rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
                        <i className="icon fas fa-paper-plane absolute bg-gray-200 h-10 w-10 text-center leading-10 rounded-full text-black text-xl shadow-inner left-[-60px] top-4"></i>
                        <div className="absolute h-4 w-4 bg-green-800 top-7 transform rotate-45 -left-1 z-[-1]"></div>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">Session from Postman</span>
                            <span>16th July 2022</span>
                        </div>
                        <p className="mt-2 mb-4 text-sm">Session on APIs 101 using Postman on 4:00 PM Onwards.</p>
                    </section>
                </div>
                <div className="flex justify-start">
                    <section className="bg-gray-200 rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
                        <i className="icon fas fa-paper-plane absolute bg-gray-200 h-10 w-10 text-center leading-10 rounded-full text-black text-xl shadow-inner right-[-60px] top-4"></i>
                        <div className="absolute h-4 w-4 bg-green-800 top-7 transform rotate-45 -right-1 z-[-1]"></div>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">Session from Alan AI</span>
                            <span>16th July 2022</span>
                        </div>
                        <p className="mt-2 mb-4 text-sm">Session on Building Voice AI Powered App in React JS with Alan AI on 06:30 PM Onwards.</p>
                    </section>
                </div>
                <div className="flex justify-end">
                    <section className="bg-gray-200 rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
                        <i className="icon fas fa-globe absolute bg-gray-200 h-10 w-10 text-center leading-10 rounded-full text-black text-xl shadow-inner left-[-60px] top-4"></i>
                        <div className="absolute h-4 w-4 bg-green-800 top-7 transform rotate-45 -left-1 z-[-1]"></div>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">Hackathon Ends</span>
                            <span>17th July 2022</span>
                        </div>
                        <p className="mt-2 mb-4 text-sm">Hackathon coding period will end on 10:30 PM.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;
