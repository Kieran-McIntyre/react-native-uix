import React from "react";
import { InputSearch } from ".";
import { render, fireEvent } from "@testing-library/react-native";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle");
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: () => <View />,
}));

describe("Molecules - InputSearch", () => {
  it("by default > input is not focused > cancel button hidden", () => {});

  it("can click input to focus input > cancel button shows", () => {});

  it("input does NOT have value > should NOT render clear icon", () => {});

  it("input has value > should render clear icon", () => {});

  it("can click clear icon to clear input", () => {});

  it("can click cancel button to end session", () => {});

  it("input has value > blur > does NOT end session", () => {});

  it("input does NOT have value > blur > should end session", () => {});

  it("can type input value", () => {});
});
