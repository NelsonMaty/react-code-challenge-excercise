import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import monstersData from '../../../data/monsters.json';
import { MonsterBattleCard } from './MonsterBattleCard.extended';

describe('MonsterBattleCardExtended', () => {
  const exampleTitle = 'Example Title';
  const exampleMonster = monstersData.monsters[0];

  it('renders the title when no monster is provided', () => {
    render(<MonsterBattleCard title={exampleTitle} />);

    const titleElement = screen.getByText(exampleTitle);
    expect(titleElement).toBeInTheDocument();
    expect(screen.queryByText(exampleMonster.name)).not.toBeInTheDocument();
    expect(screen.queryByRole('progressbar')).toBeNull();
  });

  it('renders the monster card correctly with a monster', () => {
    render(<MonsterBattleCard title={exampleTitle} monster={exampleMonster} />);

    const nameElement = screen.getByText(exampleMonster.name);
    expect(nameElement).toBeInTheDocument();

    const imageElement = screen.getByAltText(exampleMonster.name);
    expect(imageElement).toHaveAttribute('src', exampleMonster.imageUrl);

    expect(screen.getByText('HP')).toBeInTheDocument();
    expect(screen.getByText('Attack')).toBeInTheDocument();
    expect(screen.getByText('Defense')).toBeInTheDocument();
    expect(screen.getByText('Speed')).toBeInTheDocument();

    // TODO: if material ui ProgressBar was a11y compliant, I would be able to test it
    // const hpProgressBar = screen.getByRole('progressbar', { name: /hp/i });
    // expect(hpProgressBar).toHaveAttribute('value', String(exampleMonster.hp));
    expect(screen.getAllByRole('progressbar')).toHaveLength(4);
  });
});
