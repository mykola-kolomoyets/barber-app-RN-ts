import { FC, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';

import { Badge, ServiceItem } from '@Components/ui';
import { HorizontalSlider } from '@Components/layout/horizontal-slider';

import { FilterItem } from '@Utils/common';

import styles from './filter.styles';

type FilterProps = {
  title: string;
  items: FilterItem[];
};
const Filter: FC<FilterProps> = ({ items, title }) => {
  const [activeCategory, setActiveCategory] = useState('');

  const categories = useMemo(
    () => [...new Set(items.map((item) => item.category))],
    [items]
  );

  const filteredItems = useMemo(
    () => items.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const onCategoryChange = (category: string) => setActiveCategory(category);

  useEffect(() => {
    setActiveCategory(categories[0]);
  }, [categories]);

  return (
    <View>
      <View style={styles.filter}>
        <HorizontalSlider title={title}>
          {categories.map((category) => (
            <Badge
              key={category}
              title={category}
              isActive={category === activeCategory}
              onPress={() => onCategoryChange(category)}
            />
          ))}
        </HorizontalSlider>
      </View>

      <View style={styles.filter__content}>
        {filteredItems.map((item, index) => (
          <ServiceItem key={index} {...item} />
        ))}
      </View>
    </View>
  );
};

export { Filter };
