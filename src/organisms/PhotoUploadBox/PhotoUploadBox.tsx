import React from 'react';
import PhotoUpload from '../../atoms/PhotoUpload/PhotoUpload';
import ThankYou from '../../atoms/ThankYou/ThankYou';
import useToast from '../../hooks/useToast';
import { uploadImages } from '../../utils/supabase/supabase';

const PhotoUploadBox: React.FC = () => {
    const [showToast, setShowToast] = useToast({});

    const onFilesUpload = async (files: File[]) => {
        const success = await uploadImages(files);
        if (success) {
            setShowToast(true);
        }
    }

    return (
        <div className='flex justify-center relative'>
            {showToast && (<ThankYou />)}
            <PhotoUpload
                instructions={
                    <p className="font-footer text-primary text-center">
                        Drag here or select photos
                    </p>
                }
                onFilesUpload={onFilesUpload}
            />
        </div>
    );
};

export default PhotoUploadBox;