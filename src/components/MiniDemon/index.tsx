import React from 'react';
import { TILE_SIZE, EDirection } from '../../settings/constants';

import './index.css';
import useEnemyMovement from '../../hooks/useEnemyMovement';

interface IProps {
  initialPosition: { x: number; y: number }
};

const MiniDemon = (props: IProps) => {
  const { position, direction } = useEnemyMovement({ x: 10, y: 5 });
  
  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: 'url(./assets/MINI-DEMON.png)',
        backgroundRepeat: 'no-repeat',
        animation: 'minidemon-animation 1s steps(4) infinite',
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    >
    </div>
  );
}

export default MiniDemon;