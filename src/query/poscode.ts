import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
  UseMutationResult
} from 'react-query';
import postcodeInstance from '../services/getAddressAPI';

type PostcodeResourse = {
  "latitude": 52.24593734741211,
  "longitude": -0.891636312007904,
  "addresses": Array<string>
}


export function usePostcodeSearch(postcode?: string) {
  const queryOptions = {};
  const url = `/find/${postcode}?api-key=gm50TZ2Hj0aQdFsyWRbrZw36294`;

  return useQuery(
    url,
    () => postcodeInstance.get<PostcodeResourse>,
    { enabled: !!postcode, ...queryOptions }
  );
  
}

// export function useAutocomplete(partialpostcode) {
//   return useQuery(text && ["colorSearch", text], searchColors);
// }