export interface ThumbnailProps {
    headline: string;
}

const Thumbnail = ({ headline }: ThumbailProps) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>{headline}</h1>
            <p>Hello World</p>
        </div>
    )
}

export default Thumbnail;
