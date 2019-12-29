# Binary Range

This is something that will help me to iterate through array in a way binary search could go.

## xbinrange

`xbinrange(from, to[, step])` - is a function generator of values between `from` and `to` in order of binary division

## binrange

`binrange(from, to[, step])` - is a function that returns array of values between `from` and `to` in order of binary division with such step between values


## Example

```typescript
[...xbinrange(0, 7)] // [3,1,5,0,2,4,6]
[...xbinrange(0, 5.1, 0.25)]
// [2.5, 1.25, 4, 0.5, 2, 3.25, 4.75, 0.25, 1, 1.75, 2.25, 3, 3.75, 4.5, 5, 0, 0.75, 1.5, 2.75, 3.5, 4.25]
```