import * as React from "react";
import { useState, useRef } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Row } from "../../atoms/Row";
import { Button } from "../../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { InputSearchProps } from "./types";
import { dynamicStyles } from "./styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useStyle } from "../../../hooks/useStyle";

export const InputSearch: React.FC<InputSearchProps> = ({
  style,
  placeholder,
  onChangeText,
  onFocus,
  onBlur,
}) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const inputRef = useRef(null);
  const { styles, themeSet } = useStyle(dynamicStyles);

  const onFocusInput = () => {
    setInputFocused(true);

    if (onFocus) {
      onFocus();
    }

    if (inputRef?.current) {
      const input = inputRef.current! as TextInput;
      input.focus();
    }
  };

  const onBlurInput = () => {
    setInputFocused(false);

    if (onBlur) {
      onBlur();
    }

    if (inputRef?.current) {
      const input = inputRef.current! as TextInput;
      input.blur();
    }
  };

  const onCancel = () => {
    onBlurInput();

    if (inputRef?.current) {
      const input = inputRef.current! as TextInput;
      input.clear();
    }

    onChangeText("");
  };

  return (
    <Row centred>
      <TouchableOpacity
        style={styles.searchBarContainer}
        onPress={onFocusInput}
      >
        <View style={[styles.searchBar, style]}>
          <FontAwesomeIcon
            style={styles.searchIcon}
            icon={faSearch}
            color={themeSet.textSecondary}
          />

          <TextInput
            ref={inputRef}
            placeholder={placeholder}
            placeholderTextColor={themeSet.textTertiary}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            onChangeText={onChangeText}
            autoCorrect={false}
          />
        </View>
      </TouchableOpacity>

      {isInputFocused && (
        <Button style={styles.button} title="Cancel" onPress={onCancel} />
      )}
    </Row>
  );
};
