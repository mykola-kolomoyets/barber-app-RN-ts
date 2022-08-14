import { FC, useRef, useCallback } from 'react';
import { View } from 'react-native';
import BottomSheetWrapper, {
  BottomSheetBackdrop,
  BottomSheetView
} from '@gorhom/bottom-sheet';

import { Title, Paragraph, AdvantagesList, Button } from '@Components/ui';

import { snapPoints } from './bottom-sheet.constants';

import styles from './bottom-sheet.styles';

type BottomSheetProps = {
  opened: boolean;
  onClose: () => void;
};
const BottomSheet: FC<BottomSheetProps> = ({ opened, onClose }) => {
  const sheetRef = useRef<BottomSheetWrapper>(null);

  const onCloseButtonPress = () => sheetRef.current?.close();

  const BackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <BottomSheetWrapper
      ref={sheetRef}
      index={opened ? 0 : -1}
      snapPoints={snapPoints}
      onClose={onClose}
      backdropComponent={BackDrop}
      enablePanDownToClose
    >
      <BottomSheetView style={styles.container}>
        <View style={styles.up}>
          <Title style={styles.title} view="middle">
            This application uses plaid to link your bank
          </Title>

          <AdvantagesList />
        </View>

        <View style={styles.bottom}>
          <View style={styles.terms}>
            <Paragraph view="middle" color="gray">
              By selecting “Continue” you agree to the
            </Paragraph>

            <Paragraph view="middle">Plaid & User Privacy Policy</Paragraph>

            <Paragraph style={styles.middle_word} view="middle" color="gray">
              and
            </Paragraph>

            <Paragraph view="middle">SMS terms</Paragraph>
          </View>

          <Button
            view="primary"
            title="Continue"
            onPress={onCloseButtonPress}
          />
        </View>
      </BottomSheetView>
    </BottomSheetWrapper>
  );
};

export { BottomSheet };
