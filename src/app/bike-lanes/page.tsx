// src/app/bike‑lanes/page.tsx
// import BikeLaneMap from '@/components/BikeLaneMap';
"use client"
import dynamic from 'next/dynamic';


const BikeLaneMap = dynamic(
    () => import('@/components/BikeLaneMap'),
    {
        ssr: false
    }
)

export default function BikeLanesPage() {
    return <BikeLaneMap />;
}
