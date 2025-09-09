import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Hello, World!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Welcome to your first Next.js application. This is a simple Hello World page 
              built with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
              <span className="flex items-center gap-2">
                ⚡ Powered by Next.js
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-2">
                🎨 Styled with Tailwind CSS
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-2">
                ✨ Enhanced with shadcn/ui
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}