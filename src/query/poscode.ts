import {
  useQuery,
} from 'react-query';
import postcodeInstance from '../services/getAddressAPI';

export type PostcodeResourse = {
  "latitude": number,
  "longitude": number,
  "addresses": Array<string>
}

export const usePostcodeSearch = (postcode: string, queryOptions?: any) => {
  const url = `/find/${postcode}?api-key=gm50TZ2Hj0aQdFsyWRbrZw36294`;
  const fetchFunc = (): Promise<PostcodeResourse> => postcodeInstance.get(url).then(({ data }) => data);

  const query = useQuery(
    url,
    fetchFunc,
    { enabled: !!postcode,
      ...queryOptions
    }
  )

  return {
    key: url,
    ...query
  };
}