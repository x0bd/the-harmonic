export interface ArchiveItem {
  id: string;
  type: string; // 'ESSAY' | 'INTERVIEW' | 'HARDWARE' | 'RELEASE'
  title: string;
  year: string;
  tags: string[];
}
