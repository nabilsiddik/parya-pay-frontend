import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface IPaginateProps {
    page: number,
    totalPage: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const Paginate = ({page, setPage, totalPage}: IPaginateProps) => {

    const pagesArray = Array.from({length: totalPage}).map((_, index) => index+1)

    // console.log('tla',totalPage)

    return (
        <div>
            {totalPage > 0 && 
                <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => setPage(page - 1)} className={`${page === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`} />
                    </PaginationItem>
                    <PaginationItem>
                        {pagesArray.length > 0 && pagesArray.map((item) => {
                            return <PaginationLink key={item} isActive={page === item} className="cursor-pointer" onClick={() => setPage(item)}>{item}</PaginationLink>
                        })}
                    </PaginationItem>
                    {/* <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem> */}
                    <PaginationItem>
                        <PaginationNext onClick={() => setPage(page + 1)} className={`${page === totalPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            }
        </div>
    )
}

export default Paginate
