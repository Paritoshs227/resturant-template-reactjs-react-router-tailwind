
const HomePage = () => {
    return (
        <>
            <div className="w-full bannerGradient bg-no-repeat bg-cover bg-center">
                <section className=" w-full flex container mx-auto  flex-col lg:flex-row py-10 px-6 md:px-7 lg:px-12 lg:pt-32">
                    <div className="left w-full text-center py-10 my-10 lg:w-1/2 lg:text-left">
                        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl !leading-tight text-white mt-16">Enjoy
                            Our<br />Delicious
                            Meal</h1>
                        <p className="text-white mt-4 text-base font-semibold">Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                            sit.
                            Aliqu diam amet diam et
                            eos. Clita erat ipsum et
                            lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <button type="button"
                            className="bg-yellow-500 hover:bg-yellow-400  text-white text-base font-semibold mt-10 py-2 px-5 md:py-4 md:px-16 rounded-sm ">BOOK
                            A
                            TABLE</button>
                    </div>
                    <div className="right w-full overflow-hidden lg:w-1/2">
                        <img src="/assets/img/hero.png" className="max-w-full h-auto  pizzaSpin" />
                    </div>
                </section>
            </div>
            <div className="bg-white w-full">
                <div className="container mx-auto ">
                    <section className="flex flex-wrap px-3 pt-12 pb-8 ">
                        <div className="px-3 mb-10 w-full md:w-1/2 lg:w-1/4 ">
                            <div className="py-8 px-6 bg-white customBoxShadow">
                                <img className="w-1/5" src="/assets/img/icons8-chef-50.png" alt="" />
                                <h4 className="font-bold text-xl mt-4">Master Chefs</h4>
                                <p className="mt-4 text-gray-600 font-semibold">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                                    amet diam</p>
                            </div>
                        </div>
                        <div className="px-3 mb-10 w-full md:w-1/2 lg:w-1/4 ">
                            <div className="py-8 px-6 bg-white customBoxShadow">
                                <img className="w-1/5" src="/assets/img/icons8-utensils-50.png" alt="" />
                                <h4 className="font-bold text-xl mt-4">Quality Food</h4>
                                <p className="mt-4 text-gray-600 font-semibold">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                                    amet diam</p>
                            </div>
                        </div>
                        <div className="px-3 mb-10 w-full md:w-1/2 lg:w-1/4 ">
                            <div className="py-8 px-6 bg-white customBoxShadow">
                                <img className="w-1/5" src="/assets/img/icons8-cart-50.png" alt="" />
                                <h4 className="font-bold text-xl mt-4">Online Order</h4>
                                <p className="mt-4 text-gray-600 font-semibold">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                                    amet diam</p>
                            </div>
                        </div>
                        <div className="px-3 mb-10 w-full md:w-1/2 lg:w-1/4 ">
                            <div className="py-8 px-6 bg-white customBoxShadow">
                                <img className="w-1/5" src="/assets/img/icons8-headphone-64.png" alt="" />
                                <h4 className="font-bold text-xl mt-4">24/7 Service</h4>
                                <p className="mt-4 text-gray-600 font-semibold">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                                    amet diam</p>
                            </div>
                        </div>
                    </section>
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
                            <h4 className="font-bold text-xl mt-4 text-yellow-500 ">Food Menu</h4>
                            <h2 className="font-bold text-3xl lg:text-4xl  mb-5 ">Most Popular Items</h2>
                        </div>
                        <div className="tabcontainer w-full text-center">
                            <ul className="  flex-wrap inline-flex  justify-center border-b border-gray-200">
                                <li className="">
                                    <a href="#" className=" flex pb-5 border-b-4 border-yellow-500">
                                        <div className="flex px-3 items-center">
                                            <img className="w-2/5" src="/assets/img/icons8-coffee-50.png" alt="" />
                                            <div className="ps-4 leading-4 text-left">
                                                <p>Popular</p>
                                                <h4 className="font-bold text-md ">Breakfast</h4>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#" className=" flex pb-5 ">
                                        <div className="flex px-3 items-center">
                                            <img className="w-2/5" src="/assets/img/icons8-coffee-50.png" alt="" />
                                            <div className="ps-4 leading-4 text-left">
                                                <p>Popular</p>
                                                <h4 className="font-bold text-md ">Breakfast</h4>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#" className=" flex pb-5 ">
                                        <div className="flex px-3 items-center">
                                            <img className="w-2/5" src="/assets/img/icons8-coffee-50.png" alt="" />
                                            <div className="ps-4 leading-4 text-left">
                                                <p>Popular</p>
                                                <h4 className="font-bold text-md ">Breakfast</h4>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="tablist w-full">
                                <div className=" w-full flex flex-col lg:flex-row mt-5 flex-wrap">
                                    <div className="px-3 w-full mt-5 lg:w-1/2">
                                        <div className=" flex items-center w-full">
                                            <img src="/assets/img/menu-1.jpg" alt="" className="w-20" />
                                            <div className=" flex flex-col text-start  ps-5 w-full">
                                                <h5 className=" flex justify-between border-b">
                                                    <span className="text-lg font-bold">Chicken Burger</span><span
                                                        className="text-xl font-bold text-yellow-500">$115</span>
                                                </h5>
                                                <small><i className="">Ipsum ipsum clita erat amet dolor justo diam</i></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3 w-full mt-5 lg:w-1/2">
                                        <div className=" flex items-center w-full">
                                            <img src="/assets/img/menu-2.jpg" alt="" className="w-20" />
                                            <div className=" flex flex-col text-start  ps-5 w-full">
                                                <h5 className=" flex justify-between border-b">
                                                    <span className="text-lg font-bold">Chicken Burger</span><span
                                                        className="text-xl font-bold text-yellow-500">$115</span>
                                                </h5>
                                                <small><i className="">Ipsum ipsum clita erat amet dolor justo diam</i></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3 w-full mt-5 lg:w-1/2">
                                        <div className=" flex items-center w-full">
                                            <img src="/assets/img/menu-3.jpg" alt="" className="w-20" />
                                            <div className=" flex flex-col text-start  ps-5 w-full">
                                                <h5 className=" flex justify-between border-b">
                                                    <span className="text-lg font-bold">Chicken Burger</span><span
                                                        className="text-xl font-bold text-yellow-500">$115</span>
                                                </h5>
                                                <small><i className="">Ipsum ipsum clita erat amet dolor justo diam</i></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3 w-full mt-5 lg:w-1/2">
                                        <div className=" flex items-center w-full">
                                            <img src="/assets/img/menu-4.jpg" alt="" className="w-20" />
                                            <div className=" flex flex-col text-start  ps-5 w-full">
                                                <h5 className=" flex justify-between border-b">
                                                    <span className="text-lg font-bold">Chicken Burger</span><span
                                                        className="text-xl font-bold text-yellow-500">$115</span>
                                                </h5>
                                                <small><i className="">Ipsum ipsum clita erat amet dolor justo diam</i></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3 w-full mt-5 lg:w-1/2">
                                        <div className=" flex items-center w-full">
                                            <img src="/assets/img/menu-5.jpg" alt="" className="w-20" />
                                            <div className=" flex flex-col text-start  ps-5 w-full">
                                                <h5 className=" flex justify-between border-b">
                                                    <span className="text-lg font-bold">Chicken Burger</span><span
                                                        className="text-xl font-bold text-yellow-500">$115</span>
                                                </h5>
                                                <small><i className="">Ipsum ipsum clita erat amet dolor justo diam</i></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3 w-full mt-5 lg:w-1/2">
                                        <div className=" flex items-center w-full">
                                            <img src="/assets/img/menu-6.jpg" alt="" className="w-20" />
                                            <div className=" flex flex-col text-start  ps-5 w-full">
                                                <h5 className=" flex justify-between border-b">
                                                    <span className="text-lg font-bold">Chicken Burger</span><span
                                                        className="text-xl font-bold text-yellow-500">$115</span>
                                                </h5>
                                                <small><i className="">Ipsum ipsum clita erat amet dolor justo diam</i></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3 w-full mt-5 lg:w-1/2">
                                        <div className=" flex items-center w-full">
                                            <img src="/assets/img/menu-7.jpg" alt="" className="w-20" />
                                            <div className=" flex flex-col text-start  ps-5 w-full">
                                                <h5 className=" flex justify-between border-b">
                                                    <span className="text-lg font-bold">Chicken Burger</span><span
                                                        className="text-xl font-bold text-yellow-500">$115</span>
                                                </h5>
                                                <small><i className="">Ipsum ipsum clita erat amet dolor justo diam</i></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3 w-full mt-5 lg:w-1/2">
                                        <div className=" flex items-center w-full">
                                            <img src="/assets/img/menu-8.jpg" alt="" className="w-20" />
                                            <div className=" flex flex-col text-start  ps-5 w-full">
                                                <h5 className=" flex justify-between border-b">
                                                    <span className="text-lg font-bold">Chicken Burger</span><span
                                                        className="text-xl font-bold text-yellow-500">$115</span>
                                                </h5>
                                                <small><i className="">Ipsum ipsum clita erat amet dolor justo diam</i></small>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>


                        </div>

                    </section>
                    <section className="py-5 w-full ">
                        <div className="row w-full flex flex-col md:flex-row">
                            <div className="col w-full ">
                                <div className="formimg w-full"></div>
                            </div>
                            <div className="col w-full bg-[#0F172B]">
                                <div className="p-14">
                                    <div className="w-full">
                                        <h4 className="font-bold text-xl mt-4 text-yellow-500 ">Reservation</h4>
                                        <h2 className="font-bold text-3xl lg:text-4xl mb-5 text-white ">Book A Table Online</h2>
                                    </div>
                                    <form action="" className="w-full flex flex-wrap">
                                        <div className="col w-full mt-3 md:w-1/2 px-1">
                                            <div className="w-full">
                                                <input type="text" className="w-full py-2 ps-2" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col w-full mt-3 md:w-1/2 px-1">
                                            <div className="w-full">
                                                <input type="email" className="w-full py-2 ps-2" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col w-full mt-3 md:w-1/2 px-1">
                                            <div className="w-full">
                                                <input type="datetime-local" className="w-full py-2 ps-2" placeholder="Date and Time" />
                                            </div>
                                        </div>
                                        <div className="col w-full mt-3 md:w-1/2 px-1">
                                            <div className="w-full">
                                                <select name="" id="" className="w-full py-2 ps-2">
                                                    <option value="">People 1</option>
                                                    <option value="">People 2</option>
                                                    <option value="">People 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col w-full mt-3 px-1">
                                            <div className="w-full">
                                                <textarea className="py-2 ps-2 w-full" name="" id="" cols="30" rows="5" placeholder="Special Request"></textarea>
                                            </div>
                                        </div>
                                        <div className="col w-full mt-3 px-1">
                                            <div className="full">
                                                <button className="bg-yellow-500 hover:bg-yellow-400 w-full text-white text-base font-semibold  py-5 px-14 md:py-4 md:px-16 rounded-sm ">BOOK NOW</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
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

export default HomePage