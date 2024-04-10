import Carousel from "@/components/carousel";
import Image from "next/image";

const slides: string[] = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg"];

export default function Photo() {
  return (
    <div className="max-w-lg mx-auto my-12">
      <Carousel>
        {slides.map((slide) => (
          <Image src={slide} alt={slide} key={slide} width={600} height={800} />
        ))}
      </Carousel>
    </div>
  );
}
