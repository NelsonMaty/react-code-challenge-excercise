import styled from '@emotion/styled';
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '11px 12px',
  width: 'calc(307px - 20px)',
  height: '393px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
}));

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '36px',
  lineHeight: '42px',
  color: colors.black,
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
}));

export const Image = styled.img(() => ({
  borderRadius: '7px',
  width: '283px',
  height: '178px',
  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.25)',
}));

export const BattleMonsterName = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontSize: '22px',
  color: colors.black,
  paddingTop: '8px',
  paddingBottom: '2px',
  letterSpacing: '0px',
  borderBottom: 'rgba(0, 0, 0, 0.1) 1px solid',
}));

export const BattleMonsterStat = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontSize: '12px',
  lineHeight: '20px',
  color: colors.black,
  paddingTop: '9px',
}));
