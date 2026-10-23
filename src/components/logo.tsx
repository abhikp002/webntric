import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  if (iconOnly) {
    return (
      <span className={`inline-flex items-center shrink-0 ${className}`}>
        <Image
          src="/images/brand/logo-icon.png"
          alt="Webntric Software"
          width={88}
          height={88}
          className="h-8 sm:h-9 w-auto object-contain"
          unoptimized
          priority
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center shrink-0 ${className}`}>
      <Image
        src="/images/brand/webntric-brand-logo.png"
        alt="Webntric Software"
        width={360}
        height={80}
        className="h-8 sm:h-9 w-auto object-contain"
        unoptimized
        priority
      />
    </span>
  );
}
