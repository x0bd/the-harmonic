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
    url: "/hardware/korg-ms-20"
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
    url: "/hardware/roland-tr-909"
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
    url: "/hardware/space-echo-re-201"
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
