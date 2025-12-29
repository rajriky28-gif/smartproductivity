
import { FadeIn } from '@/components/fade-in';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function GooglePlayButton() {
  return (
    <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white h-16">
      <Link href="#" aria-label="Download Stride on Google Play">
        <Image src="/googleplay.png" alt="Google Play logo" width={32} height={32} />
        <div className="text-left ml-3">
          <p className="text-xs uppercase">Get it on</p>
          <p className="text-xl font-semibold">Google Play</p>
        </div>
      </Link>
    </Button>
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
                <GooglePlayButton />
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
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-white flex items-center justify-center">
                 <Image src="/stridelogo.png" alt="Stride Logo" width={128} height={128} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
