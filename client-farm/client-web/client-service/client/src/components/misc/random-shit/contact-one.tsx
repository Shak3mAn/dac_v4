/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OV18gGGbr0b
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Plumbing Service</CardTitle>
        <CardDescription>John Doe</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <h3 className="text-lg font-medium">Service Details</h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">Unclogged kitchen sink drain</div>
        </div>
        <Separator />
        <div>
          <h3 className="text-lg font-medium">Technician</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Jane Doe</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">(555) 555-5555</div>
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Replaced the P-trap and cleared the clog. Advised the customer to run the disposal more frequently to
              prevent future clogs.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------Card2------------------------------
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KXJl9piAlj1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Plumbing Services</CardTitle>
        <CardDescription>Get your plumbing issues resolved by our expert technicians.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Master Plumber with 10+ years of experience. Specializes in fixing leaks, unclogging drains, and
              installing new fixtures.
            </p>
          </div>
        </div>
        <Button className="w-full">Schedule Service</Button>
      </CardContent>
    </Card>
  )
}

//------------------------Card3---------------------------------------------------
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/o1Ik1KFZodd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Plumbing Service</CardTitle>
        <CardDescription>Get your plumbing issues resolved by our experienced technicians.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-semibold">John Doe</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Master Plumber</div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <span>+1 (555) 555-5555</span>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-semibold">Estimated Time</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">2-3 hours</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-semibold">Availability</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Monday - Friday, 9am - 5pm</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Schedule Service</Button>
      </CardFooter>
    </Card>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}