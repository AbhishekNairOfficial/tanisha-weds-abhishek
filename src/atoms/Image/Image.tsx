import React from "react"
import { AnimatePresence, LayoutGroup, m, MotionProps } from 'framer-motion';
import useScreenWidth from "../../hooks/useScreenWidth";
import { MOBILE_SCREEN_WIDTH } from "../../config/constants";

type ImageComponentProps = React.ComponentProps<'img'> & MotionProps & {
    animate?: boolean;
    rotate?: number;
}

const Image = (props: ImageComponentProps) => {
    const {
        className,
        animate = false,
        rotate = 0,
        loading = 'lazy',
        ...rest } = props;

    const id = React.useId();
    const [expanded, setExpanded] = React.useState<boolean>(false);
    const screenWidth = useScreenWidth();

    const isMobile = screenWidth < MOBILE_SCREEN_WIDTH;

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
                        role={animate && !isMobile ? 'button' : ''}
                        onClick={() => animate && !isMobile && setExpanded(true)}
                        aria-label="Clickable Image"
                        layoutId={id}
                        key={id}
                        className={`border-8 border-white shadow-2xl object-cover ${className}`}
                        animate={{
                            rotate: rotate,
                            zIndex: 1
                        }}
                        loading={loading}
                        {...rest}
                    />
                </AnimatePresence>
            )}
        </LayoutGroup>
    )
}

export default Image