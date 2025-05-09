import React from "react"
export default function Services() {
    const data = [
        {
            number: 1,
            head: 'Search Engine Optimization (SEO)',
            para: 'Enhance your website’s visibility on search engines with comprehensive SEO strategies including reserarch.'
        },
        {
            number: 2,
            head: 'Content Marketing',
            para: 'Engage your audience with high-quality, relevant content that drives traffic fosters customer.'
        },
        {
            number: 3,
            head: 'Pay-Per-Click(PPC) Advertising',
            para: 'Maximize your ROI with targeted PPC campaigns designed to attract the right audience customers.'
        },
        {
            number: 4,
            head: 'Social Media Marketing',
            para: 'Build a strong social media presence to connect with your audience, awareness, engagement.'
        },
        {
            number: 5,
            head: 'Website Design & Deployment',
            para: 'Create a user-friendly, responsive website that not only looks great but also performs exceptionally.'
        },
        {
            number: 6,
            head: 'Analytics & Reporting',
            para: 'Gain insights into your digital performance detailed reporting to inform your strategy & reporting.'
        },
    ]
    return (
        <>
            <div className="flex flex-col bg-gray-100">
                <div className="flex justify-between items-start p-56">
                    <div className="flex flex-col justify-center gap-5 items-start">
                        <span className="w-[700px] flex flex-col justify-center items-start gap-4">
                            <p className="text-2xl capitalize  ">
                                our services
                            </p>
                            <h2 className="text-5xl font-bold ">Results-Driven SEO & Digital Marketing Services</h2>
                            <p className="text-lg text-gray-600">At SEOX, we provide tailored SEO and digital marketing solutions designed to boost your online visibility, drive targeted traffic, and maximize conversions. </p>
                        </span>
                        <button className="rounded-full px-6 py-3 bg-lime-300 text-black font-bold text-lg capitalize ">view all services</button>
                    </div>
                    <img src="https://unifato.com/seox/assets/img/service/service1-image.png" alt="" />
                </div>
                <div className="flex flex-wrap ">
                    {
                        data.map((value, index) => (
                            <div key={index}>
                                <p>
                                    {value.number}
                                </p>
                                <span>
                                    <h6>{value.head}</h6>
                                    <p>{value.para}</p>
                                </span>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}