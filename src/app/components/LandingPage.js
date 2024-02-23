import React from "react";
import Image from "next/image";
import EmptyLandingLogo from "../../../public/LandingLogo.png";
import FilledLandingLogo from "../../../public/FilledLandingLogo.png";
import styles from "./FilledImage.module.css"; // Import CSS module

function LandingPage() {
  return (
    <div className="bg-black relative">
      <div className="text-center absolute">
        {/* Filled Logo (positioned below) */}
        <div className={`slideLeft relative transform scale-75 top-56 ${styles.filledImage }`}>
          <Image
            width={1725.6}
            height={297.52}
            src={FilledLandingLogo}
            alt="FilledLandingLogo"
          />
        </div>

        {/* Empty Logo (positioned on top) */}
        <div className={`relative transform scale-75 top-30 z-10`}>
          <Image
            width={1725.6}
            height={297.52}
            src={EmptyLandingLogo}
            alt="EmptyLandingLogo"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;