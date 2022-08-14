import { ReactElement } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import styles from './grid.styles';

type GridProps<T> = {
  columns: number;
  data: T[];
  renderItem: (data: ListRenderItemInfo<T>) => ReactElement;
  keyExtractor: (item: T) => string;
};
const Grid = <T,>({
  columns,
  data,
  renderItem,
  keyExtractor
}: GridProps<T>) => (
  <FlatList
    columnWrapperStyle={styles.row}
    scrollEnabled={false}
    numColumns={columns}
    renderItem={(data) => renderItem(data)}
    {...{ data, keyExtractor }}
  />
);

export { Grid };
