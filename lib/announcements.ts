import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'announcements.json');

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  isNew?: boolean;
}

export async function getAnnouncements(): Promise<Announcement[]> {
  try {
    const fileContents = await fs.promises.readFile(dataFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading announcements:', error);
    return [];
  }
}

export async function saveAnnouncements(announcements: Announcement[]) {
  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      await fs.promises.mkdir(dir, { recursive: true });
    }
    await fs.promises.writeFile(dataFilePath, JSON.stringify(announcements, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving announcements:', error);
    throw error;
  }
}
