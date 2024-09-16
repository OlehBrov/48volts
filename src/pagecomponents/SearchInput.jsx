import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SearchInput = () => {
  return (
    <div className="flex">
      <form className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" name="query" />
        <Button>Search</Button>
      </form>
    </div>
  );
};

export default SearchInput;
