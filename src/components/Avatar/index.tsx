import { classNames } from 'utils'

type Size = 'small' | 'medium' | 'large'

type AvatarProps = {
  size?: Size
  src?: string
  alt?: string
  /** Enable responsive sizing that scales down on mobile devices */
  responsive?: boolean
}

const sizes: Record<Size, string> = {
  small: 'w-10 h-10',
  medium: 'w-12 h-12',
  large: 'w-14 h-14'
}

// Responsive sizes - scale down on mobile for better space utilization
const responsiveSizes: Record<Size, string> = {
  small: 'w-8 h-8 sm:w-10 sm:h-10',
  medium: 'w-10 h-10 sm:w-12 sm:h-12',
  large: 'w-12 h-12 sm:w-14 sm:h-14'
}

const EmptyAvatar = ({
  size = 'medium',
  responsive = false
}: Pick<AvatarProps, 'size' | 'responsive'>) => {
  const sizeClasses = responsive ? responsiveSizes[size] : sizes[size]

  return (
    <span
      data-testid="empty-avatar"
      className={classNames(
        'inline-block overflow-hidden bg-gray-100 rounded-full',
        sizeClasses
      )}
    >
      <svg
        className="size-full text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </span>
  )
}

export default function Avatar({
  size = 'medium',
  src,
  alt,
  responsive = false
}: AvatarProps) {
  const sizeClasses = responsive ? responsiveSizes[size] : sizes[size]

  if (!src) {
    return <EmptyAvatar size={size} responsive={responsive} />
  }

  return (
    <img
      className={classNames('inline-block rounded-full', sizeClasses)}
      src={src}
      alt={alt}
    />
  )
}
