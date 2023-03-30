import { DndContext } from "@dnd-kit/core";
import { DragEndEvent } from "@dnd-kit/core/dist/types"
import { restrictToParentElement, restrictToVerticalAxis } from "@dnd-kit/modifiers"
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Checkbox } from "@shopify/polaris"
import React from "react"
import "./OptionListDrag.scss";
import { Sortable } from "./Sortable";

export interface Item {
  id: string;
  label: string;

  [field: string]: any;
}

export interface OptionListDragProps {
  /**
   * 标题
   */
  title: React.ReactNode;

  /**
   * 选项
   */
  choices: Item[];

  /**
   * 哪些是选中
   */
  selected: string[];

  /**
   * 哪些是被禁用的
   */
  disabled: string[];

  /**
   * 禁用的 item 是否可以进行排序，默认是允许排序
   */
  disabledCanSort?: boolean;

  /**
   * 当位置改变时触发
   */
  onChoicesChange(newChoices: OptionListDragProps['choices']): void;

  /**
   * 当选项选中时触发
   */
  onSelectedChange(selected: string[]): void;
}

export function OptionListDrag(
  {
    title, choices,
    selected, disabled, disabledCanSort,
    onChoicesChange, onSelectedChange
  }: OptionListDragProps
) {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (typeof active.id !== "string" || typeof over?.id !== "string") {
      return
    }

    if(active.id === over.id){
      return;
    }

    // 判断{选择 item}是否为禁用字段
    if(disabled.includes(active.id)){
      return
    }

    // 判断{目标 item}是否为禁用字段
    if(disabled.includes(over.id) && disabledCanSort){
      return
    }

    const oldIndex = choices.findIndex(item => item.id === active.id)
    const newIndex = choices.findIndex(item => item.id === over.id)

    onChoicesChange(arrayMove(choices, oldIndex, newIndex))
  }

  return (
      <DndContext
          onDragEnd={ handleDragEnd }
          modifiers={ [
            restrictToVerticalAxis, // 限制仅垂直拖动
            restrictToParentElement// 限制移动到父元素
          ] }
      >
        <SortableContext items={ choices } strategy={ verticalListSortingStrategy }>
          <div className={ "Sortable__Main" }>
            <div className={ "Sortable__Title" }>{ title }</div>
            <div className={ "SortableContainer" }>
              { choices.map((item) => {
                const isDisabled = disabled.includes(item.id)

                return (
                  <Sortable disabledCanSort={disabledCanSort} disabled={isDisabled} key={item.id} id={item.id}>
                    <Checkbox
                      id={item.id}
                      checked={selected.indexOf(item.id) !== -1}
                      disabled={isDisabled}
                      label={item.label}
                      onChange={(newChecked) => onSelectedChange(updateSelectedChoices(item, newChecked, selected))}
                    />
                  </Sortable>
                )
              }) }
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
