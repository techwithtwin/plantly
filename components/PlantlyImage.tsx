import { Image, useWindowDimensions } from "react-native";

interface Props {
  size?: number;
}
export function PlantlyImage({ size }: Props) {
  const { width } = useWindowDimensions();

  const imageSize = size ?? width / 1.5;
  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
