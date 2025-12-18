// Memorizza l’ultimo scroll target
let scrollTarget = null;

export function setScrollTarget(target) {
  scrollTarget = target;
}

export function consumeScrollTarget() {
  const t = scrollTarget;
  scrollTarget = null;
  return t;
}
