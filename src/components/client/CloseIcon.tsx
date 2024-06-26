interface CloseIconProps {
  iconClass: string;
}

const CloseIcon = ({ iconClass }: CloseIconProps) => {
  return (
    <svg
      className={iconClass}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="50"
      height="50"
    >
      <path
        d="M9.156 6.313 6.312 9.155 22.157 25 6.22 40.969 9.03 43.78 25 27.844 40.938 43.78l2.843-2.843L27.844 25 43.687 9.156l-2.843-2.844L25 22.157z"
        transform="scale(5.12)"
        fill="#fff"
        strokeMiterlimit="10"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      ></path>
    </svg>
  );
};

export default CloseIcon;
