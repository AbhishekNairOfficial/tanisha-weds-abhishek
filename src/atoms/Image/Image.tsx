import React from "react"
import { AnimatePresence, LayoutGroup, m, MotionProps } from 'framer-motion';

type ImageComponentProps = React.ComponentProps<'img'> & MotionProps & {
    animate?: boolean;
    rotate?: number;
}

const Image = (props: ImageComponentProps) => {
    const { className, animate = false, rotate = 0, ...rest } = props;

    const id = React.useId();
    const [expanded, setExpanded] = React.useState<boolean>(false);

    return (
        <LayoutGroup>
            {expanded ? (
                <>
                    <AnimatePresence mode='wait'>
                        <m.img
                            role='button'
                            onClick={() => setExpanded(false)}
                            layoutId={id}
                            key={id}
                            className="absolute border-8 border-white shadow-lg object-cover w-[40vw]"
                            loading="lazy"
                            animate={{
                                rotate: 0,
                                zIndex: 2,
                            }}
                            exit={{
                                zIndex: 1,
                            }}
                            {...rest}
                        />
                    </AnimatePresence>
                    <div className={className} />
                </>
            ) : (
                <AnimatePresence mode='wait'>
                    <m.img
                        role={animate ? 'button' : ''}
                        onClick={() => animate && setExpanded(true)}
                        aria-label="Clickable Image"
                        layoutId={id}
                        key={id}
                        className={`border-8 border-white shadow-lg object-cover ${className}`}
                        animate={{
                            rotate: rotate,
                            zIndex: 1
                        }}
                        loading="lazy"
                        {...rest}
                    />
                </AnimatePresence>
            )}
        </LayoutGroup>
    )
}

export default Image