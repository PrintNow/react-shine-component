import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@shopify/polaris"
import { DragHandleMinor } from "@shopify/polaris-icons"
import classNames from "classnames"
import React from "react";
import { Item } from "./OptionListDrag"
import styles from "./OptionListDrag.module.scss"

export interface SortableProps {
  id: Item['id'];
  children: React.ReactNode;
  disabled: boolean;
  disabledCanSort?: boolean;
}

export function Sortable({ id, children, disabled, disabledCanSort }: SortableProps) {
  const {
    setNodeRef,
    transform,
    transition,
    listeners,
    isDragging
  } = useSortable({
    id, disabled,
  })

  const style = disabledCanSort && disabled ? undefined : {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
      <div
          className={ classNames({
            [styles.Dragged]: isDragging,
            [styles.disabledDrag]: disabled,
            [styles.SortableItem]: true
          }) }
          ref={ setNodeRef }
          style={ style }
      >
        { children }
        <span { ...listeners } className={ styles.DragHandle }>
          {/* @ts-ignore */ }
          <Icon source={ DragHandleMinor } />
        </span>
      </div>
  );
}
