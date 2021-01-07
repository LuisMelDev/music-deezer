import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { useLocation } from "wouter";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useLocation() // eslint-disable-line

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${search}`)
    setSearch('')
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Box
      as="form"
      w={{ base: "100%", md: "70%", xl: "50%" }}
      onSubmit={onHandleSubmit}
    >
      <Input
        variant="filled"
        w="100%"
        boxShadow="base"
        placeholder="Search music"
        onChange={handleChange}
        value={search}
      />
    </Box>
  );
};

export default SearchForm;
