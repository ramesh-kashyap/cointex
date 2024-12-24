export default function Successfullypass() {
    return (
        <div>
            {/* <div className="preload preload-container">
                <div
                    className="preload-logo"
                    style={{ backgroundImage: "url('images/logo/144.png')" }}
                >
                    <div className="spinner"></div>
                </div>
            </div> */}

            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <a href="#" className="left back-btn">
                    <i className="icon-left-btn"></i>
                </a>
            </div>
            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <div className="banner-newpass">
                        <img src="assets/images/banner/banner3.jpg" alt="img" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="350"
                            height="335"
                            viewBox="0 0 390 335"
                            fill="none"
                        >
                            <g opacity="0.8" filter="url(#filter0_f_1_1349)">
                                <path
                                    d="M291.339 167.427C163.548 233.37 248.02 233.37 194.583 233.37C141.147 233.37 244.482 246.642 97.8276 167.427C-48.8269 88.2118 141.147 101.483 194.583 101.483C248.02 101.483 419.129 101.483 291.339 167.427Z"
                                    fill="url(#paint0_linear_1_1349)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_1_1349"
                                    x="-56.6567"
                                    y="0.647461"
                                    width="494.378"
                                    height="333.559"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="50"
                                        result="effect1_foregroundBlur_1_1349"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_1_1349"
                                    x1="300.924"
                                    y1="100.647"
                                    x2="238.347"
                                    y2="286.616"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#E250E5" />
                                    <stop offset="1" stopColor="#4B50E6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h2 className="mt-80 text-center">
                        New password has changed successfully
                    </h2>
                    <p className="mt-8 text-center text-large">
                        You have successfully confirmed your new password. Please, use your
                        new password when logging in.
                    </p>
                    <a href="log-in.html" className="tf-btn primary lg mt-60">
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
}
