import type { IconProps } from './icon';
import type { FC } from 'react';

const CopyIcon: FC<IconProps> = (props) => {
  const { size = '1em', width, height, className } = props;

  return (
    <svg
      className={className}
      fill="currentColor"
      height={height || size}
      viewBox="0 0 24 24"
      width={width || size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" />
    </svg>
  );
};

export default CopyIcon;
