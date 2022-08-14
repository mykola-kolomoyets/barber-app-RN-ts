import { FC } from 'react';
import { FlatList } from 'react-native';

import { AdvantageListItem } from './advantage-list-item';

import { advantages } from './advantages-list.constants';

const AdvantagesList: FC = () => (
  <FlatList
    data={advantages}
    renderItem={({ item: advantage }) => <AdvantageListItem {...advantage} />}
    keyExtractor={(item) => item.title}
  />
);

export { AdvantagesList };
