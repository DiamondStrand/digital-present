"use client";

import Lottie from 'lottie-react';
import flowerAnimation from '../animations/flower.json';

export default function FlowerAnimation() {
  return (
    <div className="w-[50rem] h-[50rem]"> 
      <Lottie 
        animationData={flowerAnimation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}