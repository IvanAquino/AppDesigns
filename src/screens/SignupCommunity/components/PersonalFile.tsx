import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  width?: number;
  [key: string]: any;
};
export const PersonalFile = ({width = 200, ...rest}: Props) => {
  const height = width * 0.76;

  return (
    <Svg
      viewBox="0 0 717 544"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      width={width}
      height={height}
      data-name="Layer 1"
      {...rest}>
      <Path
        fill="#2f2e41"
        d="M287.186 52.527c-8.744 15.063 7.72 40.443-8.873 45.714l1.367-1.367c10.016-12.32-10.92-38.397-.903-50.718a30.102 30.102 0 0 0 3.98-5.915"
      />
      <Path
        fill="#ffb8b8"
        d="M369.072 273.513a10.495 10.495 0 0 0-10.191-12.456l-21.613-62.794-11.964 15.25 22.852 58.672a10.552 10.552 0 0 0 20.916 1.328Z"
      />
      <Path
        fill="#fc8585"
        d="M274.066 121.905s-.673-22.73 19.654-9.709 64.582 135 64.582 135l-22.024 11.915-49.996-111.624Z"
      />
      <Path
        fill="#ffb6b6"
        d="m334.034 511.488-10.15 4.337-21.56-37.085 14.981-6.402 16.729 39.15z"
      />
      <Path
        fill="#2f2e41"
        d="m346.906 526.784-7.28 3.11-4.235-6.316-.391 8.294-19.305 8.25a4.72 4.72 0 0 1-5.847-6.858l10.867-17.235-2.969-6.947 16.63-5.962Z"
      />
      <Path
        fill="#ffb6b6"
        d="m174.924 524.067-11.024-.539-3.169-42.779 16.272.795-2.079 42.523z"
      />
      <Path
        fill="#2f2e41"
        d="m179.81 543.453-7.907-.387-1.046-7.533-3.98 7.288-20.968-1.025a4.72 4.72 0 0 1-2.258-8.724l17.31-10.746.369-7.546 17.561 1.912Z"
      />
      <Path
        fill="#f2f2f2"
        d="M499.752 517.25a3.564 3.564 0 0 0 2.524-6.2l-.253-.97a9.575 9.575 0 0 1 17.748-.335c4.318 9.845 9.881 20.028 7.267 30.942 17.594-38.227 11.036-85.508-15.81-117.8-7.374-3.97-13.388-11.093-15.015-19.414 3.642 1.195 8.14-1.8 5.374-5.599-1.197-1.45-2.405-2.888-3.602-4.339 13.65-14.817 30.3 8.108 15.31 28.074a114.264 114.264 0 0 1 13.024 19.95 48.043 48.043 0 0 1 2.656-22.34c2.682-6.65 7.775-12.276 12.251-18.045 5.443-7.028 16.813-3.918 17.64 4.928-5.07 1.72-5.66 9.07.166 10.02-1.367 16.484-11.982 31.721-26.732 39.085a114.71 114.71 0 0 1 6.725 47.885c2.435-19.01 22.77-23.812 36.944-31.494a5.55 5.55 0 0 1 8.516 5.54 32.052 32.052 0 0 0-5.59 3.017 4.844 4.844 0 0 0 2.335 8.82c-7.011 17.84-25.462 29.95-44.529 30.065a117.929 117.929 0 0 1-7.7 23.2l-28.3.27c-.104-.313-.198-.637-.292-.95a32.153 32.153 0 0 0 7.825-.542c-7.008-8.139-12.407-12.274-8.483-23.767Z"
      />
      <Path
        fill="#2f2e41"
        d="M202.774 245.985s-22.42 61.098-22.782 67.935-6.755 93.297-12.118 98.32-21.756 82.909-9 89 53-4 53-4l14-92 4.756-70.483s14.48 165.976 40.74 165.488 58.26-10.488 58.26-10.488l-36.756-100.516s.52-118.999-8-143-82.1-.256-82.1-.256Z"
      />
      <Path
        fill="#fc8585"
        d="m269.298 88.575-30.024 2.75-4.837 14.848s-25.126 13.799-19.563 20.068-1.244 48.516-1.244 48.516l1.538 34.293s-1.652 23.759-6.595 29.233-17.875 18.897-8.737 12.475c32.038-22.517 88.038-3.517 88.038-3.517l-8-49s18.171-80.225 11-87-13.937-7.632-13.937-7.632Z"
      />
      <Path
        fill="#ffb8b8"
        d="M111.534 244.003a10.495 10.495 0 0 0 7.899-14.022l50.64-42.962-18.555-5.601-46.351 42.618a10.552 10.552 0 0 0 6.367 19.967Z"
      />
      <Path
        fill="#fc8585"
        d="M240.14 131.625s9.977-20.434-13.909-16.944-114.464 96.403-114.464 96.403l15.158 19.93 91.544-81.112Z"
      />
      <Path
        fill="#e6e6e6"
        d="M201.242 96.964 106.54 218.29a10.08 10.08 0 0 0 1.74 14.126c21.993 53.399 87.788 92.997 165.187 128.938a10.074 10.074 0 0 0 14.126-1.74l94.703-121.327a10.074 10.074 0 0 0-1.741-14.126c-64.952-36.676-120.778-79.169-165.186-128.938a10.08 10.08 0 0 0-14.127 1.74Z"
      />
      <Path
        fill="#fff"
        d="m375.649 235.527-28.826 36.93A107.913 107.913 0 0 1 195.8 291.07l-80.785-63.057a5.733 5.733 0 0 1-.998-8.038l91.51-117.237a5.733 5.733 0 0 1 8.04-.983c40.865 52.769 95.567 93.834 161.092 125.742a5.728 5.728 0 0 1 .99 8.03Z"
      />
      <Path
        fill="#ccc"
        d="m199.353 163.196-18.773 24.051a3.051 3.051 0 0 1-4.81-3.755l18.773-24.05a3.051 3.051 0 1 1 4.81 3.754ZM234.566 145.356l-41.228 52.818a3.051 3.051 0 0 1-4.81-3.755l41.228-52.818a3.051 3.051 0 1 1 4.81 3.755Z"
      />
      <Circle cx={164.251} cy={213.36} r={20.096} fill="#fc8585" />
      <Path
        fill="#ccc"
        d="m236.755 187.1-50.636 64.87a3.07 3.07 0 0 1-4.81-3.754l50.636-64.871a3.07 3.07 0 0 1 4.81 3.755ZM269.604 172.288l-70.676 90.545a3.07 3.07 0 0 1-4.81-3.755l70.676-90.544a3.07 3.07 0 0 1 4.81 3.754ZM269.359 212.549l-50.637 64.87a3.07 3.07 0 0 1-4.81-3.754l50.636-64.871a3.07 3.07 0 0 1 4.81 3.755Z"
      />
      <Path
        fill="#fc8585"
        d="m336.359 220.549-50.637 64.87a3.07 3.07 0 0 1-4.81-3.754l50.636-64.871a3.07 3.07 0 0 1 4.81 3.755Z"
      />
      <Path
        fill="#ccc"
        d="m302.207 197.737-70.675 90.545a3.07 3.07 0 0 1-4.81-3.755l70.675-90.544a3.07 3.07 0 0 1 4.81 3.754Z"
      />
      <Path
        fill="#2f2e41"
        d="M218.961 50.244a29.823 29.823 0 1 0 51.296-20.686l-.143-.143a21.26 21.26 0 0 0-.728-.74.012.012 0 0 1-.012-.011c-.31-.287-.62-.573-.943-.847a29.815 29.815 0 0 0-49.47 22.427Z"
      />
      <Circle cx={256.132} cy={57.144} r={25.008} fill="#ffb8b8" />
      <Path
        fill="#2f2e41"
        d="M229.472 63.808c-2.444-11.015 1.089-23.357 8.792-30.71a28.2 28.2 0 0 1 29.448-5.709c.63.254 1.258.532 1.875.822l.287.135v.042c.056.039.112.08.167.12a.957.957 0 0 0 .413.228 15.417 15.417 0 0 1 11.634 4.85c3.876 4.206 5.701 11.002 5.142 19.137l-.018.255-.217.135a85.463 85.463 0 0 1-9.118 5.027c-10.978 5.162-21 6.119-30.633 2.92l-.177-.058-4.043-6.776c-.83 4.674-.387 20.175-5.15 21.015l-8.298-10.965Z"
      />
      <Path
        fill="#2f2e41"
        d="M176.829 85.582c8.51-4.392-2.435-20.334-.236-29.655 2.2-9.32 18.037-12.319 19.046-21.842s3.383-19.346 9.667-26.573c4.016-4.617 9.933-8.026 16.025-7.448a14.409 14.409 0 0 1 12.628 17.792c1.735-2.458 6.224-1.925 7.335.87.988 2.486-1.194 5.496-3.763 5.716-3.36 4.15-7.208 8.554-12.473 9.392a5.68 5.68 0 0 1-4.84-1.118c-1.24-1.19-1.336-3.567.134-4.456-6.616 2.628-10.495 9.782-11.477 16.833-.982 7.05.376 14.185 1.271 21.247s1.281 14.492-1.488 21.05c-3.272 7.75-10.805 13.303-19.025 15.085s-16.976.04-24.417-3.882c-7.441-3.922-13.646-9.91-18.715-16.622 8.731 6.2 20.812 8.523 30.328 3.611ZM244.186 55.527c-8.744 15.063 7.72 40.443-8.873 45.714l1.367-1.367c10.016-12.32-10.92-38.397-.903-50.718a30.102 30.102 0 0 0 3.98-5.915"
      />
      <Path
        fill="#fd6584"
        d="M230.64 63.58s7.408-27.651 39.163-34.034c.036-.011.155-.06.31-.13a4.2 4.2 0 0 1 .335-.18 22.856 22.856 0 0 0-1.062-.56.012.012 0 0 1-.012-.012c-.31-.287-.62-.573-.943-.847l-.906.036s-31.863-5.046-36.885 35.727Z"
      />
      <Path
        fill="#ccc"
        d="M0 543.373a1.186 1.186 0 0 0 1.19 1.19h715.29a1.19 1.19 0 0 0 0-2.38H1.19a1.187 1.187 0 0 0-1.19 1.19Z"
      />
    </Svg>
  );
};
