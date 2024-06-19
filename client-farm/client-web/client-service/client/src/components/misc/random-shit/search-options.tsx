/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pSwTvSkNNXA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function Component() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Open Search</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>Find what you're looking for with our powerful search tools.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6">
          <div>
            <h3 className="font-semibold mb-2">Category / Keyword</h3>
            <div className="relative">
              <Input type="search" placeholder="Search by category or keyword" className="pr-10" />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <Button variant="outline" size="sm">
                Design
              </Button>
              <Button variant="outline" size="sm">
                Development
              </Button>
              <Button variant="outline" size="sm">
                Marketing
              </Button>
              <Button variant="outline" size="sm">
                Finance
              </Button>
              <Button variant="outline" size="sm">
                HR
              </Button>
              <Button variant="outline" size="sm">
                IT
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Service-Specific</h3>
            <div className="grid gap-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="software">Software Development</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>
              <div className="grid gap-2">
                <Input type="text" placeholder="Enter search query" />
                <Button variant="outline">Search</Button>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" className="mr-auto">
            Close
          </Button>
          <Button>Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


{/* ------------------------SEARCH TYPE 2--------------------------------------------------------- */}
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lnpI7izyY7Q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [activeTab, setActiveTab] = useState("category")
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const categories = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "Mobile Development" },
    { id: 3, name: "UI/UX Design" },
    { id: 4, name: "Digital Marketing" },
    { id: 5, name: "IT Consulting" },
  ]
  const services = [
    {
      id: 1,
      name: "Responsive Website Design",
      description: "Create a modern, mobile-friendly website.",
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Build a custom mobile app for iOS and Android.",
    },
    {
      id: 3,
      name: "UI/UX Audit",
      description: "Optimize your product's user experience.",
    },
    {
      id: 4,
      name: "SEO Optimization",
      description: "Improve your website's search engine visibility.",
    },
    {
      id: 5,
      name: "IT Infrastructure Consulting",
      description: "Streamline your business technology solutions.",
    },
  ]
  const filteredServices = useMemo(() => {
    return services.filter((service) => service.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery])
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Search Services</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Search Services</DialogTitle>
          <DialogDescription>Find the perfect service for your business needs.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6">
          <Tabs defaultValue="category" value={activeTab} onValueChange={setActiveTab} className="grid gap-4">
            <TabsList className="grid grid-cols-2 gap-2">
              <TabsTrigger value="category">Category</TabsTrigger>
              <TabsTrigger value="service">Service</TabsTrigger>
            </TabsList>
            <TabsContent value="category">
              <div className="grid gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="justify-between w-full">
                      {selectedCategory?.name || "Select a category"}
                      <ChevronDownIcon className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    {categories.map((category) => (
                      <DropdownMenuItem key={category.id} onSelect={() => setSelectedCategory(category)}>
                        {category.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {selectedCategory && (
                  <div className="grid gap-4">
                    <h3 className="font-semibold">Services in {selectedCategory.name}</h3>
                    <div className="grid gap-2">
                      {services
                        .filter((service) => selectedCategory.id === service.categoryId)
                        .map((service) => (
                          <div
                            key={service.id}
                            className="flex items-center justify-between gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
                          >
                            <div>
                              <h4 className="font-medium">{service.name}</h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                            </div>
                            <Button variant="ghost">Learn More</Button>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="service">
              <div className="grid gap-4">
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="grid gap-2">
                  {filteredServices.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
                    >
                      <div>
                        <h4 className="font-medium">{service.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                      </div>
                      <Button variant="ghost">Learn More</Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

{/* -------------------------------------------------------SEARCH TYPE 3 ---------------------------------------- */}
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Nz8PKTK3LUe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Component() {
  const [activeTab, setActiveTab] = useState("category")
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Open Search</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>Find the perfect service or browse our categories.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="flex gap-4">
            <Button variant={activeTab === "category" ? "default" : "outline"} onClick={() => setActiveTab("category")}>
              Categories
            </Button>
            <Button variant={activeTab === "service" ? "default" : "outline"} onClick={() => setActiveTab("service")}>
              Services
            </Button>
          </div>
          {activeTab === "category" && (
            <div className="grid gap-4">
              <Input
                type="search"
                placeholder="Search categories..."
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link
                  href="#"
                  className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
                  prefetch={false}
                >
                  <div className="flex items-center gap-2">
                    <FolderIcon className="w-6 h-6" />
                    <span className="font-medium">Web Design</span>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
                  prefetch={false}
                >
                  <div className="flex items-center gap-2">
                    <CodeIcon className="w-6 h-6" />
                    <span className="font-medium">Web Development</span>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
                  prefetch={false}
                >
                  <div className="flex items-center gap-2">
                    <CameraIcon className="w-6 h-6" />
                    <span className="font-medium">Photography</span>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
                  prefetch={false}
                >
                  <div className="flex items-center gap-2">
                    <BrushIcon className="w-6 h-6" />
                    <span className="font-medium">Graphic Design</span>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
                  prefetch={false}
                >
                  <div className="flex items-center gap-2">
                    <HeadphonesIcon className="w-6 h-6" />
                    <span className="font-medium">Audio/Video</span>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
                  prefetch={false}
                >
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="w-6 h-6" />
                    <span className="font-medium">Business</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
          {activeTab === "service" && (
            <div className="grid gap-4">
              <Input
                type="search"
                placeholder="Search for a service..."
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Web Design</CardTitle>
                    <CardDescription>
                      Professional web design services to create a stunning online presence.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Starting at $1,500</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Custom packages available</div>
                      </div>
                      <Button variant="default">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Services</CardTitle>
                    <CardDescription>Improve your website's visibility and ranking on search engines.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Starting at $500/month</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Tailored packages available</div>
                      </div>
                      <Button variant="default">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Social Media Management</CardTitle>
                    <CardDescription>Grow your online presence and engage with your audience.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Starting at $300/month</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Custom packages available</div>
                      </div>
                      <Button variant="default">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button type="submit">Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function BrushIcon(props) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function CameraIcon(props) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function FolderIcon(props) {
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
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  )
}


function HeadphonesIcon(props) {
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}