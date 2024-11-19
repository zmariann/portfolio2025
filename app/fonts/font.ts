import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

export const neueRegrade: NextFontWithVariable = localFont({
  src: "neue_regrade.ttf",
  display: "swap",
  variable: "--neueRegrade-font",
});

export const regonia: NextFontWithVariable = localFont({
  src: "regonia.otf",
  display: "swap",
  variable: "--regonia-font",
  weight: "400",
});
