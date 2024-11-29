import React from "react";

type PhotoUploadProps = {
    instructions: React.ReactNode
    onFilesUpload: (files: File[]) => void
}

const PhotoUpload = (props: PhotoUploadProps) => {
    const {
        instructions,
        onFilesUpload
    } = props

    const fileInputRef = React.useRef<HTMLInputElement>(null);

    // Trigger file input when box is clicked
    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    // Handle file drag over event to enable dropping
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    // Process dropped files
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        // Convert dropped files to array and filter for images
        const updatedFiles = Array.from(e.dataTransfer.files)
            .filter(file => file.type.startsWith('image/'));

        onFilesUpload(updatedFiles);
    };

    // Handle file selection via click
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const updatedFiles = Array.from(e.target.files)
                .filter(file => file.type.startsWith('image/'));
            onFilesUpload(updatedFiles);
        }
    };

    return (
        <div
            className="
                w-96 h-64 border-2 border-dashed border-primary
                rounded-lg flex flex-col items-center justify-center 
                cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleBoxClick}
        >
            {/* Hidden file input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                multiple
                accept="image/*"
                className="hidden"
            />

            {/* Instruction text */}
            {instructions}
        </div>
    )
}

export default PhotoUpload;