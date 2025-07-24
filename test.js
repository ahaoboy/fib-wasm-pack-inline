import("https://unpkg.com/fib-wasm-pack-inline@latest/dist/index.js")
.then(({ fib }) => {
  for (let i = 0; i < 10; i++) {
    console.log(fib(i))
  }
})

// bun ./test.js
// deno run ./test.js

// node 18
// node --experimental-network-imports ./test.js