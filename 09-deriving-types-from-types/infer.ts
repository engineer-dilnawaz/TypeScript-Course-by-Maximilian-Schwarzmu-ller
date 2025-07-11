function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...arg: any[]) => infer RV ? RV : never;

type AddReturnValueType = ReturnValueType<AddFn>;
