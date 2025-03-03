"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <Search className="h-4 w-4 text-gray-500" />
      </div>
      <Input
        type="text"
        placeholder="Search articles..."
        className="pl-10 pr-4 py-2 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
