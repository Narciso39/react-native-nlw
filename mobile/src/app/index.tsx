import { View, Text } from "react-native";
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
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
      <Steps />
    </View>
  );
};

export default Index;
