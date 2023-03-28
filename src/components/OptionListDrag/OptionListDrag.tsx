import { DndContext } from "@dnd-kit/core";
import { DragEndEvent } from "@dnd-kit/core/dist/types"
import { restrictToParentElement, restrictToVerticalAxis } from "@dnd-kit/modifiers"
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Checkbox } from "@shopify/polaris"
import React from "react";
import styles from "./OptionListDrag.module.scss";
import { Sortable } from "./Sortable";

export interface Item {
  id: string;
  label: string;
}

export interface IProps {
  items: Item[];
  selected: string[]

  onItemChange(oldItems: IProps['items'], newItems: IProps['items']): void;

  onChoiceChange(selected: string[]): void;
}

export function OptionListDrag({ items, selected, onItemChange, onChoiceChange }: IProps) {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over?.id && active.id !== over.id) {
      const oldIndex = items.findIndex(item => item.id === active.id)
      const newIndex = items.findIndex(item => item.id === over.id)

      onItemChange(items, arrayMove(items, oldIndex, newIndex))
    }
  }

  return (
      <DndContext
          onDragEnd={ handleDragEnd }
          modifiers={ [
            restrictToVerticalAxis, // 限制仅垂直拖动
            restrictToParentElement// 限制移动到父元素
          ] }
      >
        <SortableContext items={ items } strategy={ verticalListSortingStrategy }>
          <div className={ styles.Sortable__Main }>
            <div className="title">Columns</div>

            <div className={ styles.SortableContainer }>
              { items.map((item) => (
                  <Sortable key={ item.id } id={ item.id }>
                    <Checkbox
                        id={ item.id }
                        checked={ selected.indexOf(item.id) !== -1 }
                        label={ item.label }
                        onChange={ (newChecked) => onChoiceChange(updateSelectedChoices(item, newChecked, selected)) }
                    />
                  </Sortable>
              )) }
            </div>
          </div>
        </SortableContext>

        {/* <DragOverlay> */ }
        {/*   { draggedItem && <div className="sortable">{ draggedItem }</div> } */ }
        {/* </DragOverlay> */ }
      </DndContext>
  )
}

function updateSelectedChoices(
    { id }: Item,
    checked: boolean,
    selected: string[],
) {
  if (checked) {
    return [...selected, id];
  }

  return selected.filter((selectedChoice) => selectedChoice !== id);
}
