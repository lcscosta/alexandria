import SideNav from "@/app/ui/sidenav";
import "./globals.css";

import 'primeicons/primeicons.css';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';

import NavBar from "./ui/navbar";
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
          </PrimeReactProvider>
      </body>
    </html>
  );
}
