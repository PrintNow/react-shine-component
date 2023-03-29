import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@shopify/polaris"
import { DragHandleMinor } from "@shopify/polaris-icons"
import React from "react";
import { Item } from "./OptionListDrag"

import styles from "./OptionListDrag.module.scss";

export interface SortableProps {
  id: Item['id'];
  children: React.ReactNode
}

export function Sortable({ id, children }: SortableProps) {
  const {
    setNodeRef,
    transform,
    transition,
    listeners,
    isDragging
  } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
      <div
          className={ `${ styles.SortableItem } ${ isDragging ? styles.Dragged : "" }` }
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
