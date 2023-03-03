import { StyleSheet, View } from "react-native";

type SpacingProps = {
    value: number;
};

function Spacing(props: SpacingProps) {
  return (
    <View style={{ marginTop: props.value, marginBottom: props.value }}></View>
  );
}

Spacing.defaultProps = {
    value: 20
}

export default Spacing;