export interface DialogueLine {
  speaker: string;
  isInterviewer: boolean;
  text: string;
  timestamp?: string;
}

export interface Interview {
  id: string;
  slug: string;
  tag: string;
  title: string;
  date: string;
  url: string;
  subject: string;
  audioUrl?: string;
  audioDuration?: string;
  dialogue?: DialogueLine[];
}
