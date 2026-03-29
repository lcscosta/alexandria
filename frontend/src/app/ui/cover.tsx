
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function Cover() {
    return (
        <div className="card">
            <div className="flex flex-wrap">
                <div className="w-full p-2">
                    <Skeleton width="100%" height="10rem"></Skeleton>
                </div>
            </div>
        </div>
    );
}
        