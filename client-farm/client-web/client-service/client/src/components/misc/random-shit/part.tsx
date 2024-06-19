/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TbB5x4FvYpN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
  })
  const parts = [
    {
      id: 1,
      name: "Brake Pads",
      description: "High-performance brake pads for improved stopping power.",
      category: "Brakes",
      brand: "Brembo",
      image: "/placeholder.svg?height=200&width=200",
      price: 49.99,
      inStock: 25,
    },
    {
      id: 2,
      name: "Engine Oil Filter",
      description: "Genuine OEM engine oil filter for enhanced engine protection.",
      category: "Engine",
      brand: "Mobil 1",
      image: "/placeholder.svg?height=200&width=200",
      price: 12.99,
      inStock: 50,
    },
    {
      id: 3,
      name: "Spark Plugs",
      description: "High-quality spark plugs for improved engine performance.",
      category: "Engine",
      brand: "NGK",
      image: "/placeholder.svg?height=200&width=200",
      price: 8.99,
      inStock: 75,
    },
    {
      id: 4,
      name: "Windshield Wipers",
      description: "Premium quality windshield wipers for clear visibility.",
      category: "Accessories",
      brand: "Bosch",
      image: "/placeholder.svg?height=200&width=200",
      price: 14.99,
      inStock: 30,
    },
    {
      id: 5,
      name: "Fuel Injector",
      description: "Precision-engineered fuel injector for optimal fuel delivery.",
      category: "Engine",
      brand: "Denso",
      image: "/placeholder.svg?height=200&width=200",
      price: 79.99,
      inStock: 15,
    },
    {
      id: 6,
      name: "Cabin Air Filter",
      description: "Replacement cabin air filter for improved air quality.",
      category: "Accessories",
      brand: "Mann-Filter",
      image: "/placeholder.svg?height=200&width=200",
      price: 19.99,
      inStock: 40,
    },
    {
      id: 7,
      name: "Timing Belt",
      description: "Durable timing belt for reliable engine operation.",
      category: "Engine",
      brand: "Gates",
      image: "/placeholder.svg?height=200&width=200",
      price: 59.99,
      inStock: 20,
    },
    {
      id: 8,
      name: "Shock Absorbers",
      description: "High-performance shock absorbers for a smooth ride.",
      category: "Suspension",
      brand: "KYB",
      image: "/placeholder.svg?height=200&width=200",
      price: 99.99,
      inStock: 10,
    },
  ]
  const filteredParts = useMemo(() => {
    return parts.filter((part) => {
      const nameMatch = part.name.toLowerCase().includes(searchTerm.toLowerCase())
      const categoryMatch = selectedFilters.category.length === 0 || selectedFilters.category.includes(part.category)
      const brandMatch = selectedFilters.brand.length === 0 || selectedFilters.brand.includes(part.brand)
      return nameMatch && categoryMatch && brandMatch
    })
  }, [searchTerm, selectedFilters])
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleFilterChange = (type, value) => {
    if (type === "category") {
      setSelectedFilters({
        ...selectedFilters,
        category: selectedFilters.category.includes(value)
          ? selectedFilters.category.filter((item) => item !== value)
          : [...selectedFilters.category, value],
      })
    } else if (type === "brand") {
      setSelectedFilters({
        ...selectedFilters,
        brand: selectedFilters.brand.includes(value)
          ? selectedFilters.brand.filter((item) => item !== value)
          : [...selectedFilters.brand, value],
      })
    }
  }
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Car Parts Catalog</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Browse our extensive selection of high-quality car parts.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Input
              type="search"
              placeholder="Search parts..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full md:w-auto"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="w-4 h-4" />
                  Filters
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.category.includes("Brakes")}
                  onCheckedChange={() => handleFilterChange("category", "Brakes")}
                >
                  Brakes
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.category.includes("Engine")}
                  onCheckedChange={() => handleFilterChange("category", "Engine")}
                >
                  Engine
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.category.includes("Accessories")}
                  onCheckedChange={() => handleFilterChange("category", "Accessories")}
                >
                  Accessories
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.category.includes("Suspension")}
                  onCheckedChange={() => handleFilterChange("category", "Suspension")}
                >
                  Suspension
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.brand.includes("Brembo")}
                  onCheckedChange={() => handleFilterChange("brand", "Brembo")}
                >
                  Brembo
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.brand.includes("Mobil 1")}
                  onCheckedChange={() => handleFilterChange("brand", "Mobil 1")}
                >
                  Mobil 1
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.brand.includes("NGK")}
                  onCheckedChange={() => handleFilterChange("brand", "NGK")}
                >
                  NGK
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.brand.includes("Bosch")}
                  onCheckedChange={() => handleFilterChange("brand", "Bosch")}
                >
                  Bosch
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.brand.includes("Denso")}
                  onCheckedChange={() => handleFilterChange("brand", "Denso")}
                >
                  Denso
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.brand.includes("Mann-Filter")}
                  onCheckedChange={() => handleFilterChange("brand", "Mann-Filter")}
                >
                  Mann-Filter
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.brand.includes("Gates")}
                  onCheckedChange={() => handleFilterChange("brand", "Gates")}
                >
                  Gates
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedFilters.brand.includes("KYB")}
                  onCheckedChange={() => handleFilterChange("brand", "KYB")}
                >
                  KYB
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredParts.map((part) => (
            <li key={part.id} className="grid gap-4">
              <div className="grid gap-2.5 relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt={part.name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">{part.name}</h3>
                  <p className="text-sm leading-none">{part.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="font-semibold">${part.price}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{part.inStock} in stock</div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

/// - Section
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JHJT5kYv7jN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  const [filters, setFilters] = useState({
    category: [],
    make: [],
    model: [],
  })
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  const [cart, setCart] = useState([])
  const parts = [
    {
      id: 1,
      name: "Brake Pads",
      image: "/placeholder.svg?height=200&width=200",
      description: "High-performance brake pads for improved stopping power",
      category: "Brakes",
      make: "Toyota",
      model: "Camry",
      inStock: 25,
    },
    {
      id: 2,
      name: "Engine Air Filter",
      image: "/placeholder.svg?height=200&width=200",
      description: "Replacement air filter for improved engine performance",
      category: "Engine",
      make: "Honda",
      model: "Civic",
      inStock: 12,
    },
    {
      id: 3,
      name: "Windshield Wipers",
      image: "/placeholder.svg?height=200&width=200",
      description: "All-weather wiper blades for clear visibility",
      category: "Accessories",
      make: "Ford",
      model: "F-150",
      inStock: 30,
    },
    {
      id: 4,
      name: "Spark Plugs",
      image: "/placeholder.svg?height=200&width=200",
      description: "High-quality spark plugs for optimal engine performance",
      category: "Engine",
      make: "Chevrolet",
      model: "Silverado",
      inStock: 18,
    },
    {
      id: 5,
      name: "Cabin Air Filter",
      image: "/placeholder.svg?height=200&width=200",
      description: "Replacement cabin air filter for cleaner interior air",
      category: "Accessories",
      make: "Nissan",
      model: "Altima",
      inStock: 22,
    },
    {
      id: 6,
      name: "Fuel Injectors",
      image: "/placeholder.svg?height=200&width=200",
      description: "High-flow fuel injectors for improved fuel efficiency",
      category: "Engine",
      make: "Dodge",
      model: "Ram 1500",
      inStock: 8,
    },
  ]
  const filteredParts = useMemo(() => {
    return parts
      .filter((part) => {
        if (filters.category.length > 0 && !filters.category.includes(part.category)) {
          return false
        }
        if (filters.make.length > 0 && !filters.make.includes(part.make)) {
          return false
        }
        if (filters.model.length > 0 && !filters.model.includes(part.model)) {
          return false
        }
        return true
      })
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return a[sortBy] > b[sortBy] ? 1 : -1
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1
        }
      })
  }, [filters, sortBy, sortOrder])
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      if (type === "category") {
        return {
          ...prevFilters,
          category: prevFilters.category.includes(value)
            ? prevFilters.category.filter((item) => item !== value)
            : [...prevFilters.category, value],
        }
      } else if (type === "make") {
        return {
          ...prevFilters,
          make: prevFilters.make.includes(value)
            ? prevFilters.make.filter((item) => item !== value)
            : [...prevFilters.make, value],
        }
      } else if (type === "model") {
        return {
          ...prevFilters,
          model: prevFilters.model.includes(value)
            ? prevFilters.model.filter((item) => item !== value)
            : [...prevFilters.model, value],
        }
      }
      return prevFilters
    })
  }
  const handleSortChange = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(key)
      setSortOrder("asc")
    }
  }
  const handleAddToCart = (part) => {
    setCart((prevCart) => [...prevCart, part])
  }
  const handleRemoveFromCart = (partId) => {
    setCart((prevCart) => prevCart.filter((part) => part.id !== partId))
  }
  return (
    <div className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Car Parts Catalog</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Browse our selection of high-quality car parts and accessories
            </p>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <DropdownMenuLabel>Filters</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={filters.category.includes("Brakes")}
                  onCheckedChange={() => handleFilterChange("category", "Brakes")}
                >
                  Brakes
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.category.includes("Engine")}
                  onCheckedChange={() => handleFilterChange("category", "Engine")}
                >
                  Engine
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.category.includes("Accessories")}
                  onCheckedChange={() => handleFilterChange("category", "Accessories")}
                >
                  Accessories
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={filters.make.includes("Toyota")}
                  onCheckedChange={() => handleFilterChange("make", "Toyota")}
                >
                  Toyota
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.make.includes("Honda")}
                  onCheckedChange={() => handleFilterChange("make", "Honda")}
                >
                  Honda
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.make.includes("Ford")}
                  onCheckedChange={() => handleFilterChange("make", "Ford")}
                >
                  Ford
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.make.includes("Chevrolet")}
                  onCheckedChange={() => handleFilterChange("make", "Chevrolet")}
                >
                  Chevrolet
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.make.includes("Nissan")}
                  onCheckedChange={() => handleFilterChange("make", "Nissan")}
                >
                  Nissan
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.make.includes("Dodge")}
                  onCheckedChange={() => handleFilterChange("make", "Dodge")}
                >
                  Dodge
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <ListOrderedIcon className="h-4 w-4" />
                  <span>Sort</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sortBy} onValueChange={handleSortChange}>
                  <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="category">Category</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="make">Make</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="model">Model</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="inStock">In Stock</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="flex items-center gap-2">
              <ShoppingCartIcon className="h-4 w-4" />
              <span>Cart ({cart.length})</span>
            </Button>
          </div>
        </div>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredParts.map((part) => (
            <li key={part.id} className="grid gap-4">
              <div className="grid gap-2.5 relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt={part.name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                />
                <div className="grid gap-1">
                  <div className="flex items-center gap-4">
                    <h3 className="font-semibold">{part.name}</h3>
                    <div
                      className={`px-2 py-1 rounded-md text-xs font-medium ${
                        part.inStock > 0
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                      }`}
                    >
                      {part.inStock > 0 ? `${part.inStock} in stock` : "Out of stock"}
                    </div>
                  </div>
                  <p className="text-sm leading-none">{part.description}</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" onClick={() => handleAddToCart(part)}>
                Add to Cart
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function ListOrderedIcon(props) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

// Section B
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/c47UReOzucs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const [filters, setFilters] = useState({
    category: [],
    make: [],
    model: [],
    price: { min: 0, max: Infinity },
  })
  const [sort, setSort] = useState({
    key: "name",
    order: "asc",
  })
  const parts = [
    {
      id: 1,
      name: "Brake Pads",
      image: "/placeholder.svg?height=200&width=200",
      description: "High-quality brake pads for improved stopping power.",
      price: 29.99,
      category: "Brakes",
      make: "Toyota",
      model: "Camry",
      inStock: true,
    },
    {
      id: 2,
      name: "Engine Oil Filter",
      image: "/placeholder.svg?height=200&width=200",
      description: "Genuine OEM engine oil filter for your vehicle.",
      price: 14.99,
      category: "Engine",
      make: "Honda",
      model: "Civic",
      inStock: true,
    },
    {
      id: 3,
      name: "Windshield Wipers",
      image: "/placeholder.svg?height=200&width=200",
      description: "Premium all-weather windshield wipers.",
      price: 19.99,
      category: "Exterior",
      make: "Ford",
      model: "F-150",
      inStock: false,
    },
    {
      id: 4,
      name: "Spark Plugs",
      image: "/placeholder.svg?height=200&width=200",
      description: "High-performance spark plugs for improved engine efficiency.",
      price: 9.99,
      category: "Engine",
      make: "Chevrolet",
      model: "Silverado",
      inStock: true,
    },
    {
      id: 5,
      name: "Headlight Bulbs",
      image: "/placeholder.svg?height=200&width=200",
      description: "Bright and long-lasting headlight bulbs.",
      price: 12.99,
      category: "Exterior",
      make: "Nissan",
      model: "Altima",
      inStock: true,
    },
    {
      id: 6,
      name: "Cabin Air Filter",
      image: "/placeholder.svg?height=200&width=200",
      description: "Replacement cabin air filter for improved air quality.",
      price: 16.99,
      category: "Interior",
      make: "Honda",
      model: "Accord",
      inStock: true,
    },
  ]
  const filteredParts = useMemo(() => {
    return parts
      .filter((part) => {
        if (filters.category.length > 0 && !filters.category.includes(part.category)) {
          return false
        }
        if (filters.make.length > 0 && !filters.make.includes(part.make)) {
          return false
        }
        if (filters.model.length > 0 && !filters.model.includes(part.model)) {
          return false
        }
        if (part.price < filters.price.min || part.price > filters.price.max) {
          return false
        }
        return true
      })
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1
        }
      })
  }, [filters, sort])
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      if (type === "category") {
        return {
          ...prevFilters,
          category: prevFilters.category.includes(value)
            ? prevFilters.category.filter((item) => item !== value)
            : [...prevFilters.category, value],
        }
      } else if (type === "make") {
        return {
          ...prevFilters,
          make: prevFilters.make.includes(value)
            ? prevFilters.make.filter((item) => item !== value)
            : [...prevFilters.make, value],
        }
      } else if (type === "model") {
        return {
          ...prevFilters,
          model: prevFilters.model.includes(value)
            ? prevFilters.model.filter((item) => item !== value)
            : [...prevFilters.model, value],
        }
      } else if (type === "price") {
        return {
          ...prevFilters,
          price: {
            min: value.min,
            max: value.max,
          },
        }
      }
      return prevFilters
    })
  }
  const handleSortChange = (key) => {
    setSort((prevSort) => {
      if (prevSort.key === key) {
        return {
          ...prevSort,
          order: prevSort.order === "asc" ? "desc" : "asc",
        }
      } else {
        return {
          key,
          order: "asc",
        }
      }
    })
  }
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Car Parts Catalog</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Browse our selection of high-quality car parts for your vehicle.
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto shrink-0">
                <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]" align="end">
              <DropdownMenuRadioGroup value={sort.key} onValueChange={handleSortChange}>
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price">Price</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="category">Category</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="make">Make</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="model">Model</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Accordion type="single" collapsible className="w-full" defaultValue="filters">
            <AccordionItem value="filters">
              <AccordionTrigger className="text-base">Filters</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label className="text-base">Category</Label>
                    <div className="grid gap-2">
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("category", "Brakes")} />
                        Brakes
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("category", "Engine")} />
                        Engine
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("category", "Exterior")} />
                        Exterior
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("category", "Interior")} />
                        Interior
                      </Label>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-base">Make</Label>
                    <div className="grid gap-2">
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("make", "Toyota")} />
                        Toyota
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("make", "Honda")} />
                        Honda
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("make", "Ford")} />
                        Ford
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("make", "Chevrolet")} />
                        Chevrolet
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("make", "Nissan")} />
                        Nissan
                      </Label>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-base">Model</Label>
                    <div className="grid gap-2">
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("model", "Camry")} />
                        Camry
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("model", "Civic")} />
                        Civic
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("model", "F-150")} />
                        F-150
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("model", "Silverado")} />
                        Silverado
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("model", "Altima")} />
                        Altima
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox onCheckedChange={() => handleFilterChange("model", "Accord")} />
                        Accord
                      </Label>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-base">Price</Label>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          placeholder="Min"
                          value={filters.price.min}
                          onChange={(e) =>
                            handleFilterChange("price", {
                              min: Number(e.target.value),
                              max: filters.price.max,
                            })
                          }
                          className="w-full"
                        />
                        <span>-</span>
                        <Input
                          type="number"
                          placeholder="Max"
                          value={filters.price.max}
                          onChange={(e) =>
                            handleFilterChange("price", {
                              min: filters.price.min,
                              max: Number(e.target.value),
                            })
                          }
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <ul className="grid gap-8">
            {filteredParts.map((part) => (
              <li key={part.id} className="grid gap-4">
                <div className="grid gap-2.5 relative group">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt={part.name}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">{part.name}</h3>
                    <p className="text-sm leading-none">{part.description}</p>
                    <div className="flex items-center gap-4">
                      <h4 className="font-semibold">${part.price}</h4>
                      {part.inStock ? (
                        <Badge variant="success">In Stock</Badge>
                      ) : (
                        <Badge variant="danger">Out of Stock</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ArrowUpDownIcon(props) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}