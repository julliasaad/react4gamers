import React from 'react';
import useEventListener from '@use-it/event-listener';
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMovement(initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = event.key as EDirection;

    if (direction.indexOf('Arrow') === -1) {
      return;
    }

    const nextPosition = handleNextPosition(direction, positionState);
    updatePositionState(nextPosition);
    updateDirectionState(direction);
  });

  return {
    position: positionState,
    direction: direction
  }
}

export default useHeroMovement;