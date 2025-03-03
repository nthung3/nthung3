"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface BlogTagListProps {
  tags: string[];
}

export function BlogTagList({ tags }: BlogTagListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Toggle selected tag
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
