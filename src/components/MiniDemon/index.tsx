import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const MiniDemon = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 10,
        left: TILE_SIZE * 5,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: 'url(./assets/MINI-DEMON.png)',
        backgroundRepeat: 'no-repeat',
        animation: 'minidemon-animation 1s steps(4) infinite'
      }}
    >
    </div>
  );
}

export default MiniDemon;