import { useEffect, useState } from 'react';

export default function useUserAgent() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [userAgent, setUserAgent] = useState<'ios' | 'android' | null>(null);
    const [isStandalone, setIsStandalone] = useState<boolean | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userAgentString = window.navigator.userAgent;

            // Check if the device is iOS
            const isIOS = /iPhone|iPad|iPod/i.test(userAgentString);
            const isIPadOS = /Macintosh/i.test(userAgentString) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
            if (isIOS || isIPadOS) {
                setUserAgent('ios');
                setIsMobile(true);
            }

            // Check if the device is Android
            const isAndroid = /Android/i.test(userAgentString);
            if (isAndroid) {
                setUserAgent('android');
                setIsMobile(true);
            }

            // Check if app is installed (if it's installed we won't show the prompt)
            if (window.matchMedia('(display-mode: standalone)').matches) {
                setIsStandalone(true);
            }
        }
    }, []);

    return { isMobile, userAgent, isStandalone }
}