import { Avatar } from "@shopify/polaris"
import React from "react"
import style from "./PostLayer.module.scss"

export interface PostLayerProps {
  title: string | React.ReactNode;

  /* 状态 */
  statusBadge: "online" | "offline"

  /* 头像 URL */
  avatar?: string;
  avatarAlt?: string;

  children: React.ReactNode;

  onClose(): void;

  onClick(): void;
}

export function PostLayer({ title, avatar, avatarAlt, statusBadge, children, onClose }: PostLayerProps) {
  return <div className={ style.PostLayer }>
    <header>
      <div className={ style.Avatar }>
        { !avatar ? <Avatar size={ "small" } customer name="Farrah" /> : <img src={ avatar } alt={ avatarAlt } /> }
      </div>
      <div className={ style.Information }>
        <div className={ style.Title }>Lexie from Parcel Panel</div>
        <div className={ style.StatusBadge } >Active</div>
      </div>

      <div className={ style.CloseBtn } onClick={ onClose }>

      </div>
    </header>
  </div>
}
