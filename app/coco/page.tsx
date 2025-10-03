import Link from 'next/link';
import Image from 'next/image';
import { cocoLogEntries } from '../data/coco-log-entries';

export default function CocoPage() {
  return (
    <div className="bg-black text-green-400 font-mono min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto border border-green-700 rounded-lg overflow-hidden">
        <div className="bg-gray-800 p-2 border-b border-green-700 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs">ASTRO-DOG-LOG.TXT</div>
          <div></div>
        </div>
        <div className="p-4 h-[75vh] overflow-y-auto">
          <p className="animate-pulse">C:\&gt; LOADING ASTRO-DOG LOGS...</p>
          <p>C:\&gt; ACCESS GRANTED. DISPLAYING ENTRIES.</p>
          <br />
          {cocoLogEntries.map((entry, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <p className="text-yellow-400">[LOG ENTRY #{String(index + 1).padStart(3, '0')} :: TIMESTAMP: {entry.timestamp}]</p>
              <div className="sm:flex sm:items-start sm:gap-4 mt-2">
                <div className="mb-4 sm:mb-0 sm:w-1/3">
                  <Image
                    src={entry.image}
                    alt={entry.caption}
                    width={500}
                    height={500}
                    className="object-cover w-full h-auto rounded-md border-2 border-green-600"
                  />
                </div>
                <p className="sm:w-2/3 whitespace-pre-wrap leading-relaxed">&gt; {entry.caption}</p>
              </div>
              <p>C:\&gt; _</p>
            </div>
          ))}
           <p>C:\&gt; END OF LOG. AWAITING NEW ENTRIES...</p>
        </div>
         <div className="bg-gray-800 p-2 border-t border-green-700 text-center">
            <Link href="/" className="text-blue-400 hover:underline">
              [RETURN TO MAIN HUB]
            </Link>
          </div>
      </div>
    </div>
  );
} 