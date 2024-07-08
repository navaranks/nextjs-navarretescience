import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

interface Handout {
    title: string
    url: string
}

interface UnitTableProps {
    unitTitle: string;
    unitSubtitle: string;
    handouts: Handout[];
}
const UnitTable: React.FC<UnitTableProps> = ({ unitTitle, unitSubtitle, handouts }) => {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='hidden md:block font-extrabold text-2xl text-primary vertical-middle py-2 '>{`${unitTitle}: ${unitSubtitle}`}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {handouts.map((handout, index) => (
                        <TableRow key={index} className='odd:bg-secondary'>
                            <TableCell className='hover:underline hover:text-primary  hover:bg-muted/50'>
                                <a href={handout.url}>{handout.title}</a>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UnitTable;