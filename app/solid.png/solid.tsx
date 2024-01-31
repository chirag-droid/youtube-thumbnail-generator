import { isColor } from "@/lib/utils";
import React from "react";

export interface SolidProps {
    color: string;
}

const Solid = ({ color }: SolidProps) => {
    return <div style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: color
    }} />
}

export default Solid;
