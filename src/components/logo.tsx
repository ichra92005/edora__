import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Edora Logo"
      width={48}
      height={48}
      className="rounded-full"
    />
  );
}
