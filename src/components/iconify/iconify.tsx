import { forwardRef } from 'react';
import { Icon } from '@iconify/react';

type IconifyProps = {
  icon: string;
  className?: string;
  width?: number;
  style?: React.CSSProperties;
} & React.ComponentPropsWithoutRef<'span'>;

export const Iconify = forwardRef<HTMLSpanElement, IconifyProps>(
  ({ className, icon, width = 20, style, ...other }, ref) => {
    const iconSize = typeof width === 'number' ? width : parseInt(width);

    return (
      <span
        ref={ref}
        className={className}
        style={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          lineHeight: 0,
          ...style,
        }}
        {...other}
      >
        <Icon
          icon={icon}
          width={iconSize}
          height={iconSize}
          style={{
            width: iconSize,
            height: iconSize,
            minWidth: iconSize,
            minHeight: iconSize,
            fontSize: iconSize,
          }}
        />
      </span>
    );
  }
);

Iconify.displayName = 'Iconify';
