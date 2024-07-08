import { Skeleton } from "./ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

export function ScheduleLoading() {
  return (
    // <div className="flex flex-col space-y-3">
    //   <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    //   <div className="space-y-2">
    //     <Skeleton className="h-4 w-[250px]" />
    //     <Skeleton className="h-4 w-[250px]" />
    //   </div>
    // </div>
    <div className="w-full mx-auto">
      <div className="border rounded-md ">
        <h3 className="flex rounded-md ">
          <div className="flex flex-1 items-center justify-between p-4">
            <Skeleton className="h-6 w-[250px] mx-auto" />
            <Skeleton className="rounded-sm w-[24px] h-[24px]" />
          </div>
        </h3>
        <div className="lg:h-[330px] ">
        <Table>
      <TableHeader>
        <TableRow className='border-none lg:border-b'>
          <TableHead className='hidden md:table-cell bg-gray-900 text-center'>
            <Skeleton className="mx-auto h-6 w-[100px] " />
          </TableHead>
          <TableHead className='hidden md:table-cell bg-gray-900 text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableHead>
          <TableHead className='hidden md:table-cell bg-gray-900 text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableHead>
          <TableHead className='hidden md:table-cell bg-gray-900 text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        
          <TableRow >
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
          </TableRow>
          <TableRow >
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
          </TableRow>
          <TableRow >
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
          </TableRow>
          <TableRow >
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
          </TableRow>
          <TableRow >
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
            <TableCell className='block md:table-cell text-center'><Skeleton className="mx-auto h-6 w-[100px]" /></TableCell>
          </TableRow>
        
      </TableBody>
    </Table>
        </div>
      </div>
      <div className="border rounded-md ">
        <h3 className="flex rounded-md ">
          <div className="flex flex-1 items-center justify-between p-4">
            <Skeleton className="h-6 w-[250px] mx-auto" />
            <Skeleton className="rounded-full w-[24px] h-[24px]" />
          </div>
        </h3>
        </div>
        <div className="border rounded-md ">
        <h3 className="flex rounded-md ">
          <div className="flex flex-1 items-center justify-between p-4">
            <Skeleton className="h-6 w-[250px] mx-auto" />
            <Skeleton className="rounded-full w-[24px] h-[24px]" />
          </div>
        </h3>
        </div>
      
      
      
      
      
      
      
      
    </div>
    
  )
}
