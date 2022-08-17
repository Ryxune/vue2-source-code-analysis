class Observer {
  constructor(data) {
    // Object.defineProperty只能劫持已经存在的属性
    this.walk(data);
  }
  walk(data) {
    // 循环对象,对属性依次劫持
    // 重新定义属性, 导致性能差
    Object.keys(data).forEach((key) => defineReactive(data, key, data[key]));
  }
}

export function defineReactive(target, key, value) {
  observe(value);
  Object.defineProperty(target, key, {
    get() {
      console.log("用户取值");
      return value;
    },
    set(newValue) {
      console.log("用户设置值");
      if (newValue === value) return;
      value = newValue;
    },
  });
}

export function observe(data) {
  // 只对对象进行劫持
  if (typeof data !== "object" || data == null) return;

  // 若对象被劫持过,则不再劫持(判断是否被劫持过,用实例)
  return new Observer(data);
}
