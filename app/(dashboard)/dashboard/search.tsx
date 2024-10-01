
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function SearchInput() {


  return (
    <form className="relative ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-[.75rem] h-4 w-4 text-muted-foreground" />
      <Input
        name="q"
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
      />
    </form>
  );
}
