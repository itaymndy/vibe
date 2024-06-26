import { createComponentTemplate, Link } from "vibe-storybook-components";
import Checkbox from "../Checkbox";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import "./checkbox.stories.scss";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Checkbox>;

const metaSettings = createStoryMetaSettingsDecorator({ component: Checkbox });
const checkboxTemplate = createComponentTemplate(Checkbox);

export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Checkbox>;

export const Overview: Story = {
  render: checkboxTemplate.bind({}),
  args: {
    label: "Option",
    defaultChecked: true
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const States: Story = {
  render: () => (
    <>
      <Checkbox label="Regular" />
      <Checkbox label="Selected" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled checked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </>
  )
};

export const SingleCheckbox: Story = {
  render: () => (
    <Checkbox
      checked
      label={
        <>
          I agree to the
          <Link size={Link.sizes.SMALL} href={"#"}>
            Terms of Service
          </Link>
          and{" "}
          <Link size={Link.sizes.SMALL} href={"#"} withoutSpacing>
            Privacy Policy
          </Link>
          .
        </>
      }
    />
  ),
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  },
  name: "Single checkbox"
};
