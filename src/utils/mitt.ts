import mitt from "mitt";
import type { Emitter  } from "mitt";

// 约束一下可以发布订阅的事件名，避免混乱
export type Events = {
  foo: string
};

const $Bus: Emitter<Events> = mitt<Events>();

export default $Bus;