import { NextRequest, NextResponse } from "next/server";
import { getAnnouncements, saveAnnouncements, Announcement } from "@/lib/announcements";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  const announcements = await getAnnouncements();
  return NextResponse.json(announcements);
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const announcements = await getAnnouncements();
    const newAnnouncement: Announcement = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toISOString().split("T")[0],
      isNew: true,
    };

    // Add to beginning of list
    const updatedAnnouncements = [newAnnouncement, ...announcements];
    await saveAnnouncements(updatedAnnouncements);

    return NextResponse.json(newAnnouncement, { status: 201 });
  } catch (error) {
     console.error("Error adding announcement:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  
    try {
      const body = await req.json();
      const { id, title, content } = body;
  
      if (!id || !title || !content) {
        return NextResponse.json(
          { error: "ID, Title and content are required" },
          { status: 400 }
        );
      }
  
      const announcements = await getAnnouncements();
      const index = announcements.findIndex((a) => a.id === id);

      if (index === -1) {
        return NextResponse.json({ error: "Announcement not found" }, { status: 404 });
      }

      const updatedAnnouncements = [...announcements];
      updatedAnnouncements[index] = {
        ...updatedAnnouncements[index],
        title,
        content
      };

      await saveAnnouncements(updatedAnnouncements);
  
      return NextResponse.json(updatedAnnouncements[index], { status: 200 });
    } catch (error) {
       console.error("Error updating announcement:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }

export async function DELETE(req: NextRequest) {
    if (!(await isAuthenticated())) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { id } = body;

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        const announcements = await getAnnouncements();
        const updatedAnnouncements = announcements.filter((a) => a.id !== id);
        await saveAnnouncements(updatedAnnouncements);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error deleting announcement:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
