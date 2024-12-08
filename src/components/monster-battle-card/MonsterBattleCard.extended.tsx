import React from 'react';

import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  Image,
  BattleMonsterName,
  BattleMonsterStat,
  ProgressBar,
} from './MonsterBattleCard.extended.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  let cardBody = <BattleMonsterTitle>{title!}</BattleMonsterTitle>;

  if (monster) {
    cardBody = (
      <>
        <Image src={monster.imageUrl} alt={monster.name} />
        <BattleMonsterName> {monster.name}</BattleMonsterName>
        <BattleMonsterStat>HP</BattleMonsterStat>
        <ProgressBar value={monster.hp} variant="determinate"></ProgressBar>
        <BattleMonsterStat>Attack</BattleMonsterStat>
        <ProgressBar value={monster.attack} variant="determinate"></ProgressBar>
        <BattleMonsterStat>Defense</BattleMonsterStat>
        <ProgressBar
          value={monster.defense}
          variant="determinate"></ProgressBar>
        <BattleMonsterStat>Speed</BattleMonsterStat>
        <ProgressBar value={monster.speed} variant="determinate"></ProgressBar>
      </>
    );
  }
  return (
    <BattleMonsterCard centralized={!monster}>{cardBody}</BattleMonsterCard>
  );
};

export { MonsterBattleCard };
