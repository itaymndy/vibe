import React from "react";
import DialogContentContainer from "../DialogContentContainer";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import DialogContentContainerExample from "./DialogContentContainerExample";

const metaSettings = createStoryMetaSettingsDecorator({
  component: DialogContentContainer,
  ignoreControlsPropNamesArray: ["children"]
});

const dialogContentContainerTemplate = createComponentTemplate(DialogContentContainer);

export default {
  title: "Components/DialogContentContainer",
  component: DialogContentContainer,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: dialogContentContainerTemplate.bind({}),
  name: "Overview",

  args: {
    children: <DialogContentContainerExample />
  }
};

export const Popover = {
  render: () => (
    <DialogContentContainer type={DialogContentContainer.types.POPOVER}>
      <DialogContentContainerExample />
    </DialogContentContainer>
  ),

  name: "Popover"
};

export const Modal = {
  render: () => (
    <DialogContentContainer type={DialogContentContainer.types.MODAL}>
      <DialogContentContainerExample />
    </DialogContentContainer>
  ),

  name: "Modal"
};
