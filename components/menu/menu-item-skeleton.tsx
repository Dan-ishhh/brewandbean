import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function MenuItemSkeleton() {
  return (
    <Card
      className="bg-[#FFF8F0] dark:bg-[#222] border-0 overflow-hidden rounded-2xl animate-fade-in-scale"
      // style={{ backgroundColor: "#FFF8F0" }}
    >
      <CardContent className="p-0">
        <div className="relative">
          <Skeleton
            className="w-full h-48 shimmer"
            style={{ backgroundColor: "#F5F5DC" }}
          />
          <Skeleton
            className="absolute top-4 left-4 w-16 h-6 rounded-full shimmer"
            style={{ backgroundColor: "#FAF3E0" }}
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <Skeleton
              className="w-6 h-6 rounded-full shimmer"
              style={{ backgroundColor: "#FAF3E0" }}
            />
            <Skeleton
              className="w-6 h-6 rounded-full shimmer"
              style={{ backgroundColor: "#FAF3E0" }}
            />
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <Skeleton
              className="h-6 w-32 shimmer"
              style={{ backgroundColor: "#F5F5DC" }}
            />
            <Skeleton
              className="h-6 w-16 shimmer"
              style={{ backgroundColor: "#F5F5DC" }}
            />
          </div>
          <Skeleton
            className="h-4 w-full mb-2 shimmer"
            style={{ backgroundColor: "#F5F5DC" }}
          />
          <Skeleton
            className="h-4 w-3/4 mb-4 shimmer"
            style={{ backgroundColor: "#F5F5DC" }}
          />
          <Skeleton
            className="h-10 w-full rounded-full shimmer"
            style={{ backgroundColor: "#F5F5DC" }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
