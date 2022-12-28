import React from 'react';
import styles from "./Badge.module.scss"

export type BadgeProps = {
  children: React.ReactNode;
  color: string;
}

export function Badge({ color, children }: BadgeProps) {
  return <span className={ styles.Badge }>
    <span className={ styles.BadgePip } style={ { backgroundColor: color, border: `1px solid ${ color }` } }></span>
    { children }
  </span>
}
