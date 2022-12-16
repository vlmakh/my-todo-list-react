import styled from '@emotion/styled';
import Masonry from 'react-masonry-css';

import {
  typography,
  space,
  color,
  layout,
  border,
  shadow,
  flexbox,
  position,
} from 'styled-system';

export const Box = styled('div')(
  typography,
  space,
  color,
  layout,
  border,
  shadow,
  flexbox,
  position,
);

export const MasonryBox = styled(Masonry)`
  display: flex;
  column-gap: 16px;
  padding: 8px;
  width: auto;  
`;

export const NoteBox = styled(Box)`
  cursor: ${p => (p.draggable ? 'grab' : 'default')};
`