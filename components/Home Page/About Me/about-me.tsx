import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ClientTabs } from './ClientTabs'
import { ClientTechScroll } from './ClientTechScroll'

export default function AboutMe() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <Avatar className="w-32 h-32 mx-auto">
                <AvatarImage src="/alex-rayer.webp" alt="Alex Rayer" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="text-2xl text-gray-800 dark:text-gray-100">Alex Rayer</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">Web Developer & Designer</CardDescription>
            </CardContent>
          </Card>
          <div className="md:col-span-2">
            <ClientTabs />
          </div>
        </div>
        <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-gray-100">Technologies I Work With</CardTitle>
          </CardHeader>
          <CardContent>
            <ClientTechScroll />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

