import { ImageResponse } from 'next/og';

import Thumbnail from './thumbnail.tsx'
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const headline = searchParams.get("headline")

    return new ImageResponse((<Thumbnail headline={ headline }></Thumbnail>), {
        width: 1280,
        height: 720
    })
}
