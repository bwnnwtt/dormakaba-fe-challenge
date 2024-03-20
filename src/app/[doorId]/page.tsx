'use client';

import { Badge } from '@mui/material';
import { DateTime } from 'luxon';
import { useGetDoorQuery } from '@/lib/features/api/apiSlice';

export default function Page({ params }: { params: { doorId: string } }) {
  const {
    data: door,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDoorQuery(Number(params.doorId));

  if (isLoading) return null;
  if (isError)
    return <div className='text-red-500'>Error! {error.toString()}</div>;
  if (isSuccess) {
    return (
      door && (
        <div className='flex h-[calc(100vh-80px)] flex-row items-center sm:h-fit'>
          <div className='mx-auto flex w-fit flex-col items-center space-y-4 text-sm sm:text-lg'>
            <div>
              <span className='text-sky-400'>Door Name:&nbsp;</span>
              {door?.['name']}
            </div>
            <div>
              <span className='text-sky-400'>Building Name:&nbsp;</span>
              {door?.['building']}
            </div>
            <div>
              <span className='text-sky-400'>Connection Type:&nbsp;</span>
              {door?.['connection-type']}
            </div>
            <div>
              <Badge
                color={
                  door?.['connection-status'] == 'online'
                    ? 'success'
                    : 'warning'
                }
                variant='dot'
              >
                <span className='text-sky-400'>Connection Status:&nbsp;</span>
                {door?.['connection-status']}
              </Badge>
            </div>
            <div>
              <span className='text-sky-400'>Last Updated:&nbsp;</span>
              {DateTime.fromSeconds(door?.['last-updated']).toLocaleString(
                DateTime.DATETIME_MED
              )}
            </div>
          </div>
        </div>
      )
    );
  }
}
