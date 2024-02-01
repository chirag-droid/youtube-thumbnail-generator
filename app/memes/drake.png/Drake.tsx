import React from "react";

export interface DrakeProps {
    lText: string;
    rText: string;
    lImage: ArrayBuffer;
    rImage: ArrayBuffer;
}

const Drake = ({ lText, rText, lImage, rImage }: DrakeProps) => {
    return (
        <div style={styles.container}>
            <div style={styles.memeContainer}>
                <img tw="flex-1" src={lImage as any as string} />
                <img tw="flex-1" src={rImage as any as string} />
            </div>
            <div style={styles.memeContainer}>
                <p tw="flex-1">{lText}</p>
                <p tw="flex-1">{rText}</p>
            </div>
        </div>
    )
}

interface Styles {
    container: React.CSSProperties;
    memeContainer: React.CSSProperties;
}

const styles: Styles = {
    container: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    memeContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    }
}

export default Drake;
