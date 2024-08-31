import { setRandomMonster } from './monsters.actions.extended';
import { Monster } from '../../models/interfaces/monster.interface';
import monstersData from '../../../data/monsters.json';

describe('setRandomMonster Action', () => {
  it('should return a random monster when selectedMonsterId is provided and valid monsters exist', () => {
    const action = setRandomMonster('monster-1', monstersData.monsters);
    expect(action.payload).toBeDefined();
    expect(action.payload?.id).not.toBe('monster-1'); // Ensure it's not the selected monster
  });

  it('should return null when selectedMonsterId is null', () => {
    const action = setRandomMonster(null, monstersData.monsters);
    expect(action.payload).toBeNull();
  });

  it('should return null when monsters array is null', () => {
    const action = setRandomMonster('monster-1', null);
    expect(action.payload).toBeNull();
  });
});
