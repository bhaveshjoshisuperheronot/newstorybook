import React from 'react'
import Picture from "./Picture";

export default {
    title: 'Picture',
    component: Picture,
    args: {
        src: "https://picsum.photos/id/237/400/400",
        width: 400,
    },
    argTypes: {
        width: {control: 'number'},
        height: {control: 'number'},
    }
}

const Template = (args) => <Picture {...args} />

export const Default = Template.bind({})

export const Rounded = Template.bind({})
Rounded.args = {
    isRounded: true,
}

export const Height = Template.bind({})
Height.args = {
    height: 300,
    src: "https://picsum.photos/id/238/300/600"
}

export const Width = Template.bind({})
Width.args = {
    width: 350,
    src: "https://picsum.photos/id/239/700/350"
}