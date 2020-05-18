import React from 'react';

import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
import p4 from '../../assets/images/small-business-ideas.jpg';
import p5 from '../../assets/images/p5.png';

const PhotoStrip = () => (
  <div className="flex">
    <div className="w-1/2 lg:w-1/5">
      <img src={p1} height="100%" width="auto" alt="#KeepSmallStrong" />
    </div>
    <div className="w-1/2 lg:w-1/5">
      <img src={p2} height="100%" width="auto" alt="#KeepSmallStrong" />
    </div>
    <div className="hidden lg:block lg:w-1/5">
      <img src={p3} height="100%" width="auto" alt="#KeepSmallStrong" />
    </div>
    <div className="hidden lg:block lg:w-1/5">
      <img src={p4} height="100%" width="auto" alt="#KeepSmallStrong" />
    </div>
    <div className="hidden lg:block lg:w-1/5">
      <img src={p5} height="100%" width="auto" alt="#KeepSmallStrong" />
    </div>
  </div>
);

export default PhotoStrip;
