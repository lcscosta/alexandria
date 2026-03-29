'use client'

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function SideNav() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Recents',
        },
        {
            label: 'Categories',
            items: [
                {
                    label: 'Uncategorized'
                },
                {
                    icon: 'pi pi-plus'
                }
            ]
        },
    ];

    return (
        <div className="card flex mt-2 ml-2">
            <Toast ref={toast} />
            <Menu model={items} />
        </div>
    )
}
        