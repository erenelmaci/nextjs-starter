import { forwardRef } from "react"
import { Icon } from "@iconify/react"

type IconifyProps = {
  icon: string
  className?: string
  width?: number
  style?: React.CSSProperties
} & React.ComponentPropsWithoutRef<"span">

export const Iconify = forwardRef<HTMLSpanElement, IconifyProps>(
  ({ className, icon, width = 20, style, ...other }, ref) => {
    return (
      <span
        ref={ref}
        className={className}
        style={{
          width,
          height: width,
          display: "inline-flex",
          flexShrink: 0,
          ...style,
        }}
        {...other}
      >
        <Icon icon={icon} width={width} height={width} />
      </span>
    )
  }
)

Iconify.displayName = "Iconify"
