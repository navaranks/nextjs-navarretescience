"use client";
import React, { useState, useEffect } from 'react';
import { setCookie, getCookie } from 'cookies-next';
import dynamic from 'next/dynamic';

const ModuleLoading = () => <p className="animate-bounce text-white font-bold hidden">Loading...</p>;
const AddToiOSSafari = dynamic(() => import('./AddToiOSSafari'), { loading: () => <ModuleLoading /> });
const AddToMobileChrome = dynamic(() => import('./AddToMobileChrome'), { loading: () => <ModuleLoading /> });

import useUserAgent from '../hooks/useUserAgent';

type AddToHomeScreenPromptType = 'ios' | 'android' | '';
const COOKIE_NAME = 'addToHomeScreenPrompt';
const COOKIE_EXPIRATION_NAME = 'addToHomeScreenPromptExpiration';

export default function AddToHomeScreen() {
    const [displayPrompt, setDisplayPrompt] = useState<AddToHomeScreenPromptType>('');
    const { userAgent, isMobile, isStandalone } = useUserAgent();

    const closePrompt = () => {
        setDisplayPrompt('');
    };

    const doNotShowAgain = () => {
        const date = new Date();
        date.setDate(date.getDate() + 1); // Set cookie to expire in 1 day
        setCookie(COOKIE_NAME, 'dontShow', { expires: date });
        setCookie(COOKIE_EXPIRATION_NAME, date.getTime().toString(), { expires: date });
        console.log(`Cookie set: ${COOKIE_NAME} = dontShow`);
        console.log(`Cookie set: ${COOKIE_EXPIRATION_NAME} = ${date.getTime()}`);
        setDisplayPrompt('');
    };

    const logTimeRemaining = (expirationTimestamp: string) => {
        const now = new Date();
        const expirationDate = new Date(parseInt(expirationTimestamp, 10));
        const timeRemaining = expirationDate.getTime() - now.getTime();
        
        if (timeRemaining > 0) {
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            console.log(`Time remaining until prompt can be shown again: ${hours}h ${minutes}m ${seconds}s`);
        } else {
            console.log('The prompt can be shown again now.');
        }
    };

    useEffect(() => {
        const addToHomeScreenPromptCookie = getCookie(COOKIE_NAME);
        const addToHomeScreenPromptExpiration = getCookie(COOKIE_EXPIRATION_NAME);
        console.log(`Cookie read: ${COOKIE_NAME} = ${addToHomeScreenPromptCookie}`);
        console.log(`Cookie read: ${COOKIE_EXPIRATION_NAME} = ${addToHomeScreenPromptExpiration}`);

        if (addToHomeScreenPromptCookie !== 'dontShow' && isMobile && !isStandalone) {
            setDisplayPrompt(userAgent || '');
        } else if (addToHomeScreenPromptCookie === 'dontShow' && addToHomeScreenPromptExpiration) {
            // Log time remaining
            logTimeRemaining(addToHomeScreenPromptExpiration);
        }
    }, [userAgent, isMobile, isStandalone]);

    const Prompt = () => (
        <>
            {
                {
                    'ios': <AddToiOSSafari closePrompt={closePrompt} doNotShowAgain={doNotShowAgain} />,
                    'android': <AddToMobileChrome closePrompt={closePrompt} doNotShowAgain={doNotShowAgain} />,
                    '': <></>
                }[displayPrompt]
            }
        </>
    );

    return (
        <>
            {displayPrompt !== '' && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-50">
                    <Prompt />
                </div>
            )}
        </>
    );
}
