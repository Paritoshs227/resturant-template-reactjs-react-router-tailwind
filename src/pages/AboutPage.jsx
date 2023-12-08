
const AboutPage = () => {
  return (
    <>
           <div className="w-full bannerGradient bg-no-repeat bg-cover bg-center">
                <section className=" w-full container mx-auto px-14 py-28 text-white text-center">
                   <h1 className="text-6xl font-bold text my-12">About Us</h1>
                </section>
            </div>

            <div className="bg-white w-full">
                <div className="container mx-auto ">            
                    <section className="px-3 py-5 w-full flex flex-col lg:flex-row lg:items-center">
                        <div className="px-3 mt-10 w-full lg:w-1/2">
                            <div className="flex w-full flex-wrap">
                                <div className="w-1/2 px-2 mt-3"><img className="w-full" src="/assets/img/about-1.jpg" alt="" width="286" height="286" /></div>
                                <div className="w-1/2 px-2 mt-3"><img className="w-3/4 mt-[25%]" src="/assets/img/about-2.jpg" alt="" /></div>
                                <div className="w-1/2 px-2 mt-3 "><img className="w-3/4 ml-[25%]" src="/assets/img/about-3.jpg" alt="" /></div>
                                <div className="w-1/2 px-2 mt-3"><img className="w-full" src="/assets/img/about-4.jpg" alt="" /></div>
                            </div>
                        </div>
                        <div className="px-3 mt-10 w-full lg:w-1/2">
                            <h4 className="font-bold text-xl mt-4 text-yellow-500">About Us</h4>
                            <h2 className="font-bold text-2xl lg:text-4xl inline-flex">Welcome to &nbsp; <img className="w-1/12"
                                src="/assets/img/icons8-utensils-50.png" alt="" /> &nbsp; Resturant</h2>
                            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, magni provident repellat
                                odit totam maiores, nam dolore porro accusamus laborum esse. Sapiente, nulla?</p>
                            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, magni provident
                                repellat odit totam maiores, nam dolore porro accusamus laborum esse. Sapiente, nulla?</p>
                            <div className="w-full flex flex-col sm:flex-row">
                                <div className="w-full mt-5">
                                    <div className="flex px-3 items-center border-s-8 border-yellow-500">
                                        <h4 className="font-bold text-3xl text-yellow-500">15</h4>
                                        <div className="ps-4 ">
                                            <p>Years of</p>
                                            <h4 className="font-bold text-md ">EXPERIENCE</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-5">
                                    <div className="flex px-3 items-center border-s-8 border-yellow-500">
                                        <h4 className="font-bold text-3xl text-yellow-500">50</h4>
                                        <div className="ps-4 ">
                                            <p>Popular</p>
                                            <h4 className="font-bold text-md ">MASTER CHEFS</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="bg-yellow-500 hover:bg-yellow-400  text-white text-base font-semibold mt-8 py-5 px-14 md:py-4 md:px-16 rounded-sm ">READ
                                MORE</button>
                        </div>
                    </section>         
                    <section className="px-3 py-5 w-full ">
                        <div className="text-center w-full">
                            <h4 className="font-bold text-xl mt-4 text-yellow-500 ">Team Members</h4>
                            <h2 className="font-bold text-3xl lg:text-4xl  mb-5 ">Our Master Chefs</h2>
                        </div>

                        <div className="flex flex-wrap px-3 pt-12 pb-8 flex-col md:flex-row">
                            <div className="px-3 w-full md:w-1/2 lg:w-1/4">
                                <div className="bg-white  customBoxShadow p-7 text-center mt-16">
                                    <img className="w-full rounded-full" src="/assets/img/team-1.jpg" alt="" />
                                    <h4 className="font-bold text-xl mt-4">Full Name</h4>
                                    <small className="text-slate-500">Desigination</small>
                                </div>
                            </div>
                            <div className="px-3 w-full md:w-1/2 lg:w-1/4">
                                <div className="bg-white  customBoxShadow p-7 text-center mt-16">
                                    <img className="w-full rounded-full" src="/assets/img/team-2.jpg" alt="" />
                                    <h4 className="font-bold text-xl mt-4">Full Name</h4>
                                    <small className="text-slate-500">Desigination</small>
                                </div>
                            </div>
                            <div className="px-3 w-full md:w-1/2 lg:w-1/4">
                                <div className="bg-white  customBoxShadow p-7 text-center mt-16">
                                    <img className="w-full rounded-full" src="/assets/img/team-3.jpg" alt="" />
                                    <h4 className="font-bold text-xl mt-4">Full Name</h4>
                                    <small className="text-slate-500">Desigination</small>
                                </div>
                            </div>
                            <div className="px-3 w-full md:w-1/2 lg:w-1/4">
                                <div className="bg-white  customBoxShadow p-7 text-center mt-16">
                                    <img className="w-full rounded-full" src="/assets/img/team-4.jpg" alt="" />
                                    <h4 className="font-bold text-xl mt-4">Full Name</h4>
                                    <small className="text-slate-500">Desigination</small>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
    </>
  )
}

export default AboutPage