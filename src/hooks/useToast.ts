import React from 'react';

// Define the configuration options for the toast hook
interface UseToastOptions {
    /**
     * Duration in milliseconds for which the toast will be displayed
     * @default 3000 (3 seconds)
     */
    time?: number;
}

// Define the return type of the hook - a tuple with toast state and setter
type UseToastReturn = [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
];

/**
 * A custom hook for managing toast notifications
 * 
 * @param options Configuration options for the toast
 * @returns A tuple containing the toast visibility state and its setter
 */
const useToast = (options: UseToastOptions = {}): UseToastReturn => {
    // Destructure with default time of 3000ms
    const { time = 3000 } = options;

    // State to control toast visibility
    const [showToast, setShowToast] = React.useState<boolean>(false);

    // Effect to automatically hide toast after specified time
    React.useEffect(() => {
        // Only set up timer if toast is currently shown
        let timerId: NodeJS.Timeout | null = null;

        if (showToast) {
            timerId = setTimeout(() => {
                setShowToast(false);
            }, time);
        }

        // Clean up the timer to prevent memory leaks
        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, [showToast, time]);

    // Return tuple of state and setter
    return [showToast, setShowToast];
};

export default useToast;