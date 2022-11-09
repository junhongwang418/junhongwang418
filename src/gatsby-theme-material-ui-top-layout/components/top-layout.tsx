import React from "react";
import { SiteContextProvider } from "../../contexts/SiteContext";

export default function TopLayout({ children }) {
  return <SiteContextProvider>{children}</SiteContextProvider>;
}
