export function translate2d(dx, dy) {
  return function(x,y){
    return [dx+x, dy+y];
  }
}


export function scale2d(sx, sy) {
  return function(x,y){
    return [sx*x,sy*y]
  }
}


export function composeTransform(f, g) {
  return function(x, y) {
    const [xf, yf] = f(x, y);
    return g(xf, yf);
  };
}

export function memoizeTransform(f) {
  let lastArgs = null;
  let lastResult = null;
  return function(...args) {
    if (lastArgs !== null && lastArgs.length === args.length && lastArgs.every((value, index) => value === args[index])) {
      return lastResult;
    }
    lastArgs = args;
    lastResult = f(...args);
    return lastResult;
  };
}
