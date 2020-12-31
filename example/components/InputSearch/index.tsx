import * as React from "react";
import { useState, useRef } from "react";
import {
  TouchableOpacity,
  TextInput,
  Animated,
  Easing,
  LayoutChangeEvent,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { InputSearchProps } from "./types";
import { dynamicStyles } from "./styles";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Row, Button, useStyle } from "react-native-ios-ui";

const TRANSITION_SPEED = 250;

export const InputSearch: React.FC<InputSearchProps> = ({
  style,
  onChangeText,
  onFocus,
  onBlur,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState("");
  const [transitionAnim] = useState(new Animated.Value(0));
  const [buttonWidth, setButtonWidth] = useState(0);
  const inputRef = useRef(null);
  const { styles, themeSet } = useStyle(dynamicStyles);

  const onFocusInput = () => {
    if (onFocus) {
      onFocus();
    }

    if (inputRef?.current) {
      const input = inputRef.current! as TextInput;
      input.focus();
    }

    setTransitionValue(1);
  };

  const onBlurInput = () => {
    if (onBlur) {
      onBlur();
    }

    if (!inputValue) {
      onCancel();
    }
  };

  const onInputValue = (value: string) => {
    setInputValue(value);

    if (onChangeText) {
      onChangeText(value);
    }
  };

  const onClearInput = () => {
    if (inputRef?.current) {
      const input = inputRef.current! as TextInput;
      input.clear();

      onInputValue("");
    }
  };

  const onCancel = () => {
    onClearInput();

    // blur input
    if (inputRef?.current) {
      const input = inputRef.current! as TextInput;
      input.blur();
    }

    setTransitionValue(0);
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setButtonWidth(width);
  };

  const setTransitionValue = (toValue = 0) => {
    Animated.timing(transitionAnim, {
      toValue,
      duration: TRANSITION_SPEED,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const inputMarginRight = transitionAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, buttonWidth],
    extrapolate: "clamp",
  });

  const buttonRight = transitionAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-1 * buttonWidth, 0],
    extrapolate: "clamp",
  });

  const buttonOpacity = transitionAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <Row centred>
      <TouchableOpacity
        style={styles.searchBarContainer}
        onPress={onFocusInput}
      >
        <Animated.View
          style={[
            styles.searchBar,
            style,
            {
              marginRight: inputMarginRight,
            },
          ]}
        >
          <FontAwesomeIcon
            style={styles.searchIcon}
            icon={faSearch}
            color={themeSet.textSecondary}
          />

          <TextInput
            ref={inputRef}
            {...otherProps}
            placeholderTextColor={themeSet.textTertiary}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            onChangeText={onInputValue}
            autoCorrect={false}
            style={styles.input}
          />

          {!!inputValue && (
            <TouchableOpacity onPress={onClearInput} style={styles.clearIcon}>
              <FontAwesomeIcon
                icon={faTimesCircle}
                color={themeSet.textSecondary}
              />
            </TouchableOpacity>
          )}
        </Animated.View>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.buttonContainer,
          {
            right: buttonRight,
            opacity: buttonOpacity,
          },
        ]}
        onLayout={onLayout}
      >
        <Button style={styles.button} title="Cancel" onPress={onCancel} />
      </Animated.View>
    </Row>
  );
};
