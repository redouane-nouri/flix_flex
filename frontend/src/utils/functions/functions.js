import api from "../../lib/axios/axios";

export async function fetch_all_favorites(
  endpoint,
  page = 1,
  all_results = [],
) {
  const response = await api.get(
    `/account/null/favorite/${endpoint}?language=en-US&page=${page}&sort_by=created_at.asc`,
  );
  const { results, total_pages } = response.data;

  all_results = all_results.concat(results);

  if (page < total_pages) {
    return fetch_all_favorites(endpoint, page + 1, all_results);
  }

  return all_results;
}
