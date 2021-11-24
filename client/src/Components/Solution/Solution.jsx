import React from 'react'
import "./Solution.css"
import {Icon} from "@iconify/react";

const Solution = () => {
    return (
        <>
            <section id="about-2" className="about-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        </div>
                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-1 px-lg-5">
                            <h2>Our Solution</h2>
                            <p>
                                D-Med provides a decentralized easy to use Electronic Medical Record system(EMR). It is a free to use web application providing a feature rich as well as interactive UI making it easy to use. 
                            </p>
                            <div className="icon-box">
                                <div className="icon">
                                <Icon icon="gridicons:not-visible"  className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Minimal Security Risks
                                </h4>
                                <p className="description">As previously mentioned. We use Ethereum Network for our computation making it very safe and secure. There cannot be a single point of failure.</p>
                            </div>
                            <div className="icon-box">
                                <div className="icon">
                                <Icon icon="gala:secure" className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Complete Privacy
                                </h4>
                                <p className="description">The application used IPFS technology for storage of patient's data. Every patient can control who can access their data. Only registerd Organizations and verified Medical Institute can access your data.</p>
                            </div>
                            <div className="icon-box">
                                <div className="icon">
                                <Icon icon="grommet-icons:user-admin" className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Verifies Admins
                                </h4>
                                <p className="description">For a Medical Institute to participate in this shared system, it need to be verified by one of the admins. Same goes for the Organizations. They require proper medical and identity license to be succesfully registerd.</p>
                            </div>
                            <div className="icon-box">
                                <div className="icon">
                                <Icon icon="emojione-monotone:money-with-wings" className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Non Profit
                                </h4>
                                <p className="description">D-Med is a free to use, non profit system. One does not need to buy this software. It is available for everyone. There are some public open feautes which can be accessed by anyone, be it admin, owner or someone visiting the website for he first time. All that is required is a crypto wallet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solution
