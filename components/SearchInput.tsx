import { useDebouncedCallback } from '@/hooks/useDebounceCallback'

export function SearchInput({ onSearch }: { onSearch: (query: string) => void }) {
  const debouncedSearch = useDebouncedCallback(onSearch, 300)

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => debouncedSearch(e.target.value)}
      className="px-4 py-2 border rounded-md"
    />
  )
}

