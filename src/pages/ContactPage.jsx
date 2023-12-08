

const ContactPage = () => {
    return (
        <>
            <div className="w-full bannerGradient bg-no-repeat bg-cover bg-center">
                <section className=" w-full container mx-auto px-14 py-28 text-white text-center">
                    <h1 className="text-6xl font-bold text my-12">Contact</h1>
                </section>
            </div>

            <div className="bg-white w-full">
                <div className="container mx-auto ">
                    <section className=" px-3 py-12 w-full ">
                        <div className="text-center w-full">
                            <h4 className="font-bold text-xl mt-4 text-yellow-500 ">Contact Us</h4>
                            <h2 className="font-bold text-3xl lg:text-5xl  mb-5 ">Contact For Any Query</h2>
                        </div>
                        <div className="w-full ">
                            <div className="flex flex-wrap mt-10 px-3">
                                <div className="w-full md:w-1/3">
                                    <h4 className="font-bold text-lg mt-4 text-yellow-500 ">Booking</h4>
                                    <p>book@example.com</p>
                                </div>
                                <div className="w-full md:w-1/3">
                                    <h4 className="font-bold text-lg mt-4 text-yellow-500 ">General</h4>
                                    <p>info@example.com</p>
                                </div>
                                <div className="w-full md:w-1/3">
                                    <h4 className="font-bold text-lg mt-4 text-yellow-500 ">Technical</h4>
                                    <p>tech@example.com</p>
                                </div>
                            </div>

                            <div className="flex mt-5 w-full flex-col lg:flex-row">
                                <div className="w-full lg:w-1/2  px-3 mt-5">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.158754945777!2d77.19828536002159!3d28.64483905527778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029da94bf9d9%3A0xda267c5baef74594!2sHanuman%20Mandir%20Karol%20bagh!5e0!3m2!1sen!2sin!4v1702033084215!5m2!1sen!2sin"
                                        allowFullScreen=""
                                        className="w-full h-full"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="w-full lg:w-1/2  mt-5">
                                    <form className="w-full flex  flex-wrap">
                                        <div className="col px-3 mt-5 w-full lg:w-1/2 ">
                                            <input type="text"className=" w-full border border-sky-500 rounded px-2 py-3" placeholder="Name" />
                                        </div>
                                        <div className="col px-3 mt-5 w-full lg:w-1/2">
                                            <input type="email"className=" w-full border border-sky-500 rounded px-2 py-3" placeholder="Email" />
                                        </div>
                                        <div className="col px-3 mt-5 w-full">
                                            <input type="text"className=" w-full border border-sky-500 rounded px-2 py-3" placeholder="Subject" />
                                        </div>
                                        <div className="col px-3 mt-5 w-full">
                                            <textarea  className=" w-full border border-sky-500 rounded px-2 py-3" placeholder="Message" rows="6"/>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </section>

                </div>
            </div>
        </>
    )
}

export default ContactPage