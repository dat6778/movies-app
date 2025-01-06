import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface StarProps extends React.SVGProps<SVGSVGElement> {
    className?: string
}

const Star = forwardRef<SVGSVGElement, StarProps>(({ className, ...props }, ref) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ref={ref}
            className={cn("w-6 h-6", className)}
            {...props}
        >
            <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
        </svg>
    )
})
Star.displayName = "Star"

export { Star } 