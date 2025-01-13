"use client";

import { useMediaQuery } from "@chakra-ui/media-query";

const Medium = () => {
  const [device] = useMediaQuery("(max-width: 1024px)");
  return device;
};
const Small = () => {
  const [device] = useMediaQuery("(max-width: 640px)");
  return device;
};

export {Small,Medium} 