import Link from 'next/link';
import Image from 'next/image';
import { promises as fs } from 'fs';
import path from 'path';

export default async function CocoPage() {
  const imageDirectory = path.join(process.cwd(), 'public/images/coco');
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Coco's World</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageFilenames.map((filename) => (
          <div key={filename} className="rounded-lg overflow-hidden">
            <Image
              src={`/images/coco/${filename}`}
              alt={`A picture of Coco`}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 