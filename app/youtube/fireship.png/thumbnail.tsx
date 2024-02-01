import { isColor, svgToIcon } from "@/lib/utils";
import React from "react";
import  * as cheerio from "cheerio"
import { compact, uniq } from "lodash-es"
import chroma from "chroma-js"

export interface ThumbnailProps {
    name: string;
    svg: string;
}

const Thumbnail = ({ name, svg }: ThumbnailProps) => {
    const theme = {
        background: "#171717",
        primary: "#ffffff",
        text: "#0a0a0a",
    }

    // Extract theme color from image
    const $ = cheerio.load(svg)

    const fills = $('[fill]').map(function (_i, _el) {
        return $(this).attr('fill')
    }).get()
    const colors = uniq(fills
        .filter((x) => isColor(x)))
        .map((x) => chroma(x)
    )

    if (colors.length == 1) {
        theme.background = chroma("171717").brighten(1-colors[0].luminance()).hex()
        theme.primary = colors[0].hex()
        theme.text = theme.background
    }

    if (colors.length >= 2) {
        theme.background = chroma("171717").brighten(1-colors[0].luminance()).hex()
        theme.primary = colors[1].hex()
        theme.text = colors[0].hex()
    }
    
    return (
        <div tw={`bg-[${theme.background}]`} style={styles.container}>
            <div tw={`bg-[${theme.primary}] text-[${theme.text}] text-xl`} style={styles.header}>
                <span tw="text-2xl font-black">
                    {"100"}
                </span>
                <span tw="uppercase italic">
                    {"seconds of"}
                </span>
                <span>
                    {name}
                </span>
            </div>
            <div style={{ display: "flex" }} tw="w-full h-full items-center justify-center">
                <img
                    height="60%"
                    src={svgToIcon(svg)} />
            </div>
        </div>
    )
}

interface ThumbnailStyles {
    container: React.CSSProperties;
    header: React.CSSProperties;
}

const styles: ThumbnailStyles = {
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        color: "white",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "8%",
        gap: "6px"
    }
}

export default Thumbnail;
