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
      { speaker: "RROSE", isInterviewer: false, text: "Exactly. The instability forces a kind of listening-in-the-moment. I'm not playing a track; I'm guiding a system that wants to fall apart. When it teeters on the edge of collapse, the overtones do things you can't program in a DAW.", timestamp: "03:25" },
      { speaker: "THE HARMONIC", isInterviewer: true, text: "Wait, so is it the system playing you, or you playing the system?", timestamp: "07:10" },
      { speaker: "RROSE", isInterviewer: false, text: "It's a negotiation. If you fight the hardware, it punishes you. If you listen to what it naturally wants to output, you just set up boundaries. It's almost geological.", timestamp: "07:22" }
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
    audioDuration: "32:10",
    dialogue: [
      { speaker: "THE HARMONIC", isInterviewer: true, text: "Careful moved away from the softer synth-pop edges into something much more violent. Was that purely a result of the hardware you were using, or a shift in intention?", timestamp: "05:12" },
      { speaker: "JAE MATTHEWS", isInterviewer: false, text: "It was both. We acquired a few new pieces of gear, specifically the SH-101 which became central to the basslines. But mentally, we were also touring exhaustively and feeling that sheer physical fatigue. The music naturally got harsher because we were harsher.", timestamp: "05:40" },
      { speaker: "AUGUSTUS MULLER", isInterviewer: false, text: "Yeah, the 101 has this aggressive, immediate punch. Once you sequence a 16-step pattern on it and push the resonance, it demands a certain vocal delivery to match. It dictates the room.", timestamp: "06:05" },
      { speaker: "THE HARMONIC", isInterviewer: true, text: "How do you manage the bleed between the electronic sequencing and Jae's live vocals on stage?", timestamp: "06:33" },
      { speaker: "JAE MATTHEWS", isInterviewer: false, text: "It's chaotic. We rely on heavy compression. But I think hitting that distorted threshold is exactly what makes our live sets feel distinct from the record.", timestamp: "06:45" }
    ]
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
