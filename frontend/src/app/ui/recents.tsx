'use client'

import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import { Skeleton } from 'primereact/skeleton';

import { RecentBooks } from '../service/productservice.tsx';

export default function Recents() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 5,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        RecentBooks.getItems().then(data => setProducts(data.slice(0,9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="surface-border border-round m-2 text-center py-5 px-3">
                <div className="flex flex-wrap items-center justify-center">
                    <Skeleton width="8rem" height="8rem"></Skeleton>
                </div>
                <h4 className="mt-1">{product.name}</h4>
            </div>
        );
    };

    return (
        <div className="card p-2">
            <Card title="Recents">
                <Carousel value={products} numScroll={2} numVisible={5} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
            </Card>
        </div>
    )
}



