import "./globals.css";

import 'primeicons/primeicons.css';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';

import NavBar from "./ui/navbar";
import Cover from "./ui/cover";
import Recents from "./ui/recents";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <PrimeReactProvider>
            <NavBar />
            <Cover />
            <Recents />
          </PrimeReactProvider>
      </body>
    </html>
  );
}
