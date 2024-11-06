"use client";

import Lottie from 'lottie-react';
import flowerAnimation from '../animations/flower.json';

export default function FlowerAnimation() {
  return (
    <div className="w-full md:w-[50rem] md:h-[50rem]"> 
      <Lottie 
        animationData={flowerAnimation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}