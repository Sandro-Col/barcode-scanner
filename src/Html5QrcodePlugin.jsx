import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';
// import beepSound from "./assets/sounds/store-scanner-beep-90395.mp3";

// function playSound() {
//     new Audio(beepSound).play();
// }

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
    let config = {};
    if (props.fps) {
        config.fps = props.fps;
    }
    if (props.qrbox) {
        config.qrbox = props.qrbox;
    }
    if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
    }
    // if (props.aisle !== undefined) {
    //     config.aisle = props.aisle;
    // }
    // if (props.side !== undefined) {
    //     config.side = props.side;
    // }
    // if (props.section !== undefined) {
    //     config.section = props.section;
    // }
    // if (props.shelf !== undefined) {
    //     config.shelf = props.shelf;
    // }
    return config;
};

const Html5QrcodePlugin = (props) => {

    useEffect(() => {
        // when component mounts
        const config = createConfig(props);
        const verbose = props.verbose === true;
        // Suceess callback is required.
        // if (!(props.qrCodeSuccessCallback)) {
        //     throw "qrCodeSuccessCallback is required callback.";
        // }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

        // cleanup function when component will unmount
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, []);

    return (
        <div id={qrcodeRegionId} />
    );
};

export default Html5QrcodePlugin;
