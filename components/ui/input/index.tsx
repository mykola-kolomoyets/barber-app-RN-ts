import { FC } from 'react';
import { View, TextInput } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';

import { Paragraph } from '@Components/ui/typography';

import { NamedChangeHandler, UnnamedChangeHandler } from '@Utils/common';
import { Colors } from '@Utils/colors';

import { masks, placeholders } from './input.constants';

import styles from './input.styles';

type InputProps = {
  label: string;
  name?: string;
  type: 'phone' | 'text' | 'ein';
  value: string;
  onChange: UnnamedChangeHandler | NamedChangeHandler;
  helperText?: string;
};
const Input: FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  helperText,
  name
}) => {
  const onChangeMaskedText = (_: string, extracted: string | undefined) =>
    name
      ? onChange(name, extracted || '')
      : (onChange as UnnamedChangeHandler)(extracted || '');

  const onChangeText = (value: string) =>
    name ? onChange(name, value) : (onChange as UnnamedChangeHandler)(value);

  return (
    <View>
      <Paragraph style={styles.label} view="small" color="black" light>
        {label}
      </Paragraph>

      {type !== 'text' ? (
        <MaskedTextInput
          style={styles.input}
          mask={masks[type]}
          blurOnSubmit
          keyboardType="number-pad"
          placeholder={placeholders[type] || label}
          placeholderTextColor={Colors.gray}
          {...{ value, onChangeText: onChangeMaskedText }}
        />
      ) : (
        <TextInput
          style={styles.input}
          blurOnSubmit
          placeholder={placeholders[type] || label}
          placeholderTextColor={Colors.gray}
          {...{ value, onChangeText }}
        />
      )}

      {helperText && (
        <View>
          <Paragraph style={styles.helper} view="small">
            {helperText}
          </Paragraph>
        </View>
      )}
    </View>
  );
};

export { Input };
