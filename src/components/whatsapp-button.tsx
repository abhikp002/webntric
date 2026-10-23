"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/site-config";
import { trackEvent } from "@/lib/analytics";

export default function WhatsAppButton() {
  const encodedMessage = encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage);
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${SITE_CONFIG.whatsappNumber}&text=${encodedMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 print:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("whatsapp_clicked", { location: "floating_widget" })
        }
        className="inline-flex items-center gap-2.5 h-12 px-4 rounded-full bg-card text-foreground border border-border shadow-lg hover:border-primary/50 hover:shadow-xl transition-all text-xs font-semibold"
        aria-label="Message Webntric Software on WhatsApp (+91 8090972654)"
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#15803d] text-white shrink-0">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-current"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.989-1.874-1.875-4.355-2.907-6.992-2.908-5.442 0-9.869 4.42-9.873 9.863-.001 1.636.43 3.23 1.25 4.636l-.97 3.541 3.633-.954zm10.902-7.525c-.29-.145-1.713-.846-1.978-.941-.264-.096-.457-.145-.649.145-.192.29-.744.941-.912 1.133-.167.192-.335.216-.625.071-1.353-.679-2.253-1.129-3.155-2.673-.24-.407.24-.378.687-1.272.073-.145.037-.272-.018-.382-.056-.11-.458-1.102-.628-1.512-.172-.411-.363-.354-.502-.354-.129-.007-.277-.008-.426-.008-.15 0-.395.056-.601.282-.206.226-.785.767-.785 1.87 0 1.102.8 2.167.912 2.311.114.145 1.574 2.408 3.815 3.376.533.23 1.01.381 1.356.49.536.17 1.024.146 1.408.089.43-.064 1.714-.7 1.978-1.378.264-.679.264-1.262.185-1.378-.079-.118-.29-.193-.58-.338z" />
          </svg>
        </span>
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
}
