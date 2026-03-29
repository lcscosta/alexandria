'use client';

import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';

import SideNav from "./sidenav";


export default function NavBar() {
    const [visible, setVisible] = useState(false);

    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items: MenuItem[] = [
        {
            label: 'Menu',
            icon: 'pi pi-bars',
            command: () => setVisible(prev => !prev)
        }
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" className="h-10 mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2 h-10">
            <InputText placeholder="Search" type="text" className="h-full w-8rem sm:w-auto" />
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" style={{ width: '40px', height: '40px', lineHeight: '40px' }}  shape="circle" />
        </div>
    );

    return (
        <div>
            <div className="card relative">
                <Menubar model={items} start={start} end={end} />
                {visible && <SideNav/>}
            </div>
        </div>
    )
}
        