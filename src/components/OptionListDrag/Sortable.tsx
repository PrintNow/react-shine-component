import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@shopify/polaris"
import { DragHandleMinor } from "@shopify/polaris-icons"
import React from "react";
import { Item } from "./OptionListDrag"
import "./OptionListDrag.scss"

export interface SortableProps {
  id: Item['id'];
  children: React.ReactNode
  disabled: boolean
}

export function Sortable({ id, children, disabled }: SortableProps) {
  const {
    setNodeRef,
    transform,
    transition,
    listeners,
    isDragging
  } = useSortable({
    id, disabled,
  })

  const style = disabled ? undefined : {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
      <div
          className={ `SortableItem ${ isDragging ? "Dragged" : "" } ${ disabled ? "disabledDrag" : "" }` }
          ref={ setNodeRef }
          style={ style }
      >
        { children }
        <span { ...listeners } className={ "DragHandle" }>
          {/* @ts-ignore */ }
          <Icon source={ DragHandleMinor } />
        </span>
      </div>
  );
}
