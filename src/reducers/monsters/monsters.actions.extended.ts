import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Battle, Players } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterServiceExtended } from './monsters.service.extended';

export const fetchBattleWins = createAsyncThunk<Battle, Players>(
  'monsters/fetchBattleWins',
  MonsterServiceExtended.battle,
);

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
