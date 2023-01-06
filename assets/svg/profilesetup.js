import Svg, { Path, Rect, ClipPath, G, Defs, Circle } from "react-native-svg";

export const ProfileIcon = () => (
  <Svg
    width="136"
    height="136"
    viewBox="0 0 136 136"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clip-path="url(#clip0_1007_10253)">
      <Circle cx="68" cy="68" r="68" fill="#EEF2FE" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 112.979V110.499C17 93.5418 50.9787 84.9994 68 84.9994C85.0212 84.9994 119 93.5418 119 110.499V112.979C106.54 127.096 88.3098 136 68 136C47.6902 136 29.4601 127.096 17 112.979ZM68 28.3335C53.9112 28.3335 42.5 39.7447 42.5 53.8335C42.5 67.9222 53.9112 79.3335 68 79.3335C82.0887 79.3335 93.5 67.9222 93.5 53.8335C93.5 39.7447 82.0887 28.3335 68 28.3335Z"
        fill="#3B99D8"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1007_10253">
        <Rect width="136" height="136" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
