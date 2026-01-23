"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash, Edit, Plus, Save, X, Lock } from "lucide-react";
import { toast } from "sonner";
import { Announcement } from "@/lib/announcements";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(false);

  // Form states
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [isAdding, setIsAdding] = useState(false);

  const getAuthHeader = () => {
    return `Basic ${btoa(`${username}:${password}`)}`;
  };

  // Auth attempt
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      setIsAuthenticated(true);
      fetchAnnouncements();
      toast.success("Logged in (Credentials stored for session)");
    }
  };

  const fetchAnnouncements = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/announcements");
      const data = await res.json();
      setAnnouncements(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this?")) return;

    try {
      const res = await fetch("/api/announcements", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: getAuthHeader(),
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setAnnouncements((prev) => prev.filter((a) => a.id !== id));
        toast.success("Announcement deleted");
      } else {
        toast.error("Failed to delete (Check credentials)");
      }
    } catch (error) {
      toast.error("Error deleting announcement");
    }
  };

  const handleSave = async () => {
    const isEdit = !!editingId;
    const method = isEdit ? "PUT" : "POST";
    const body = isEdit ? { id: editingId, ...formData } : formData;

    try {
      const res = await fetch("/api/announcements", {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: getAuthHeader(),
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const updated = await res.json();
        if (isEdit) {
            setAnnouncements(prev => prev.map(a => a.id === updated.id ? updated : a));
        } else {
            setAnnouncements(prev => [updated, ...prev]);
        }
        resetForm();
        toast.success(isEdit ? "Updated successfully" : "Created successfully");
      } else {
        toast.error("Operation failed (Check password)");
      }
    } catch (error) {
       toast.error("Error saving announcement");
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ title: "", content: "" });
    setIsAdding(false);
  };

  const startEdit = (a: Announcement) => {
    setEditingId(a.id);
    setFormData({ title: a.title, content: a.content });
    setIsAdding(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="size-5" /> Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter admin username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Unlock
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Manage Announcements</h1>
          <Button onClick={() => { setIsAdding(true); setEditingId(null); setFormData({title: "", content: ""}) }}>
            <Plus className="mr-2 size-4" /> New Announcement
          </Button>
        </div>

        {/* Edit/Create Form */}
        {(isAdding || editingId) && (
            <Card className="border-primary/50">
                <CardHeader>
                    <CardTitle>{isAdding ? "New Announcement" : "Edit Announcement"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input 
                        placeholder="Title" 
                        value={formData.title} 
                        onChange={e => setFormData(prev => ({ ...prev, title: e.target.value}))}
                    />
                     <Textarea 
                        placeholder="Content" 
                        value={formData.content} 
                        onChange={e => setFormData(prev => ({ ...prev, content: e.target.value}))}
                        rows={4}
                    />
                    <div className="flex gap-2 justify-end">
                        <Button variant="ghost" onClick={resetForm}>Cancel</Button>
                        <Button onClick={handleSave}>
                            <Save className="mr-2 size-4" /> Save
                        </Button>
                    </div>
                </CardContent>
            </Card>
        )}

        <div className="grid gap-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-semibold text-lg">{announcement.title}</h3>
                  <p className="text-sm text-muted-foreground">{announcement.date}</p>
                  <p className="mt-2 text-sm">{announcement.content}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline" onClick={() => startEdit(announcement)}>
                    <Edit className="size-4" />
                  </Button>
                  <Button size="icon" variant="destructive" onClick={() => handleDelete(announcement.id)}>
                    <Trash className="size-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {announcements.length === 0 && !loading && (
             <p className="text-muted-foreground text-center py-10">No announcements found. Create one!</p>
          )}
        </div>
      </div>
    </div>
  );
}
