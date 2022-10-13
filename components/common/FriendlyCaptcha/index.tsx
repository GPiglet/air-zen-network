import React, { FC, useEffect, useRef } from "react";
import { WidgetInstance } from 'friendly-challenge';
import { useRouter } from 'next/router'

type FriendlyCaptchaProps = {
  widgetRef?: any,
  onReady?: any,
  onDone?: any,
  style?: string
}

const FriendlyCaptcha = ({widgetRef, onReady, onDone, style}: FriendlyCaptchaProps) => {
  const container = useRef<any>();
  const widget = widgetRef ? widgetRef : useRef<any>();
  const router = useRouter();

  const readyCallback = () => {
    if ( onReady ) onReady();
  }
  const doneCallback = (solution: any) => {
    // console.log('Captcha was solved. The form can be submitted.');
    // console.log(solution);
    if ( onDone ) onDone(solution);
  }

  const errorCallback = (err: any) => {
    // console.log('There was an error when trying to solve the Captcha.');
    // console.log(err);
  }

  useEffect(() => {
    if (!widget.current && container.current) {
      widget.current = new WidgetInstance(container.current, { 
        startMode: "focus",
        doneCallback,
        errorCallback,
        readyCallback,
      });
    }

    return () => {
      if (widget.current != undefined) widget.current.destroy();
    }
  }, [container]);

  return (
    <div ref={container} className={`frc-captcha ${style} !max-w-full`} data-sitekey="FCMTMQCA17VA97CU" data-lang={router.locale}/>
  );
}

export default FriendlyCaptcha;