import { IconProps } from "@tabler/icons-react-native";

export type StepProps = {
    id?: number;
    title: string;
    description: string;
    icon: React.ComponentType<IconProps>
  }