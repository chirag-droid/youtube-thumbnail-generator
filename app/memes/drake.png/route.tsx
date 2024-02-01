import { ImageResponse } from 'next/og';

import React from 'react';
import Drake from './Drake';

export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const width = Number.parseInt(searchParams.get("width") ?? "640")
    const height = Number.parseInt(searchParams.get("height") ?? "640")

    const left = searchParams.get("left") ?? "Using photoshop to create memes"
    const right = searchParams.get("right") ?? "Using `ImageGenerator` to create memes"

    const lImage = await fetch(new URL('../../../assets/ldrake.png', import.meta.url)).then(
        (res) => res.arrayBuffer()
    )
    const rImage = await fetch(new URL('../../../assets/rdrake.png', import.meta.url)).then(
        (res) => res.arrayBuffer()
    )
 
    return new ImageResponse(<Drake lText={left} rText={right} lImage={lImage} rImage={rImage} />, {
        width,
        height
    })
}
