import React, { FC, useEffect, useRef } from "react";
import { WidgetInstance } from 'friendly-challenge';

type FriendlyCaptchaProps = {
  style?: string
}

const FriendlyCaptcha = ({style}: FriendlyCaptchaProps) => {
  const container = useRef<any>();
  const widget = useRef<any>();

  const doneCallback = (solution: any) => {
    // console.log('Captcha was solved. The form can be submitted.');
    // console.log(solution);
  }

  const errorCallback = (err: any) => {
    // console.log('There was an error when trying to solve the Captcha.');
    // console.log(err);
  }

  useEffect(() => {
    if (!widget.current && container.current) {
      widget.current = new WidgetInstance(container.current, { 
        startMode: "auto",
        doneCallback: doneCallback,
        errorCallback: errorCallback 
      });
    }

    return () => {
      if (widget.current != undefined) widget.current.destroy();
    }
  }, [container]);

  return (
    <div ref={container} className={`frc-captcha ${style} !max-w-full mb-4`} data-sitekey="FCMTMQCA17VA97CU" />
  );
}

export default FriendlyCaptcha;