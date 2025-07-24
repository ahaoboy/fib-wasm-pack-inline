
## usage

```ts
import { fib } from "fib-wasm-pack-inline"

for (let i = 0; i < 10; i++) {
  console.log(fib(i))
}
```


```ts
import("https://unpkg.com/fib-wasm-pack-inline@latest/dist/index.js")
  .then(({ fib }) => {
    for (let i = 0; i < 10; i++) {
      console.log(fib(i))
    }
  })
```