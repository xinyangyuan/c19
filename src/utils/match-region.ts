import fuzzy from "fuzzy";

import allRegions, { Region } from "../lib/regions";

/**
 * Fuzzy Match Region
 * @params: input <string> ; regions? <Region[]> ; match_score_threshold?: <number>
 * @return: match_result <fuzzy.FilterResult<Region>[]>
 */

const fuzzyMatchRegion = (
  input: string,
  extract?: "name" | "iso2" | "iso3",
  regions?: Region[],
  match_score_threshold?: number
) => {
  // Process arguments
  input = input || "";
  regions = regions?.length ? regions : allRegions;
  extract = extract || "name";
  match_score_threshold = match_score_threshold || 300;

  // Fuzzy search options
  const options = {
    pre: "<",
    post: ">",
    extract: (region: Region) => region[extract as "name" | "iso2" | "iso3"],
  };

  // Fuzzy filter result
  return fuzzy.filter(input, regions, options);
};

export default fuzzyMatchRegion;
