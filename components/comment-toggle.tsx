'use client'

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface CommentToggleProps {
  postId: string
  isActive: boolean
  onToggle: () => void
}

export function CommentToggle({ postId, isActive, onToggle }: CommentToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={`show-comments-${postId}`}
        checked={isActive}
        onCheckedChange={onToggle}
      />
      <Label htmlFor={`show-comments-${postId}`} className="text-sm font-medium">
        Show Comments
      </Label>
    </div>
  )
}