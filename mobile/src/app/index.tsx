import { View, Text } from "react-native";
import { Welcome } from "@/components/welcome";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 22,
        gap: 40,
      }}
    >
      <Welcome />
    </View>
  );
};

export default Index;
