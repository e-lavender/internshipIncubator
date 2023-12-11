import type {} from 'react-select/base'
import { GroupBase } from 'react-select'
// This import is necessary for module augmentation.
// It allows us to extend the 'Props' interface in the 'react-select/base' module
// and add our custom property 'myCustomProp' to it.

declare module 'react-select/base' {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    //additional props if needed
  }
}
