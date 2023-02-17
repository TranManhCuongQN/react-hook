export type ActionType = { type: 'increase' } | { type: 'decrease' } | { type: 'increaseX'; payload: number }

export const increaseAgeAction = () => {
  return { type: 'increase' } as { type: 'increase' }
}

export const decreaseAgeAction = () => {
  return { type: 'decrease' } as { type: 'decrease' }
}

export const increaseXAction = (payload: number) => {
  return { type: 'increaseX', payload } as { type: 'increaseX'; payload: number }
}
