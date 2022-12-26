import React from 'react';
import styles from "./Badge.module.scss"

export type BadgeProps = {
  children: React.ReactNode;
  color: string;
}

export default function Badge({ color, children }: BadgeProps) {
  return <span className={ styles.Badge }>
    <span className={ styles.BadgePip }></span>
    { children }
  </span>
}
