interface IconProps {
  className?: string;
  color?: string;
}
export default function Home({ className, color='black' }: IconProps) {
  
  return (
    <svg
      className={className}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7.3L9.1 1L17.2 7.3V17.2C17.2 17.6774 17.0104 18.1352 16.6728 18.4728C16.3352 18.8104 15.8774 19 15.4 19H2.8C2.56362 19 2.32956 18.9534 2.11117 18.863C1.89278 18.7725 1.69435 18.6399 1.52721 18.4728C1.36006 18.3056 1.22748 18.1072 1.13702 17.8888C1.04656 17.6704 1 17.4364 1 17.2V7.3Z"
        stroke={color}
        className="hover:stroke-[red]"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5.76709 19.0002V10.8892H12.4341V19.0002" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
