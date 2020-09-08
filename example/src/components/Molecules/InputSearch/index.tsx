import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import Row from "../../Atoms/Row";
import colors from "../../../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export interface Props {
  style?: any;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

const InputSearch = ({ style, placeholder, onFocus, onBlur }: Props) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const inputRef = useRef(null);

  const onFocusInput = () => {
    setInputFocused(true);

    if (onFocus) {
      onFocus();
    }

    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  const onBlurInput = () => {
    setInputFocused(false);

    if (onBlur) {
      onBlur();
    }

    if (inputRef?.current) {
      inputRef.current.blur();
      inputRef.current.clear();
    }
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
            icon="search"
            color={colors.light.neutralDark}
          />

          <TextInput
            ref={inputRef}
            placeholder={placeholder}
            onFocus={onFocusInput}
          />
        </View>
      </TouchableOpacity>

      {isInputFocused && <Button title="Cancel" onPress={onBlurInput} />}
    </Row>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  searchBarContainer: {
    flex: 1,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchBar: {
    backgroundColor: colors.light.neutral,
    height: 36,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
