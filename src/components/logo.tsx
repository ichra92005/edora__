import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="https://res.cloudinary.com/drdebnl11/image/upload/v1756872154/logo_ohculr.png"
      alt="Edora Logo"
      width={48}
      height={48}
      className="rounded-full"
    />
  );
}
