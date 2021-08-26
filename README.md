# Logical NOT Function

The **not** function is an alphabetic analogue of the unary operator **!**.
It is used to increase the readability of the code.

Usage:

```js
import not from "logical-not";
// or import { not } from "logical-not";

if (not("foo".includes("bar"))) {
    console.log("baz");
}
```

### Typescript support

```ts
function main(): void {
    const div = document.querySelector("div");
    const span = document.querySelector("span"); 
    
    // now div is HTMLDivElement | null
    // span is HTMLSpanElement | null

    if (not(div)) return;

    // now div is HTMLDivElement
    div.textContent;
    
    // need to use optional chaining
    span?.textContent;
}
```

## License

MIT License (see `LICENSE` file).
