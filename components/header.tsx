import Image from 'next/image'

export default function Header({
  backgroundImage = '/images/background.png?height=400&width=1200',
  avatarImage = '/images/avatar1.jpg?height=100&width=100',
  title = 'edndacomputer.xyz',
}: {
  backgroundImage?: string
  avatarImage?: string
  title?: string
}) {
  return (
    <header className="relative h-[200px] w-full overflow-visible">
      {/* Blurred background image */}
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="px-4 text-center text-4xl font-bold text-neutral-100">
          {title}
        </h1>
      </div>

      {/* Avatar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-neutral-900 shadow-lg">
          <Image
            src={avatarImage}
            alt="User avatar"
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      </div>
    </header>
  )
}
