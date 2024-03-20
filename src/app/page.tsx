'use client';

import { useRouter } from 'next/navigation';
import { Badge } from '@mui/material';
import { DateTime } from 'luxon';
import { useGetDoorsQuery } from '@/lib/features/api/apiSlice';

export default function Home() {
  const router = useRouter();
  const {
    data: doors,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDoorsQuery();

  if (isLoading) return null;
  if (isError)
    return <div className='text-red-500'>Error! {error.toString()}</div>;
  if (isSuccess) {
    return (
      <main className='flex flex-col items-center'>
        <table className='mx-auto w-fit table-auto overflow-x-auto text-xs sm:text-base'>
          <thead>
            <tr className='text-bold text-sky-600'>
              <th className='border px-4 py-2 '>Name</th>
              <th className='border px-4 py-2'>Building</th>
              <th className='border px-4 py-2'>Connection Type</th>
              <th className='border px-4 py-2'>Connection Status</th>
              <th className='border px-4 py-2'>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {doors &&
              doors.map((door) => (
                <tr
                  key={door?.id}
                  className='text-center hover:cursor-pointer hover:bg-sky-950'
                  onClick={() => router.push(`/${door?.id}`)}
                >
                  <td className='border px-4 py-2'>{door?.['name']}</td>
                  <td className='border px-4 py-2'>{door?.['building']}</td>
                  <td className='border px-4 py-2'>
                    {door?.['connection-type']}
                  </td>
                  <td className='border px-4 py-2'>
                    <Badge
                      color={
                        door?.['connection-status'] == 'online'
                          ? 'success'
                          : 'warning'
                      }
                      variant='dot'
                    >
                      {door?.['connection-status']}
                    </Badge>
                  </td>
                  <td className='border px-4 py-2'>
                    {DateTime.fromSeconds(
                      door?.['last-updated']
                    ).toLocaleString(DateTime.DATETIME_MED)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    );
  }
}
