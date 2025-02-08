import { Heart, MessageCircle, Repeat2, DollarSign } from "lucide-react";

interface PostCardProps {
  author: string;
  handle: string;
  time: string;
  content: string;
  image: string;
  stats: {
    likes: string;
    reposts: string;
    comments: string;
    tips: string;
  };
}

export function PostCard({
  author,
  handle,
  time,
  content,
  image,
  stats,
}: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600 font-semibold">{author[0]}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{author}</span>
              <span className="text-gray-500">{handle}</span>
              <span className="text-gray-500">{time}</span>
            </div>
            <p className="mt-2 text-lg">{content}</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt="Post image"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-1">
            <Heart className="w-5 h-5" />
            <span>{stats.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Repeat2 className="w-5 h-5" />
            <span>{stats.reposts}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-5 h-5" />
            <span>{stats.comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-5 h-5" />
            <span>{stats.tips}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
