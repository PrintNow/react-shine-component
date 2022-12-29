import {ComponentMeta} from '@storybook/react';
import React, {useCallback, useState} from "react"
import {SetupGuide, SetupGuideProps} from "./SetupGuide"
import {useStorybookApi} from "@storybook/api";

export default {
    title: 'Design System/SetupGuide',
    component: SetupGuide,
    argTypes: {
        title: {
            type: 'string',
            defaultValue: "Setup guide",
            description: "标题"
        },
        expand: {
            type: 'boolean',
            description: "是否展开 Setup guide"
        },
        onExpand: {
            description: '`onExpand(expand: boolean): void`',
        }
    }
} as ComponentMeta<typeof SetupGuide>;

export function Default(args: SetupGuideProps) {
    const state = useStorybookApi();

    const [expand, setExpand] = useState(true);
    const handleOnExpand = useCallback((expand) => setExpand(expand), []);

    return (
        <div style={{height: '200px'}}>
            <SetupGuide {...args} expand={expand} onExpand={handleOnExpand} items={[]}/>
        </div>
    )
}
