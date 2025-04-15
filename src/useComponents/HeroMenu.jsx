import React from 'react';

const HeroMenu = ({heroImg, size, title}) => {

    const heightList = {
        full: 'md:h-full',
        screen: 'md:h-screen',
        800: 'md:h-[800px]',
        700: 'md:h-[700px]',
        600: 'md:h-[600px]',
        500: 'md:h-[500px]',
      };
    
      const mdHeightClass = heightList[size] || '';
    
    return (
        <div
        className={`hero h-[300px] ${mdHeightClass} `}
        style={{
            backgroundImage: `url(${heroImg})`,
        }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center ">
                <div className="max-w-md ">
                <h1 className="mb-5 text-3xl md:text-5xl font-bold">{title}</h1>
                <p className="text-[14px]">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
            </div>
        </div>
    );
};

export default HeroMenu;