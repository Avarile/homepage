import { message } from "antd";
import React from "react";

export interface INotificationConfig {
  type: "success" | "error" | "warning";
  message: string;
}
export type AsyncNotiConfig = Array<INotificationConfig>;

/**
 * notificationControll messageTarget is a token to represent what subject is about this message.
 * @param config: {variant: string, message: string, type: notificationType  } || undefined
 * @returns {Notification}
 */
export const Notification = (config: INotificationConfig) => {
  return message[config.type](config.message);
};

export const AsyncNotification = (config: AsyncNotiConfig) => {
  return message
    .loading("Processing, please wait", 3)
    .then(() => {
      return message[config[0].type](config[0].message, 3);
    })
    .then(() => {
      return message[config[1].type](config[1].message, 3);
    });
};

// message.success(content, [duration], onClose)