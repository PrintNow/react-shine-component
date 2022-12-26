import { Avatar } from "@shopify/polaris"
import React from "react"
import { Badge } from "../Badge"
import style from "./PostLayer.module.scss"

export interface PostLayerProps {
  title: string | React.ReactNode;

  /* 状态 */
  statusBadge: "online" | "offline"

  /* 头像 URL */
  avatar?: string;
  avatarAlt?: string;

  children: React.ReactNode;

  inputPlaceholder?: string;

  onClose(): void;

  onClick(): void;
}

export function PostLayer({ title, avatar, avatarAlt, statusBadge, inputPlaceholder, onClick, children, onClose }: PostLayerProps) {
  const statusColorMap = {
    online: {
      color: `#289F4D`,
      text: `Online`
    },
    offline: {
      color: `#9E9E9E`,
      text: `Offline`
    }
  }[statusBadge.toLowerCase()]

  return <div className={ style.PostLayer } onClick={onClick}>
    <header>
      <div className={ style.Avatar }>
        { !avatar ? <Avatar size={ "small" } customer name="Farrah" /> : <img src={ avatar } alt={ avatarAlt } /> }
      </div>
      <div className={ style.Information }>
        <div className={ style.Title }>{ title }</div>
        <div className={ style.StatusBadge }>
          <Badge color={statusColorMap?.color ?? 'red'}>{statusColorMap?.text ?? "Undefined"}</Badge>
        </div>
      </div>

      <div className={ style.CloseBtn } onClick={ onClose }></div>
    </header>
    <main>
      { children }
    </main>
    <footer>
      <input type="text" placeholder={ inputPlaceholder ? inputPlaceholder : "Live chat with us" } />
      <div className={ style.Operation }>
        <button className={ style.Operation__Item }>
          <svg focusable="false" aria-hidden="true" viewBox="0 0 29 18">
            <g>
              <path
                  d="M9 1a8 8 0 1 0 0 16h11a8 8 0 1 0 0-16H9zm0-1h11a9 9 0 0 1 0 18H9A9 9 0 0 1 9 0z"
                  fillRule="nonzero"
              />
              <path
                  d="M6.561 9.337c0-2.277 1.683-3.795 3.773-3.795 1.298 0 2.2.572 2.849 1.375l-.726.451c-.462-.594-1.243-1.012-2.123-1.012-1.606 0-2.827 1.232-2.827 2.981 0 1.738 1.221 2.992 2.827 2.992.88 0 1.606-.429 1.969-.792v-1.496H9.784v-.814h3.432v2.651a3.822 3.822 0 0 1-2.882 1.265c-2.09 0-3.773-1.529-3.773-3.806zM14.701 13V5.663h.913V13h-.913zm2.629 0V5.663h4.807v.814h-3.894v2.365h3.817v.814h-3.817V13h-.913z"
              />
            </g>
          </svg>
        </button>
        <button className={ style.Operation__Item }>
          <svg focusable="false" aria-hidden="true" viewBox="0 0 18 18">
            <path
                d="M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm0 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM5 6.999a1 1 0 1 1 2.002.004A1 1 0 0 1 5 6.999zm5.999 0a1.002 1.002 0 0 1 2.001 0 1 1 0 1 1-2.001 0zM8.959 13.5c-.086 0-.173-.002-.26-.007-2.44-.132-4.024-2.099-4.09-2.182l-.31-.392.781-.62.312.39c.014.017 1.382 1.703 3.37 1.806 1.306.072 2.61-.554 3.882-1.846l.351-.356.712.702-.35.356c-1.407 1.427-2.886 2.15-4.398 2.15z"
                fillRule="evenodd"
            />
          </svg>
        </button>
        <button className={ style.Operation__Item }>
          <svg focusable="false" aria-hidden="true" viewBox="0 0 16 18">
            <path
                d="M14.154 6.918l-.004.003.001-.004-3.287 3.286-.006-.005-3.574 3.574c-.016.017-.03.036-.048.053l-.05.047-.043.041v-.002c-1.167 1.07-2.692 1.331-3.823.2-1.13-1.13-.89-2.677.18-3.843l-.005-.004.074-.073.016-.018c.006-.005.012-.009.017-.016l6.053-6.053.761.76-6.053 6.054-.029.028v.001l-.005.004-.073.074c.011-.01.025-.018.035-.03-.688.75-.93 1.636-.21 2.356.72.72 1.583.456 2.333-.232l-.03.034.04-.042.01-.008.008-.009.033-.03.031-.034.01-.009.007-.009 5.004-5.003.005.006 1.858-1.859c1.223-1.218 1.51-2.913.291-4.132C12.462.806 10.414.74 9.195 1.958L2.248 8.905c.003 0 .006-.002.008-.004-1.625 1.667-1.542 4.43.103 6.074 1.646 1.646 4.474 1.795 6.141.17-.003.002-.004.008-.008.012l.047-.047 6.053-6.054.042-.042.743.78-.025.021.001.002-6.05 6.05-.002.002-.002.001-.046.046h-.002c-2.094 2.04-5.578 1.894-7.652-.18-2.049-2.049-2.15-5.407-.183-7.505l-.006-.005h-.002l.076-.078 6.943-6.944.003-.002.004-.005c1.641-1.64 4.367-1.574 6.008.066 1.64 1.642 1.353 4.014-.288 5.655z"
                fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </footer>
  </div>
}
