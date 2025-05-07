import React from "react"
export default function Services() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-between items-start p-56">
                    <div className="flex flex-col justify-center gap-5 items-start">
                        <span className="w-[700px] flex flex-col justify-center items-start gap-4">
                        <p className="text-2xl capitalize  ">
                            our services
                        </p>
                        <h2 className="text-5xl font-bold ">Results-Driven SEO & Digital Marketing Services</h2>
                        <p className="text-lg text-gray-600">At SEOX, we provide tailored SEO and digital marketing solutions designed to boost your online visibility, drive targeted traffic, and maximize conversions. </p>
                        </span>
                        <button className="border rounded-2xl p-3">view all services</button>
                    </div>
                    <img src="https://unifato.com/seox/assets/img/service/service1-image.png" alt="" />
                </div>

            </div>
        </>
    )
}