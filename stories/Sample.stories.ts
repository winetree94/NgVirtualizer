// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SampleModule } from 'projects/virtualizer/sample';
import { SampleComponent } from 'projects/virtualizer/sample/sample.component';
import { SampleService } from 'projects/virtualizer/sample/sample.service';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Sample',
  component: SampleComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
  decorators: [
    moduleMetadata({
      providers: [
        SampleService,
      ],
    })
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SampleComponent> = (args: SampleComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
