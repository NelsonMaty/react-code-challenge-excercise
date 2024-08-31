import monstersData from '../../../data/monsters.json';
import { setRandomMonster } from './monsters.actions.extended';
import { monstersReducerExtended } from './monsters.reducer.extended';

describe('Monsters Reducer', () => {
  it('should return the initial state', () => {
    expect(monstersReducerExtended(undefined, { type: undefined })).toEqual({
      winner: null,
      selectRandomMonster: null,
    });
  });

  it('should change the battle on action fulfilled', () => {
    // TODO
    expect(1).toEqual(2);
  });

  it('should add the random monster to the state', () => {
    const state = monstersReducerExtended(
      undefined,
      setRandomMonster('monster-1', monstersData.monsters),
    );

    expect(state.selectRandomMonster).not.toBeUndefined();
  });

  it('should add the winner to the state', () => {
    // TODO
    expect(1).toEqual(2);
  });
});
