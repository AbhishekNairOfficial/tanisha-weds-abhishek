import React from "react"

type ImageComponentProps = React.ComponentProps<'img'> & {

}

const Image = (props: ImageComponentProps) => {
    const { height, width, className, ...rest } = props;
    return (
        <img
            className={`border-8 border-white object-cover ${className}`}
            style={{ height, width }}
            {...rest}
        />
    )
}

export default Image