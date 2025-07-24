
## usage

```ts
import { fib } from "fib-wasm-pack-inline"

for (let i = 0; i < 10; i++) {
  console.log(fib(i))
}
```


```ts
import("https://github.com/ahaoboy/fib-wasm-pack-inline/raw/refs/heads/main/dist/index.js")
  .then(({ fib }) => {
    for (let i = 0; i < 10; i++) {
      console.log(fib(i))
    }
  })
```