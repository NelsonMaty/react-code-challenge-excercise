import { MonsterServiceExtended } from './monsters.service.extended';
import { API_URL } from '../../constants/env';

global.fetch = jest.fn();

describe('Monsters Service Extended', () => {
  it('should get the winner of the battle of monsters', async () => {
    const mockResponse = { winner: 'player1' };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await MonsterServiceExtended.battle({
      monster1Id: 'test-1',
      monster2Id: 'test-2',
    });

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/battle`, expect.anything());
    expect(result).toEqual(mockResponse);
  });
});
