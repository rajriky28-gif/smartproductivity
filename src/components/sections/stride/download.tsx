import { FadeIn } from '@/components/fade-in';
import Image from 'next/image';
import Link from 'next/link';

function GooglePlayBadge() {
  return (
    <Link href="#" aria-label="Download Stride on Google Play">
      <div className="inline-block transition-opacity hover:opacity-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 48"
          className="h-12 w-auto"
          fill="currentColor"
        >
          <path d="M121.6,24.1a2.1,2.1,0,0,1,1-1.8,2.2,2.2,0,0,1,2.3-.1l.1.1,10.7,6.2.3.2a2.3,2.3,0,0,1,.9,1.7,2.2,2.2,0,0,1-.9,1.8l-10.7,6.2-.1.1a2.2,2.2,0,0,1-2.3-.1,2.1,2.1,0,0,1-1.2-1.8L124,24.3l-2.4-.1Z" />
          <path d="M149,22.3a2.3,2.3,0,0,1-1-1.8l-.1-11-.1-.2a2.2,2.2,0,0,0-2.2-1.8h-.2L135,13.7l-.2.1a2.2,2.2,0,0,0-1,1.8,2.3,2.3,0,0,0,1,1.8l2.4,1.4,8.3,4.8,2.5-1.3Z" />
          <path d="M149,25.7,135.5,33.9a2.2,2.2,0,0,0-1,1.7,2.3,2.3,0,0,0,1,1.8l.1.1,10.6,6.1h.2a2.2,2.2,0,0,0,2.2-1.8l.1-11,.1-.2a2.3,2.3,0,0,1-1-1.8Z" />
          <path d="M124.3,23.7,112.9,16.4a2.3,2.3,0,0,0-3.1.5,2.2,2.2,0,0,0,.5,3.1l8,5.7Z" />
          <path d="M124.3,24.3l-11.4,7.3a2.2,2.2,0,0,0-.5,3.1,2.3,2.3,0,0,0,3.1.5l8-5.7Z" />
          <path d="M26.7,11.5V36.9H22.4V11.5Zm9.3,12.7c0-2.6-1-4.7-2.9-6.3a8.6,8.6,0,0,0-6.4-2.5,8.9,8.9,0,0,0-6.5,2.5,8,8,0,0,0-2.9,6.3,8.2,8.2,0,0,0,2.9,6.4,8.9,8.9,0,0,0,6.5,2.6,8.7,8.7,0,0,0,6.4-2.6C35,31.7,36,29.6,36,27.2Zm-4.3,0c0,1.8-.5,3.1-1.6,4.1s-2.5,1.5-4.4,1.5-3.3-.5-4.4-1.5S19.7,29,19.7,27.2s.5-3.1,1.6-4.1,2.5-1.5,4.4-1.5,3.3.5,4.4,1.5S31.7,25.4,31.7,27.2ZM14,11.5l5.5,8.1L14,28.2V11.5Zm0-2.5a2.4,2.4,0,0,0-2.5,2.5V28.3a2.5,2.5,0,0,0,1.2,2.1L20,24.3,12.7,9.7A2.5,2.5,0,0,0,14,11.5Z" />
          <path d="M69,21.9a8.9,8.9,0,0,0-6.6-2.6c-2.8,0-5,.8-6.6,2.3V11.5H51.5V36.9H55.8V27.4c0-2.6.9-4.5,2.8-5.6,1.8-1.1,3.8-1.1,4.9.1,1.2,1.3,1.8,3.1,1.8,5.4v9.6h4.3V27.2c0-2.3-.5-4-1.6-5.2S69.7,20.9,69,21.9Z" />
          <path d="M47.7,27.2c0,3.1-2.2,5.2-5.4,5.2a5.1,5.1,0,0,1-4.8-2.9l3.8-2.2a2,2,0,0,0,1.2.5,1.6,1.6,0,0,0,1.6-1.1c.1-.3.1-2.9.1-3.3s0-3-.1-3.3a1.6,1.6,0,0,0-1.6-1.1,2,2,0,0,0-1.2.5L37.5,21a5.1,5.1,0,0,1,4.8-2.9C45.5,18.1,47.7,20.2,47.7,23.3Z" />
          <path d="M92.1,25.8a8,8,0,0,1-3.1,3.2,9.3,9.3,0,0,1-4.7,1.2,6.9,6.9,0,0,1-6.4-3.5l3.8-2.2a3.1,3.1,0,0,0,2.8,1.6,2.9,2.9,0,0,0,2.8-1.8c.2-.5.2-1.2.2-2.1s0-1.6-.2-2.1a2.9,2.9,0,0,0-2.8-1.8,3.1,3.1,0,0,0-2.8,1.6L78,20.5a6.9,6.9,0,0,1,6.4-3.5,9.5,9.5,0,0,1,4.7,1.2,8,8,0,0,1,3.1,3.2,7.3,7.3,0,0,1,0,8.4Z" />
          <path d="M103.3,11.5l-5,7.9-5.1-7.9H88.5l7.5,11.1L88.2,34.2h4.7l5.2-8.3,5.1,8.3h4.7l-7.6-11.7,7.6-11Z" />
          <path d="M7.7,36.9V11.5H3.4V36.9Z" />
        </svg>
      </div>
    </Link>
  );
}

export function DownloadSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Start using Stride
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A calm, thoughtful task and focus system designed to support
                meaningful work.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Available on Android.
              </p>
              <div className="mt-8 flex flex-col items-center md:items-start gap-4">
                <GooglePlayBadge />
                <p className="text-xs text-muted-foreground">
                  Android 8.0 and above
                </p>
              </div>

              <div className="mt-8 space-y-2 text-center md:text-left">
                <p className="text-xs text-muted-foreground">
                  No ads · No dark patterns · No unnecessary notifications
                </p>
              </div>

              <Link
                href="/philosophy"
                className="mt-8 inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Read our philosophy →
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200}>
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-zinc-800 flex items-center justify-center">
                 <p className="text-muted-foreground italic text-center text-sm">
                    [Minimal Phone Mockup showing Quick Add]
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
