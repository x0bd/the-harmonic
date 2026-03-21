import type { Interview } from "../types/interview";

export const interviews: Interview[] = [
  {
    id: "004",
    slug: "silence-as-velocity",
    tag: "CONVERSATION",
    title: "Silence as Velocity: The Space Between Kicks",
    date: "24.10.23",
    url: "/interviews/silence-as-velocity",
    subject: "Rrose",
    audioDuration: "45:32",
    dialogue: [
      { speaker: "THE HARMONIC", isInterviewer: true, text: "Your work often strips techno down to its absolute bare minimum. The spaces between the kicks feel as heavy as the beats themselves. How do you approach negative space?", timestamp: "02:14" },
      { speaker: "RROSE", isInterviewer: false, text: "For me, the kick drum is just the framing mechanism. The actual music happens in the reverberation and the silence that trails off. If you fill every frequency, you suffocate the psychoacoustic phenomena that happen when sound decays.", timestamp: "02:40" },
      { speaker: "THE HARMONIC", isInterviewer: true, text: "Is that why you favor performing on modular systems where control is inherently unstable?", timestamp: "03:15" },
      { speaker: "RROSE", isInterviewer: false, text: "Exactly. The instability forces a kind of listening-in-the-moment. I'm not playing a track; I'm guiding a system that wants to fall apart. When it teeters on the edge of collapse, the overtones do things you can't program in a DAW.", timestamp: "03:25" }
    ]
  },
  {
    id: "003",
    slug: "granular-synthesis-patterns",
    tag: "STUDIO VISIT",
    title: "Granular Synthesis Patterns",
    date: "18.09.23",
    url: "/interviews/granular-synthesis-patterns",
    subject: "Boy Harsher",
    audioDuration: "32:10"
  },
  {
    id: "002",
    slug: "tokyo-underground",
    tag: "PROFILE",
    title: "Rhythm and Void: Tokyo Underground",
    date: "02.08.23",
    url: "/interviews/tokyo-underground",
    subject: "Wata Igarashi"
  },
  {
    id: "001",
    slug: "frequencies-of-resistance",
    tag: "MANIFESTO",
    title: "Frequencies of Resistance",
    date: "14.07.23",
    url: "/interviews/frequencies-of-resistance",
    subject: "Phase Fatale"
  },
  {
    id: "000",
    slug: "architecture-of-brutalism",
    tag: "ARCHIVE",
    title: "The Architecture of Brutalism",
    date: "01.05.23",
    url: "/interviews/architecture-of-brutalism",
    subject: "Regis"
  }
];
