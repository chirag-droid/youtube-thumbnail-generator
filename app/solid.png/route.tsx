import { ImageResponse } from 'next/og';

import React from 'react';
import Solid from './solid';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const width = Number.parseInt(searchParams.get("width") ?? "1280")
    const height = Number.parseInt(searchParams.get("height") ?? "720")

    const color = searchParams.get("color") ?? "#ffffff"

    return new ImageResponse(<Solid color={color} />, {
        width,
        height
    })
}
