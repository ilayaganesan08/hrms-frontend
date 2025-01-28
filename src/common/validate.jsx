import ReactDOM from 'react-dom';
import ImportedURL from './api';
import ImageNotFountObjectFit from '../assets/img/imagenotfound.jpg';

export function createSlug(text = '') {
    var slug = text;
    slug = slug.replace(/[^\w\-]+/g, "-");
    slug = slug.toLowerCase();
    return slug
}

export function imageValidation(logo) {
    if (logo != undefined && logo) {
        const fileInfo = logo;
        const fileType = fileInfo.type;
        const type = fileType.split('/');
        if (type[1] === 'jpg' || type[1] === 'jpeg' || type[1] === 'png') {
            return 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

export function videoValidation(video) {
    if (video !== undefined && video) {
        const fileInfo = video;
        const fileType = fileInfo.type;
        const type = fileType.split('/');
        if (type[1] === 'mp4' || type[1] === 'avi' || type[1] === 'mkv' || type[1] === 'mov' || type[1] === 'webm') {
            return 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

export function onErrorImage(e) {
    e.target.onerror = null;
    e.target.src = ImageNotFountObjectFit;
}

export const imageCellRendererList = (props) => {
    const imageUrl = props.value ? `${ImportedURL.LIVEURL}${props.value}` : ImageNotFountObjectFit;
    return (
        <img
            src={imageUrl}
            alt=""
            onError={onErrorImage}
            className="ag-grid-contain-image"
        />
    );
};
    // Email validation function using a regex pattern
export  const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    export const validatePhoneNumber = (phone) => {
        const phoneRegex =/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g ; // Example for 10 digits
        return phoneRegex.test(phone);
    };