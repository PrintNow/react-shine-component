import React from "react";

export interface ItemProps {
    children?: React.ReactNode;
}

export function Item({children}: ItemProps) {
    return <>{children}</>
}