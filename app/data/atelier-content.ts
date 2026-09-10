export type Principle = {
  number: string;
  title: string;
  copy: string;
};

export const principles: Principle[] = [
  { number: "01", title: "Listen", copy: "Presence before prescription." },
  { number: "02", title: "Refine", copy: "Technique shaped to the individual." },
  { number: "03", title: "Endure", copy: "Care designed to live well." },
];

export type ServiceItem = {
  number: string;
  title: string;
  description: string;
  price: string;
};

export const services: ServiceItem[] = [
  { number: "01", title: "Signature Cut", description: "Precision shaped around movement.", price: "$165" },
  { number: "02", title: "Dimensional Color", description: "Tone and depth, designed to endure.", price: "$225" },
  { number: "03", title: "Scalp Ritual", description: "Restorative care at the source.", price: "$120" },
  { number: "04", title: "Hair Renewal", description: "Strength, repair, and softness.", price: "$145" },
  { number: "05", title: "Finishing Edit", description: "The final line, refined in motion.", price: "$95" },
];

export type CraftStep = {
  number: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  imageClassName: string;
  figureClassName: string;
};

export const craftSteps: CraftStep[] = [
  { number: "01", title: "Consult", description: "We observe movement, texture, and daily rhythm.", src: "/atelier-elan/craftsmanship/consult.png", alt: "A stylist studies the client's hair before beginning the service.", imageClassName: "object-[50%_48%]", figureClassName: "aspect-[1.12/1]" },
  { number: "02", title: "Section", description: "Structure gives every decision a reason.", src: "/atelier-elan/craftsmanship/section.png", alt: "A close view of wet hair being separated with a comb.", imageClassName: "object-center", figureClassName: "aspect-[0.65/1]" },
  { number: "03", title: "Shape", description: "The hand responds to weight, fall, and balance.", src: "/atelier-elan/craftsmanship/shape.png", alt: "A stylist's hands guide a comb through wet hair with precision.", imageClassName: "object-center", figureClassName: "aspect-[1.75/1]" },
  { number: "04", title: "Refine", description: "The cut is judged only after the hair moves naturally.", src: "/atelier-elan/craftsmanship/refine.png", alt: "The stylist assesses the final movement and shape of the hair.", imageClassName: "object-[50%_38%]", figureClassName: "aspect-[0.9/1]" },
];

export type ExperienceStep = {
  number: string;
  title: string;
  description: string;
};

export const experienceSteps: ExperienceStep[] = [
  { number: "01", title: "Threshold", description: "Leave the noise outside." },
  { number: "02", title: "Consultation", description: "Seen before shaped." },
  { number: "03", title: "Ritual", description: "Time, touch, and considered care." },
  { number: "04", title: "Return", description: "A result that still feels like you." },
];

export type GalleryFrame = {
  number: string;
  src: string;
  alt: string;
  frameClassName: string;
  sizes: string;
};

export const galleryFrames: GalleryFrame[] = [
  { number: "01", src: "/atelier-elan/gallery-section/model-01-hd.png", alt: "A woman in cream fabric with warm light falling across her hair.", frameClassName: "h-[24rem] w-[16rem] md:h-[29rem] md:w-[19.33rem] lg:h-[31rem] lg:w-[20.67rem] xl:h-[35rem] xl:w-[23.33rem]", sizes: "(min-width: 1280px) 23.33rem, (min-width: 1024px) 20.67rem, (min-width: 768px) 19.33rem, 100vw" },
  { number: "02", src: "/atelier-elan/gallery-section/model-02-hd.png", alt: "A quiet profile portrait showing soft dark hair and natural texture.", frameClassName: "h-[24rem] w-[16rem] md:h-[29rem] md:w-[19.33rem] lg:h-[31rem] lg:w-[20.67rem] xl:h-[35rem] xl:w-[23.33rem]", sizes: "(min-width: 1280px) 23.33rem, (min-width: 1024px) 20.67rem, (min-width: 768px) 19.33rem, 100vw" },
  { number: "03", src: "/atelier-elan/gallery-section/model-03-hd.png", alt: "A close editorial portrait with short textured hair and direct gaze.", frameClassName: "h-[24rem] w-[16rem] md:h-[29rem] md:w-[19.33rem] lg:h-[31rem] lg:w-[20.67rem] xl:h-[35rem] xl:w-[23.33rem]", sizes: "(min-width: 1280px) 23.33rem, (min-width: 1024px) 20.67rem, (min-width: 768px) 19.33rem, 100vw" },
  { number: "04", src: "/atelier-elan/gallery-section/model-04-hd.png", alt: "A blonde client portrait framed by loose textured hair.", frameClassName: "h-[24rem] w-[16rem] md:h-[29rem] md:w-[19.33rem] lg:h-[31rem] lg:w-[20.67rem] xl:h-[35rem] xl:w-[23.33rem]", sizes: "(min-width: 1280px) 23.33rem, (min-width: 1024px) 20.67rem, (min-width: 768px) 19.33rem, 100vw" },
];

export type TestimonialVisual = {
  src: string;
  alt: string;
  imageClassName: string;
};

export type TestimonialVoice = {
  number: string;
  titleLines: [string, string];
  quote: string;
  client: string;
  service: string;
  visual: TestimonialVisual;
};

const testimonialVisuals = {
  clara: {
    src: "/atelier-elan/testimonial-section/testimonial-clara-over-shoulder.png",
    alt: "Clara looks back over her shoulder after her salon consultation.",
    imageClassName: "object-[48%_42%]",
  },
  mara: {
    src: "/atelier-elan/testimonial-section/testimonial-mara-hair-detail.png",
    alt: "Mara studies the movement at the ends of her finished hair.",
    imageClassName: "object-[45%_42%]",
  },
  jess: {
    src: "/atelier-elan/testimonial-section/testimonial-jess-relaxed.png",
    alt: "Jess relaxes with one hand beneath her newly shaped hair.",
    imageClassName: "object-[55%_42%]",
  },
  noa: {
    src: "/atelier-elan/testimonial-section/testimonial-noa-hair-over-shoulder.png",
    alt: "Noa gathers her layered hair over one shoulder in the atelier.",
    imageClassName: "object-[50%_42%]",
  },
} satisfies Record<string, TestimonialVisual>;

export const testimonialVoices: TestimonialVoice[] = [
  {
    number: "07",
    titleLines: ["Listened To.", "Before A Single Cut."],
    quote: "Nothing felt prescribed. The consultation found the shape I had been trying to describe for years.",
    client: "Clara M. -- Atelier Client",
    service: "Consultation / Signature Cut",
    visual: testimonialVisuals.clara,
  },
  {
    number: "08",
    titleLines: ["The Difference", "Was Attention."],
    quote: "I recognised myself immediately--only lighter, more considered, and completely at ease.",
    client: "Mara S. -- Colour Client",
    service: "Dimensional Colour / First Visit",
    visual: testimonialVisuals.mara,
  },
  {
    number: "09",
    titleLines: ["It Finally", "Feels Like Me."],
    quote: "Soft movement, better texture, and a shape that grows out beautifully.",
    client: "Jess L. -- Atelier Client",
    service: "Lived-In Blend / Signature Cut",
    visual: testimonialVisuals.jess,
  },
  {
    number: "10",
    titleLines: ["A Shape", "I Could Live In."],
    quote: "The result felt refined without feeling unfamiliar. I left with ease I could actually keep.",
    client: "Noa R. -- Returning Client",
    service: "Refinement / Seasonal Shape",
    visual: testimonialVisuals.noa,
  },
];
