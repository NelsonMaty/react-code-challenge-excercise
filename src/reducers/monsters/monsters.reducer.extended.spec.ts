import monstersData from '../../../data/monsters.json';
import { fetchBattleWins, setRandomMonster } from './monsters.actions.extended';
import { monstersReducerExtended } from './monsters.reducer.extended';

describe('Monsters Reducer', () => {
  it('should return the initial state', () => {
    expect(monstersReducerExtended(undefined, { type: undefined })).toEqual({
      winner: null,
      selectRandomMonster: null,
    });
  });

  it('should add the random monster to the state', () => {
    const state = monstersReducerExtended(
      undefined,
      setRandomMonster('monster-1', monstersData.monsters),
    );

    expect(state.selectRandomMonster).not.toBeUndefined();
  });

  it('should add the winner to the state', () => {
    const action = {
      type: fetchBattleWins.fulfilled,
      payload: { winner: 'monster-1', tie: false },
    };
    const state = monstersReducerExtended(undefined, action);

    expect(state.winner).toEqual(
      expect.objectContaining({
        winner: 'monster-1',
        tie: false,
      }),
    );
  });
});
