import React from 'react';
import {Modal, View, StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../styles/defaultColors';
import TitleBoldText from './text/TitleBoldText';
import SvgButton from './buttons/SvgButton';
import SecondaryButton from './buttons/SecondaryButton';
import {IconClose} from './icons/UIIcons';

const {width, height} = Dimensions.get('window');
const MODAL_WIDTH = width * 0.8;
const MODAL_HEIGHT = height * 0.7;

const StyledModal = ({
  visible,
  onClose,
  messages,
  buttonTitle,
  buttonOnPress,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.closeButton}>
            <SvgButton background={false} onPress={onClose}>
              <IconClose />
            </SvgButton>
          </View>
          {messages.map((message, index) => {
            return <TitleBoldText key={index}>{message}</TitleBoldText>;
          })}
          <SecondaryButton title={buttonTitle} onPress={buttonOnPress} />
        </View>
      </View>
    </Modal>
  );
};

export default StyledModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  modalContainer: {
    width: MODAL_WIDTH,
    height: MODAL_HEIGHT,
    backgroundColor: COLORS.accent,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
