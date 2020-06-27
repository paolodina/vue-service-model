import Vue, { Wrapper } from '@vue/test-utils'

const waitFunc = (times: number) => {
  return async (wrapper: Wrapper<Vue>) => {
    for (let i = 0; i < times; i++) {
      await wrapper.vm.$nextTick()
    }
  }
}

export const waitRender = {
  DisplayField: waitFunc(3),
  DisplayFieldUpdate: waitFunc(2),
  InputField: waitFunc(4),
  InputFieldUpdate: waitFunc(2),
  FieldLabel: waitFunc(1)
}
