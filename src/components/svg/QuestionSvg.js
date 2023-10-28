import React from "react";
const QuestionSvg=()=>{
    return(
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_684_1226)">
        <path d="M10 14C10 9.58172 13.5817 6 18 6H42C46.4183 6 50 9.58172 50 14V38C50 42.4183 46.4183 46 42 46H18C13.5817 46 10 42.4183 10 38V14Z" fill="white" shape-rendering="crispEdges"/>
        <circle cx="30" cy="26" r="9" stroke="#872657" stroke-width="2"/>
        <circle cx="30" cy="32" r="0.5" fill="#872657" stroke="#872657"/>
        <path d="M30 30V28.5811C30 27.6369 30.6042 26.7986 31.5 26.5V26.5C32.3958 26.2014 33 25.3631 33 24.4189V23.9057C33 22.3009 31.6991 21 30.0943 21H30C28.3431 21 27 22.3431 27 24V24" stroke="#872657" stroke-width="2"/>
        </g>
        <defs>
        <filter id="filter0_d_684_1226" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_684_1226"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.529412 0 0 0 0 0.14902 0 0 0 0 0.341176 0 0 0 0.2 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_684_1226"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_684_1226" result="shape"/>
        </filter>
        </defs>
        </svg>
        
    )
}
export default QuestionSvg;