import { createAction } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';

export const fetchBattleWins = 'TODO';

export const setRandomMonster = createAction(
  'monsters/setRandomMonster',
  function prepare(
    selectedMonsterId: string | null,
    monsters: Monster[] | null,
  ) {
    if (selectedMonsterId && monsters && monsters.length > 0) {
      monsters = monsters.filter(m => m.id !== selectedMonsterId);
      const randomIndex = Math.floor(Math.random() * monsters.length);
      return {
        payload: monsters[randomIndex],
      };
    }
    return { payload: null };
  },
);

export const setWinner = 'TODO';
