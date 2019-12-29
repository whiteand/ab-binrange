import Queue from 'ab-queue';

function* _xbinrange(start: number, end: number): IterableIterator<number> {
  if (end <= start) {
    return;
  }
  const tasks = new Queue<[number, number]>([[start, end]]);

  while (tasks.length > 0) {
    const task = tasks.pop();
    const intervalStart = task[0];
    const intervalEnd = task[1];

    const middle = intervalStart + ((intervalEnd - intervalStart) >> 1);

    yield middle;

    if (intervalStart < middle) {
      tasks.push([intervalStart, middle]);
    }

    if (middle + 1 < intervalEnd) {
      tasks.push([middle + 1, intervalEnd]);
    }
  }
}

export function* xbinrange(
  start: number,
  end: number,
  step: number = 1,
): IterableIterator<number> {
  if (!step) {
    throw new Error('Step can not be falsy value');
  }

  if (end <= start) {
    return;
  }

  const length = Math.ceil(Math.abs((start - end) / step));
  for (const index of _xbinrange(0, length)) {
    const value = start + index * step;
    yield value;
  }
  return;
}

export function binrange(
  start: number,
  end: number,
  step: number = 1,
): number[] {
  if (end <= start) return [];
  return [...xbinrange(start, end, step)];
}
