import type { HardwareItem } from "../types/hardware";

export const hardwareItems: HardwareItem[] = [
  {
    id: "HW-01",
    slug: "korg-ms-20",
    type: "SYNTHESIZER",
    name: "KORG MS-20",
    era: "1978",
    manufacturer: "Korg",
    synthesis: "Semi-Modular Analog",
    filter: "High-pass / Low-pass",
    image: "https://images.unsplash.com/photo-1598387846148-18d451a37c95?q=80&w=1200&auto=format&fit=crop",
    url: "/hardware/korg-ms-20",
    description: "The KORG MS-20 changed the landscape of aggressive electronic music upon its arrival in 1978. Renowned for its snarling filter design, it employs independent High-pass and Low-pass resonant filters that can be pushed into chaotic self-oscillation. This machine birthed entire sub-genres of industrial and techno music due to its unique sonic footprint."
  },
  {
    id: "HW-02",
    slug: "roland-tr-909",
    type: "DRUM MACHINE",
    name: "ROLAND TR-909",
    era: "1983",
    manufacturer: "Roland",
    synthesis: "Analog / Sample",
    filter: "None",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
    url: "/hardware/roland-tr-909",
    description: "A defining pillar of House and Techno. The 909 introduced a hybrid approach, using analog synthesis for the core drum sounds (kick, snare, toms) and 6-bit samples for the cymbals and hi-hats. Its punchy, distinctive kick remains a benchmark standard for dance floors almost half a century later."
  },
  {
    id: "HW-03",
    slug: "space-echo-re-201",
    type: "EFFECTS",
    name: "SPACE ECHO RE-201",
    era: "1974",
    manufacturer: "Roland",
    synthesis: "Tape Delay / Reverb",
    filter: "Spring Reverb",
    image: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=1200&auto=format&fit=crop",
    url: "/hardware/space-echo-re-201",
    description: "An iconic piece of dub and experimental effects infrastructure. The RE-201 routes audio onto a literal loop of magnetic tape housed in an internal tank, reading that tape across multiple playback heads to generate endless, deteriorating repeats that melt into the mix organically."
  },
  {
    id: "HW-04",
    slug: "prophet-5",
    type: "SYNTHESIZER",
    name: "PROPHET-5",
    era: "1978",
    manufacturer: "Sequential Circuits",
    synthesis: "Polyphonic Analog",
    filter: "SSM2040 4-Pole",
    image: "https://images.unsplash.com/photo-1520166986518-18e3ab039324?q=80&w=1200&auto=format&fit=crop",
    url: "/hardware/prophet-5"
  }
];
