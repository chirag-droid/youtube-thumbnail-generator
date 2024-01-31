import { ImageResponse } from 'next/og';

import Thumbnail from './thumbnail'
import React from 'react';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const width = Number.parseInt(searchParams.get("width") ?? "1280")
    const height = Number.parseInt(searchParams.get("height") ?? "720")

    const name = searchParams.get("name") ?? "React"
    const type = searchParams.get("type") ?? "original"

    const res = await fetch(`https://raw.githubusercontent.com/devicons/devicon/master/icons/${name.toLowerCase()}/${name.toLowerCase()}-${type}.svg`)

    if (!res.ok) {
        return Response.json({ error: `${name} icon with type ${type} not found.` }, {
            status: 500
        })
    }

    const image = await res.text()

    return new ImageResponse((
        <Thumbnail
            svg={image}
            name={name}
        />
    ), {
        width,
        height
    })
}
