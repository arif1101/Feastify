import React from 'react';

const HeroMenu = ({heroImg, size, title}) => {

    const heightList = {
        "full": "h-full",
        "screen": "h-screen",
        "800": "h-[800px]",
        "500": "h-[500px]",
        "600": "h-[600px]",
        "700": "h-[700px]",
    };
    const heightClass = heightList[size] || "";
    
    return (
        <div
        className={`hero ${heightClass}`}
        style={{
            backgroundImage: `url(${heroImg})`,
        }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
            </div>
        </div>
    );
};

export default HeroMenu;