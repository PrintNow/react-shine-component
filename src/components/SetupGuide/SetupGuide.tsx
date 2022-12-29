import {Button, Card, Text, Stack} from "@shopify/polaris";
import {
    ChevronUpMinor, ChevronDownMinor
} from '@shopify/polaris-icons';

import styles from "./SetupGuide.module.scss"
import React, {memo, NamedExoticComponent, useCallback} from "react";
import {Item, ItemProps} from "./components/Item/Item";
import {elementChildren, wrapWithComponent} from "@shopify/polaris/build/ts/latest/src/utilities/components";

export interface SetupGuideProps {
    title?: string | null;

    /* 是否展开 */
    expand: boolean;


    /*当前所在步骤*/
    activeStep: number;

    /* 已经完成的步骤 */
    finishes: number[];

    items: ItemProps[];

    children?: React.ReactNode;

    onExpand(expand: boolean): void;
}

export const SetupGuide = memo(function ({title, expand, children, onExpand}: SetupGuideProps) {
    title ??= 'Setup guide'

    const handleExpand = useCallback(() => onExpand(!expand), [onExpand, expand])
    const titleMarkup = <Stack>
        <Stack.Item fill>
            <Text variant="headingMd" as="h2">
                {title}
            </Text>
        </Stack.Item>

        <Stack.Item>
            <Button plain icon={expand ? ChevronUpMinor : ChevronDownMinor} onClick={handleExpand}/>
        </Stack.Item>
    </Stack>

    const itemMarkup = elementChildren(children).map((child, index) => {
        const props = {key: index};
        return wrapWithComponent(child, Item, props);
    });

    const operateMarkup = (
        <Card.Section>
            <p>
                View a summary of your online store’s performance, including sales,
                visitors, top products, and referrals.
            </p>

            {itemMarkup}
        </Card.Section>
    )

    return <Card title={titleMarkup}>
        <Card.Section>
            <p>View a summary of your online store’s performance.</p>
        </Card.Section>

        {expand && operateMarkup}
    </Card>
}) as NamedExoticComponent<SetupGuideProps> & {
    Item: typeof Item;
};

Stack.Item = Item;
