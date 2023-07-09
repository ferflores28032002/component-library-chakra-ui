import { Button as ChakraButton } from "@chakra-ui/react";
import { FaCheck, FaTimes, FaSpinner } from "react-icons/fa";

interface ButtonProps {
  label: string;
  isLoading?: boolean;
  showIconLeft?: boolean;
  showIconRight?: boolean;
}

export const Button = ({
  label,
  isLoading,
  showIconLeft,
  showIconRight,
}: ButtonProps) => {
  return (
    <ChakraButton
      colorScheme="red"
      size="md"
      gap="1"
      textAlign="center"
      _dark={{
        bg: "accent.500",
      }}
      isLoading={isLoading}
    >
      {showIconLeft && <FaCheck />} {label} {showIconRight && <FaTimes />}
      {isLoading && <FaSpinner className="animate-spin" />}
    </ChakraButton>
  );
};
